<script lang="ts">
  import BreadCrumb from "$lib/components/BreadCrumb.svelte";
  import Grid from "$lib/components/Grid.svelte";
  import Card from "$lib/components/Card.svelte";
  import Object from "$lib/components/Object.svelte";
</script>

<BreadCrumb
  items={[
    { title: "Активности", href: "/" },
    { title: "Вкладка", href: "/" },
  ]}
/>

<Grid>
  <Card
    full="Показать все"
    title="Чаты"
    description="За ответы и общение в чате мы зачисляем коины!"
  >
    <Object
      m={3}
      url="/icons/galaxy.ico"
      name="Main"
      status="3141 участник"
      num={182}
    />
    <Object
      m={3}
      url="/icons/prisma.ico"
      name="Кибер-клан"
      status="23 участника"
      num={4}
    />
    <Object
      m={3}
      url="/icons/midnight.ico"
      name="Мемы"
      status="120 участников"
      num={13}
    />
    <Object
      m={3}
      url="/icons/brackets.ico"
      name="IT-клуб"
      status="12 участников"
      num={2}
    />
    <button class="other">Загрузить больше</button>
  </Card>
</Grid>

<style lang="postcss">
  .other {
    margin: 0;
    width: 100%;
    height: 4rem;
    border-radius: 6px;
    @apply text-gray-500 gdark:text-gray-600;
    @apply border-1 border-gray-300 gdark:border-gray-700;
  }
</style>
