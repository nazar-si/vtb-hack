<script lang="ts">
  import Button from "./Button.svelte";

  export let title = "";
  export let description = "";
  export let full = ""; // текст на кнопке для открытия
  export let fullHref = ""; // ссылка для перехода по кнопке
</script>

<div class="wrapper">
  <header>
    <div class="title">
      <div class="name">{title}</div>
      <div class="description">{description}</div>
    </div>
    {#if full}
      <div class="full">
        <a tabindex="-1" href={fullHref}
          ><Button white on:click>{full}</Button></a
        >
      </div>
    {/if}
  </header>
  <main>
    <slot />
  </main>
</div>

<style lang="postcss">
  .wrapper {
    padding: 1.5rem;
    border-radius: 10px;
    @apply bg-white border-1 border-gray-200;
    @apply gdark:bg-gray-750 gdark:border-gray-700;
    header {
      display: flex;
      align-items: flex-start;
      margin-bottom: 1.5rem;
      .title {
        flex: 1;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: 4px;
        .name {
          @apply text-lg font-semibold text-gray-800;
          @apply gdark:text-gray-50;
        }
        .description {
          @apply text-gray-500;
        }
      }
    }
  }
</style>
