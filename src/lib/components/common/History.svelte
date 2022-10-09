<script lang="ts">
  import Card from "../ui/Card.svelte";
  import Frame from "../ui/Frame.svelte";
  import Badge from "../ui/Badge.svelte";
  import { RotateClockwise2 } from "tabler-icons-svelte";
  import { get } from "svelte/store";
  import { walletActionType as actionType } from "$lib/stores/user";
  import { walletData } from "$lib/stores/user";

  export let data: any[] | undefined = undefined;
  let history = $walletData.history;
  const walletFormatter = new Intl.NumberFormat("en", { notation: "compact" });
  let positiv = [actionType.GET, actionType.DONE];
  let formatter = new Intl.DateTimeFormat("ru", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
  let current = 3;
</script>

<Card title="История">
  <div class="list">
    {#each data !== undefined ? data
          .sort((a, b) => (a.date > b.date ? -1 : 1))
          .slice(0, current) : history
          .sort((a, b) => (a.date > b.date ? -1 : 1))
          .slice(0, current) as d}
      <Frame>
        <div class="entry">
          <div class="left">
            <div class="title">
              <div class="action {d.action}">
                {d.action == actionType.GET
                  ? "Поступление"
                  : d.action == actionType.PUT
                  ? "Подарок"
                  : d.action == actionType.OUT
                  ? "Вывод"
                  : d.action == actionType.BUY
                  ? "Покупка"
                  : "Активность"}
              </div>
              <div class="text">{d.text}</div>
            </div>
            <div class="date">{formatter.format(d.date)}</div>
          </div>
          <div class="right">
            {#if d.amount}
              <Badge red={!positiv.includes(d.action)} vr
                >{positiv.includes(d.action)
                  ? " + "
                  : " - "}{walletFormatter.format(d.amount)}</Badge
              >
            {/if}
            {#if d.maticsAmount}
              <Badge red={!positiv.includes(d.action)} mc
                >{positiv.includes(d.action)
                  ? " + "
                  : " - "}{walletFormatter.format(d.maticsAmount)}</Badge
              >
            {/if}
          </div>
        </div>
      </Frame>
    {/each}
    {#if current < (data ? data.length : history.length)}
      <Frame>
        <button
          class="more"
          on:click={() => {
            current += 2;
          }}>Загрузить больше <RotateClockwise2 /></button
        >
      </Frame>
    {/if}
  </div>
</Card>

<style lang="postcss">
  .list {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    .entry {
      width: 100%;
      padding: 1rem;
      display: flex;
      gap: 1rem;
      height: 5rem;
      align-items: center;
      .left {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
      }
      .right {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
      }
      .title {
        display: flex;
        gap: 0.5rem;
        align-items: center;
        .text {
          @apply text-gray-800 gdark:text-gray-50 font-medium;
        }
        .action {
          @apply text-sm font-medium;
          width: fit-content;
          padding: 0 0.5rem;
          @apply border-2 border-gray-500;
          border-radius: 24px;
          &.get {
            @apply text-green-600 bg-green-500/10 border-green-500 gdark:text-green-400;
          }
          &.done {
            @apply text-blue-600 bg-blue-500/10 border-blue-500 gdark:text-blue-400;
          }
          &.buy {
            @apply text-amber-600 bg-amber-500/10 border-amber-500 gdark:text-amber-400;
          }
          &.put {
            @apply text-rose-600 bg-rose-500/10 border-rose-500 gdark:text-rose-400;
          }
          &.out {
            @apply text-gray-600 bg-gray-500/10 border-gray-500 gdark:text-gray-400;
          }
        }
      }
      .date {
        @apply text-gray-400 gdark:text-gray-550 text-sm;
      }
    }
    .more {
      width: 100%;
      height: 4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
    }
  }
</style>
