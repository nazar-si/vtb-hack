<script lang="ts" context="module">
</script>

<script lang="ts">
  import History from "$lib/components/common/History.svelte";
  import Card from "$lib/components/ui/Card.svelte";
  import { page } from "$app/stores";
  import BreadCrumb from "$lib/components/BreadCrumb.svelte";
  import { userData, walletData, roleType } from "$lib/stores/user";
  import {
    type userDataType,
    type walletDataType,
    walletActionType as wat,
  } from "$lib/stores/user";
  import Input from "$lib/components/ui/Input.svelte";
  import Button from "$lib/components/ui/Button.svelte";
  import Multiple from "$lib/components/ui/Multiple.svelte";
  import WalletValue from "$lib/components/common/WalletValue.svelte";
  import Badge from "$lib/components/ui/Badge.svelte";
  import { Pencil } from "tabler-icons-svelte";
  import { onMount } from "svelte";
  import { get } from "$lib/help/fetch";
  const formatter = new Intl.NumberFormat("en", { notation: "compact" });

  let maticsValue: number = 0;
  let value: number = 0;
  let maxValue: number = 0;

  let pageId = $page.params.id;

  let edit = [];
  let data: userDataType = {
    url: "/favicon.png",
    name: "",
    role: roleType.default,
    email: "",
    bio: "",
    birthday: new Date("1982-03-17"),
    surname: "",
    id: -1,
  };

  let customHistory;
  if (pageId == "me") data = $userData;
  if (pageId == "me") value = $walletData.value;
  if (pageId == "me") maxValue = $walletData.maxValue;
  if (pageId == "me") maticsValue = $walletData.maticsValue;

  let nextLevel = 6000;
  let previousLevel = 4500;
  onMount(() => {
    if (pageId != "me") {
      let token = window.localStorage.getItem("token");
      get(`/users/${pageId}`, token)
        .then((res) => res.json())
        .then((json) => {
          data = {
            url: json.avatar,
            email: json.email,
            name: json.name,
            surname: json.surname,
            bio: json.bio,
            role: [
              roleType.admin,
              roleType.manager,
              roleType.editor,
              roleType.default,
            ][json.role],
            id: json.id,
          };

          customHistory = json.transactions.map((a) => ({
            value: a.currency_type == 0 ? a.amount : undefined,
            maticsValue: a.currency_type == 1 ? a.amount : undefined,
            date: new Date(a.date),
            text: a.text,
            action: [wat.GET, wat.PUT, wat.OUT, wat.BUY, wat.DONE][
              a.transaction_type
            ],
          }));
          value = json.rouble_balance;
          maxValue = json.max_roubles;
          maticsValue = json.matic_balance * 1000;
        });
    }
  });
  let levelProgress = 0;
  $: levelProgress = Math.min(
    1,
    Math.max(0, 1 - (nextLevel - maxValue) / (nextLevel - previousLevel))
  );
  $: edit = pageId == "me" ? edit : [];
</script>

{#if pageId == "me"}
  <BreadCrumb items={[{ title: "Профиль", href: "/user/me" }]} />
{:else}
  <BreadCrumb
    items={[
      { title: "Рейтинг", href: "/rate" },
      { title: `${data.name} ${data.surname}`, href: `/user/${pageId}` },
    ]}
  />
{/if}

<div class="main">
  <div class="entry">
    <Card height="100%"
      ><div class="left">
        <div class="toggle-edit">
          <Multiple
            components={[Pencil]}
            bind:value={edit}
            check
            type="icon"
            small
          />
        </div>
        <div class="vertical">
          <div class="image">
            <div class="icon" class:edit={!isNaN(edit[0])}>
              <img src={data.url} alt="" />
            </div>
            {#if !isNaN(edit[0])}<Button white>Обновить</Button>{/if}
          </div>
          <div class="fields" class:edit={!isNaN(edit[0])}>
            <div class="row">
              {#if !isNaN(edit[0])}
                <Input bind:value={$userData.name} />
                <Input bind:value={$userData.surname} />
              {:else}
                <div class="name">
                  {data.name}
                  {data.surname}
                </div>
              {/if}
            </div>

            {#if !isNaN(edit[0])}
              <Input bind:value={$userData.email} />
            {:else}
              <div class="email">{data.email}</div>
            {/if}
            {#if !isNaN(edit[0])}
              <Input bind:value={$userData.bio} />
            {:else}
              <div class="bio">{data.bio}</div>
            {/if}
          </div>
        </div>
      </div></Card
    >
  </div>
  <div class="entry">
    <Card height="100%"
      ><div class="right">
        <div class="currency">
          <div class="number">
            <span>V₽:</span>
            {formatter.format(value)}
            <div />
            <div />
            <span>Max V₽:</span>
            {formatter.format(maxValue)}
            <div />
            <div />
            <span>M€:</span>
            {maticsValue.toFixed(1)}
          </div>
        </div>
        <div class="levels">
          <div class="row">
            <div class="start">
              <div class="title">Гений мысли</div>
              <Badge vr>{formatter.format(maxValue)}</Badge>
            </div>
            <div class="end">
              <div class="title">Ультрамен</div>
              <Badge vr>{formatter.format(nextLevel)}</Badge>
            </div>
          </div>
          <div class="bar">
            <div class="track" style:width="{levelProgress * 100}%" />
          </div>
          <div class="left">
            <Badge vr>Осталось: {formatter.format(nextLevel - maxValue)}</Badge>
          </div>
        </div>
      </div>
    </Card>
  </div>
</div>
<History data={customHistory} />

<style lang="postcss">
  .main {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 1.5rem;
    gap: 1.5rem;
    flex-wrap: wrap;
    align-items: stretch;
    .entry {
      flex: 1;
      @apply border-1 border-transparent hover:border-blue-500 transition-all;
      border-radius: 10px;
      align-self: stretch;
    }
    .left {
      display: flex;
      flex-direction: column;
      flex: 1;
      gap: 1rem;
      height: 100%;
      justify-content: center;
      position: relative;
      .vertical {
        display: flex;
        gap: 1rem;
      }
      .toggle-edit {
        position: absolute;
        top: -1rem;
        right: -1rem;
      }
      .image {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        .icon {
          width: 8rem;
          height: 8rem;
          &.edit {
            width: 6rem;
            height: 6rem;
          }
          border-radius: 4rem;
          overflow: hidden;
          @apply border-4 border-white shadow-main-lg gdark:border-gray-700;
          img {
            width: 100%;
            height: 100%;
            border-radius: 4rem;
            object-fit: cover;
          }
        }
      }
      .fields {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        align-items: stretch;
        flex: 1;
        justify-content: flex-start;
        &.edit {
          gap: 0.5rem;
          justify-content: space-between;
        }
        .email {
          cursor: pointer;
          @apply text-blue-500;
        }
        .name {
          @apply text-gray-800 gdark:text-gray-50 text-lg font-medium;
        }

        .bio {
          @apply text-gray-600 gdark:text-gray-400;
        }
        .row {
          display: flex;
          gap: 0.5rem;
        }
      }
    }
    .right {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      gap: 1.5rem;
      .currency {
        @apply flex flex-col;
      }
      .levels {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        .row {
          display: flex;
          justify-content: space-between;
          .start,
          .end {
            @apply flex flex-col;
            gap: 0.25rem;
            @apply text-gray-800 gdark:text-gray-50 font-medium;
          }
          .start {
            align-items: flex-start;
          }
          .end {
            align-items: flex-end;
          }
        }
        .bar {
          width: 100%;
          height: 12px;
          border-radius: 10px;
          padding: 3px;
          @apply bg-gray-100 gdark:bg-gray-800;
          .track {
            height: 100%;
            border-radius: 4px;
            @apply bg-blue-500;
            box-shadow: 0 0 6px #08f8;
          }
        }
        .left {
          @apply flex items-center;
        }
      }
    }
    .number {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      white-space: nowrap;
      font-size: 24px;
      @apply text-gray-900 font-medium gdark:text-gray-50;
      span {
        @apply text-gray-400 font-medium gdark:text-gray-550;
      }
    }
  }
</style>
