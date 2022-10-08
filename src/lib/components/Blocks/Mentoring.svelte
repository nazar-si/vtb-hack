<script lang="ts">
  import Card from "../ui/Card.svelte";
  import Button from "../ui/Button.svelte";
  import Object from "../ui/Object.svelte";

  interface person {
    name: string;
    status: string;
    coins: string;
    url: string;
  }

  interface dataType {
    isMentor: boolean;
    menti?: person[];
  }
  export let data: dataType;
</script>

<Card
  title="Менторство"
  description="Стань ментором для других сотрудников и помогай им в прохождении курсов."
>
  <div class="list">
    {#if !data.isMentor}
      <Button>Стать ментором</Button>
    {:else}
      {#each data.menti as m, id}
        <Object
          name={m.name}
          url={m.url}
          status={m.status}
          num="{m.coins} V₽"
        />
      {:else}
        <div class="text">Ваша заявка на менторство обрабатывается...</div>
      {/each}
    {/if}
  </div>
</Card>

<style lang="postcss">
  .text {
    @apply text-gray-500;
  }
  .list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: mentor;
  }
</style>
