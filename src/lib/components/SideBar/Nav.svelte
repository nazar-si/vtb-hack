<script lang="ts">
  import { roleType, userData } from "$lib/stores/user";
  export let selected = 0;
  import {
    Star,
    News,
    ShoppingCart,
    Wallet,
    ChartBar,
    LayoutGrid,
    Hierarchy,
  } from "tabler-icons-svelte";

  interface e {
    url: string;
    name: any;
    icon: any;
    access?: string[];
  }
  let entries: e[] = [
    { url: "/", name: "Активности", icon: Star },
    { url: "/news", name: "Новости", icon: News },
    { url: "/shop", name: "Магазин", icon: ShoppingCart },
    { url: "/wallet", name: "Кошелёк", icon: Wallet },
    { url: "/rate", name: "Рейтинг", icon: ChartBar },
    { url: "/gallery", name: "Третьяковка", icon: LayoutGrid },
    {
      url: "/admin",
      name: "Администрирование",
      icon: Hierarchy,
      access: [roleType.admin],
    },
  ].filter(
    (a: e) => a.access === undefined || a.access?.includes($userData.role)
  );
</script>

<div class="wrapper">
  {#each entries as entry, id}
    <a
      href={entry.url}
      class="entry"
      class:selected={id == selected}
      on:click={() => {
        selected = id;
      }}
    >
      <div class="icon"><svelte:component this={entry.icon} /></div>
      <div class="title">{entry.name}</div>
    </a>
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
