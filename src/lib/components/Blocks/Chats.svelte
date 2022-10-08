<script lang="ts">
  import Card from "../ui/Card.svelte";
  import Object from "../ui/Object.svelte";
  import Frame from "../ui/Frame.svelte";

  import declOfNum from "../../help/declOfNum";
  interface item {
    url: string;
    name: string;
    count: number; // число участников
    number: number; // число уведомлений
  }
  export let data: item[];
</script>

<Card
  full="Показать все"
  title="Чаты"
  description="За ответы и общение в чате мы зачисляем коины!"
>
  {#each data as item, id}
    <Object
      name={item.name}
      url={item.url}
      num={item.number.toString()}
      status="{item.count} {declOfNum(item.count, [
        'участник',
        'участника',
        'участников',
      ])}"
      m={3}
    />
  {/each}
  <Frame><div class="object">Загрузить больше</div></Frame>
</Card>

<style lang="postcss">
  .object {
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
