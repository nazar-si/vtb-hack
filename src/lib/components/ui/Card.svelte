<script lang="ts">
  import Button from "./Button.svelte";

  export let title = "";
  export let description = "";
  export let full = ""; // текст на кнопке для открытия
  export let fullHref = ""; // ссылка для перехода по кнопке
  export let height = "";
</script>

<div class="wrapper" style:height>
  {#if title || description || full}<header>
      <div class="title">
        {#if title}<div class="name">{title}</div>{/if}
        {#if description}<div class="description">{description}</div>{/if}
      </div>
      {#if full}
        <div class="full">
          <a tabindex="-1" href={fullHref}
            ><Button white on:click>{full}</Button></a
          >
        </div>
      {/if}
    </header>{/if}
  <main>
    <slot />
  </main>
</div>

<style lang="postcss">
  .wrapper {
    padding: 1.5rem;
    border-radius: 10px;
    height: fit-content;
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
    main {
      width: 100%;
      height: 100%;
    }
  }
</style>
