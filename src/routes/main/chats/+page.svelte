<script lang="ts">
  import BreadCrumb from "$lib/components/BreadCrumb.svelte";
  import Card from "$lib/components/ui/Card.svelte";
  import Modal from "$lib/components/ui/Modal.svelte";
  import Object from "$lib/components/ui/Object.svelte";
  import declOfNum from "$lib/help/declOfNum";

  interface item {
    url: string;
    name: string;
    count: number; // число участников
    number: number; // число уведомлений
  }
  let data: item[] = [
    {
      url: "/icons/galaxy.ico",
      name: "Main",
      count: 3141,
      number: 182,
    },
    {
      url: "/icons/prisma.ico",
      name: "Кибер-клан",
      count: 23,
      number: 4,
    },
    {
      url: "/icons/midnight.ico",
      name: "Мемы",
      count: 120,
      number: 13,
    },
    {
      url: "/icons/brackets.ico",
      name: "IT-клуб",
      count: 12,
      number: 2,
    },
    {
      url: "/icons/spacemacs.ico",
      name: "Windscribe",
      count: 7,
      number: 1,
    },
    {
      url: "/icons/3d-coat.ico",
      name: "Ковбои",
      count: 4,
      number: 6,
    },
  ];
  let other: item[] = [
    {
      url: "/icons/daemon.ico",
      name: "Филиал ада",
      count: 234,
      number: 12,
    },
    {
      url: "/icons/cube.ico",
      name: "Ультра-Кибер клан",
      count: 54,
      number: 24,
    },
    {
      url: "/icons/winrar.ico",
      name: "Свободное время",
      count: 347,
      number: 10,
    },
    {
      url: "/icons/whatsapp.ico",
      name: "Коммуникация",
      count: 18,
      number: 32,
    },
  ];
  let show = false;
</script>

<Modal bind:show on:click={() => (show = !show)}
  >У вас недостаточно коинов, что использовать данный чат.</Modal
>
<BreadCrumb
  items={[
    { title: "Активности", href: "/" },
    { title: "Чаты", href: "/main/chats" },
  ]}
/>

<Card title="Ваши чаты">
  {#each data as item, id}
    <Object
      name={item.name}
      url={item.url}
      num={item.number.toString()}
      on:click={() => (show = true)}
      bell
      status="{item.count} {declOfNum(item.count, [
        'участник',
        'участника',
        'участников',
      ])}"
      m={3}
    />
  {/each}
</Card>
<br />
<Card title="Остальные чаты">
  {#each other as item, id}
    <Object
      name={item.name}
      url={item.url}
      on:click={() => (show = true)}
      status="{item.count} {declOfNum(item.count, [
        'участник',
        'участника',
        'участников',
      ])}"
      m={3}
    />
  {/each}
</Card>
