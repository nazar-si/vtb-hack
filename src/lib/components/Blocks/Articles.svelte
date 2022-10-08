<script lang="ts">
  import Card from "../ui/Card.svelte";
  import Article from "../Article.svelte";
  import type { Article as ArticleType } from "../Article.svelte";
  import Multiple from "../ui/Multiple.svelte";
  import Frame from "../ui/Frame.svelte";
  import Ask from "../Ask.svelte";

  export let data: ArticleType[];
</script>

<Card
  title="Статьи"
  description="Читай и пиши статьи, мы зачислим тебе баллы за это."
  full="Показать все"
>
  <Multiple components={["Недавние", "Популярные"]} />
  <div class="my-4" />
  <div class="column">
    {#each data as article}
      <Article data={article} />
    {/each}
    <Frame>
      <div class="more">Загрзить больше</div>
    </Frame>
    <Ask title="Напиши свою статью" points={5} placeholder="Название статьи" />
  </div>
</Card>

<style lang="postcss">
  .column {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .more {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
    cursor: pointer;
  }
</style>
