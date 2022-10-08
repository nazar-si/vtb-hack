<script lang="ts">
  import { ArrowRight } from "tabler-icons-svelte";
  interface item {
    title: string;
    href: string;
  }
  export let items: item[];
</script>

<div class="wrapper">
  {#each items as item, id}
    {#if id != 0}
      <div class="arrow"><ArrowRight size={48} strokeWidth={3} /></div>
    {/if}
    <a class="item" href={item.href} class:current={id == items.length - 1}>
      {item.title}
    </a>
  {/each}
</div>

<style lang="postcss">
  .wrapper {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    @apply text-gray-400 text-4xl font-bold gdark:text-gray-500;
    a {
      @apply hover:text-gray-500 transition-all;
    }
    a.current {
      @apply text-gray-800 gdark:text-gray-100;
    }
  }
</style>
