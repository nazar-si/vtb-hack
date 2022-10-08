<script lang="ts">
  export let selected = 0;
  import {
    Star,
    News,
    ShoppingCart,
    Wallet,
    ChartBar,
  } from "tabler-icons-svelte";
  let entries = [
    { name: "Активности", icon: Star },
    { name: "Новости", icon: News },
    { name: "Магазин", icon: ShoppingCart },
    { name: "Кошелёк", icon: Wallet },
    { name: "Рейтинг", icon: ChartBar },
  ];
</script>

<div class="wrapper">
  {#each entries as entry, id}
    <button
      class="entry"
      class:selected={id == selected}
      on:click={() => {
        selected = id;
      }}
    >
      <div class="icon"><svelte:component this={entry.icon} /></div>
      <div class="title">{entry.name}</div>
    </button>
  {/each}
</div>

<style lang="postcss">
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 8px;
    .entry {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 6px 8px;
      @apply text-gray-500 font-medium transition-all gdark:text-gray-400;
      border-radius: 6px;
      .icon {
        @apply text-gray-400 gdark:text-gray-500;
      }
      @apply hover:bg-white/30 gdark:hover:bg-gray-700 focus:bg-white/30 gdark:focus:bg-gray-700;
      &.selected {
        @apply bg-white gdark:bg-blue-500 gdark:text-white;
        .icon {
          @apply gdark:text-white;
        }
      }
    }
  }
</style>
