<script lang="ts">
  import BreadCrumb from "$lib/components/BreadCrumb.svelte";
  import Badge from "$lib/components/ui/Badge.svelte";
  import Button from "$lib/components/ui/Button.svelte";
  import Card from "$lib/components/ui/Card.svelte";
  import Frame from "$lib/components/ui/Frame.svelte";
  import Modal from "$lib/components/ui/Modal.svelte";
  import Multiple from "$lib/components/ui/Multiple.svelte";
  import { walletData, walletActionType } from "$lib/stores/user";

  const formatter = new Intl.NumberFormat("en", { notation: "compact" });

  import { get, post } from "$lib/help/fetch";

  import { onMount } from "svelte";
  let data = [];
  let token: string;
  onMount(() => {
    token = window.localStorage.getItem("token");
    get("/market/", token)
      .then((res) => res.json())
      .then((json) => {
        data = json.map((a) => ({
          id: a.id,
          name: a.name,
          url: a.image,
          value: a.amount_type == 0 ? a.amount : undefined,
          maticsValue: a.amount_type == 1 ? a.amount : undefined,
          description: a.description,
        }));
      });
  });
  let buy = () => {
    let l = data[current];
    $walletData.history.push({
      action: walletActionType.BUY,
      date: new Date(),
      text: `Покупка ${l.name}`,
      amount: l.value,
      maticsAmount: l.maticsValue,
    });
    $walletData.value -= l.value;
    $walletData.maticsValue -= l.maticsValue;
  };

  let mode = [0];
  let modal_open = false;
  let current = -1;
</script>

<BreadCrumb items={[{ title: "Магазин", href: "/shop" }]} />

<Modal bind:show={modal_open} on:click={() => (modal_open = false)}>
  Вы подтверждаете, что хотите купить товар за {#if data[current].value}<Badge
      vr>{formatter.format(data[current].value)}</Badge
    >{/if}
  {#if data[current].maticsValue}<Badge mc
      >{formatter.format(data[current].maticsValue)}</Badge
    >{/if}
  <div />
  <br />
  <div style:width="100%">
    <Button
      on:click={() => {
        modal_open = false;
        buy();
      }}>Купить</Button
    >
  </div>
</Modal>

<!-- <div class="choice">
  <Multiple components={["Магазин", "NFT"]} bind:value={mode} />
</div> -->

<div class="grid">
  {#each data as element, id}
    <div class="entry">
      <div class="image">
        <img src={element.url} alt="" />
      </div>
      <div class="price">
        {#if element.value}<Badge vr>{formatter.format(element.value)}</Badge
          >{/if}
        {#if element.maticsValue}<Badge mc
            >{formatter.format(element.maticsValue)}</Badge
          >{/if}
      </div>
      <div class="group">
        <div class="text">
          <div class="title">{element.name}</div>
          <div class="description">
            {element.description}
          </div>
        </div>
        <Button
          white
          on:click={() => {
            modal_open = true;
            current = id;
          }}
          disabled={$walletData.value < element.value ||
            $walletData.maticsValue < element.maticsValue}>Купить</Button
        >
      </div>
    </div>
  {:else}
    <Card>
      <Frame><div class="nothing">Ничего нет</div></Frame>
    </Card>
  {/each}
</div>

<style lang="postcss">
  .choice {
    width: fit-content;
    padding-bottom: 1rem;
  }
  .nothing {
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .grid {
    gap: 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    .entry {
      min-height: 400px;
      border-radius: 10px;
      overflow: hidden;
      display: flex;
      align-items: stretch;
      flex-direction: column;
      @apply border-1 border-gray-300 bg-white gdark:border-gray-700 gdark:bg-gray-750 hover:!border-blue-500 transition-all;
      .image {
        width: 100%;
        height: 50%;
        overflow: hidden;
        @apply border-b-1 border-gray-300 gdark:border-gray-700 shadow-main-md gdark:shadow-main-lg;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .price {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
      }
      .group {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: space-between;
        padding: 1rem;
        padding-top: 0;
        .text {
          .title {
            @apply text-gray-800 gdark:text-gray-50 text-lg font-medium;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
          .description {
            @apply text-gray-500 gdark:text-gray-500;
          }
        }
      }
    }
  }
</style>
