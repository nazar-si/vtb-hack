<script lang="ts">
  import Frame from "../ui/Frame.svelte";
  import Card from "../ui/Card.svelte";
  import declOfNum from "$lib/help/declOfNum";
  import Multiple from "$lib/components/ui/Multiple.svelte";
  import Ask from "../Ask.svelte";
  interface item {
    title: string;
    count: number; // answers count
    id: number;
  }
  export let data: item[];
</script>

<Card
  title="Форум"
  description="Общайся на любые темы, а мы будем начислять бе баллы за сообщения. Ниже ты можешь увидеть последние сообщения форума"
  full="На форум"
>
  <div class="list">
    <Multiple components={["Недавние", "Популярные"]} />
    {#each data as item, id}
      <Frame>
        <div class="entry">
          <div class="title">{item.title}</div>
          <div class="count">
            {item.count}
            {declOfNum(item.count, ["ответ", "ответа", "ответов"])}
          </div>
        </div>
      </Frame>
    {/each}
    <Ask title="Задай свой вопрос" points={2} placeholder="Ваш вопрос" />
  </div>
</Card>

<style lang="postcss">
  .list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .entry {
      cursor: pointer;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      .title {
        @apply text-lg font-medium text-gray-800 gdark:text-gray-50;
      }
      .count {
        @apply text-gray-500;
      }
    }
  }
</style>
