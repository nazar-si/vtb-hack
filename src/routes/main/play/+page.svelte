<script lang="ts">
  import BreadCrumb from "$lib/components/BreadCrumb.svelte";
  import TruthDare from "$lib/components/Blocks/TruthDare.svelte";

  let data = [
    {
      truth: "Я в туалете, что делать?",
      dare: "Поменять воду в куллере",
      truthPrice: 23,
      darePrice: 0.2,
      dareMatics: true,
      truthTill: new Date("2022-10-9 8:00"),
      dareTill: new Date("2022-10-9 8:00"),
      answersCount: 12,
      answer: true,
    },
    {
      truth: "Реально ли пережить дедлайн в офисе?",
      dare: "Принести резюме для заполнения страницы сайта",
      truthPrice: 12,
      darePrice: 0.1,
      dareMatics: true,
      truthTill: new Date("2022-10-11 9:30"),
      dareTill: new Date("2022-10-11 9:30"),
      answersCount: 12,
      answer: true,
    },
  ];
</script>

<BreadCrumb
  items={[
    { title: "Активности", href: "/" },
    { title: "Правда или действие", href: "/main/play" },
  ]}
/>

<div class="list">
  {#each data as d, id}
    <TruthDare hideTitle data={d} on:truth />
  {/each}
</div>

<style lang="postcss">
  .list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
</style>
