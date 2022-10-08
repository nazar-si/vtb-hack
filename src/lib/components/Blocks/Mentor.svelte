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
    isMenti: boolean;
    mentor?: person;
  }
  export let data: dataType;
</script>

<Card
  title="Метор"
  description="Работайте вместе с ментором, чтобы получить опыт от более квалифицированных сотрудников."
>
  <div class="list">
    {#if !data.isMenti}
      <Button
        on:click={() => {
          data.isMenti = true;
        }}>Подать заявку на метора</Button
      >
    {:else if data.mentor}
      <Object
        name={data.mentor.name}
        url={data.mentor.url}
        status={data.mentor.status}
        num="{data.mentor.coins} V₽"
      />
    {:else}
      <div class="text">Ваша заявка на ментора обрабатывается...</div>
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
