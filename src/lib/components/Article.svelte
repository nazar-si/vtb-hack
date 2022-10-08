<script lang="ts" context="module">
  export type Article = {
    description?: string;
    updatedAt: Date;
    readTime: number;
    author: number;
    title: string;
  };
</script>

<script lang="ts">
  import declOfNum from "$lib/help/declOfNum";
  import Frame from "./ui/Frame.svelte";
  export let data: Article;
</script>

<Frame>
  <button class="wrapper">
    <div class="title">{data.title}</div>
    {#if data.description}
      <div class="description">{data.description}</div>
    {/if}
    <footer>
      <div class="time">
        {data.readTime}
        {declOfNum(Math.floor(data.readTime), ["минута", "минуты", "минут"])}
        на чтение,
      </div>
      <a class="author" href="">{data.author}</a>
    </footer>
  </button>
</Frame>

<style lang="postcss">
  .wrapper {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    .title {
      text-align: left;
      @apply text-lg font-medium text-gray-800 gdark:text-gray-50;
    }
    .description {
      margin-top: -0.25rem;
      text-align: left;
      @apply text-gray-600 gdark:text-gray-400;
    }
    footer {
      font-size: 15px;
      @apply text-gray-400 gdark:text-gray-600;
      display: flex;
      gap: 1rem;
      .author {
        @apply hover:text-blue-500;
      }
    }
  }
</style>
