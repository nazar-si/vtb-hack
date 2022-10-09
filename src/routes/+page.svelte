<script lang="ts">
  import BreadCrumb from "$lib/components/BreadCrumb.svelte";
  import Grid from "$lib/components/ui/Grid.svelte";
  import TruthDare from "$lib/components/Blocks/TruthDare.svelte";
  import Chats from "$lib/components/Blocks/Chats.svelte";
  import Articles from "$lib/components/Blocks/Articles.svelte";
  import Forums from "$lib/components/Blocks/Forums.svelte";
  import Courses from "$lib/components/Blocks/Courses.svelte";
  import Mentoring from "$lib/components/Blocks/Mentoring.svelte";
  import Mentor from "$lib/components/Blocks/Mentor.svelte";
</script>

<BreadCrumb items={[{ title: "Активности", href: "/" }]} />

<Grid>
  <svelte:fragment slot="column-1">
    <Chats
      data={[
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
      ]}
    />
    <Articles
      data={[
        {
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque facilis quaerat adipisci. Dicta, magni recusandae, porro tenetur explicabo architecto, provident esse autem molestiae cum laudantium minus consequatur sunt culpa similique.",
          updatedAt: new Date("2022-10-4"),
          author: 0,
          title: "Как чинить куллер",
          readTime: 5,
        },
        {
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque facilis quaerat adipisci. Dicta, magni recusandae, porro tenetur explicabo architecto, provident esse autem molestiae cum laudantium minus consequatur sunt culpa similique.",
          updatedAt: new Date("2022-10-4"),
          author: 0,
          title: "Гайд по гринду коинов",
          readTime: 5,
        },
      ]}
    />
    <Mentor
      data={{
        isMenti: false,
        mentor: {
          name: "Илон Маск",
          status: "Администратор",
          coins: "3М",
          url: "/icons/musk.jpg",
        },
      }}
    />
    <Mentoring
      data={{
        isMentor: true,
        menti: [
          {
            name: "Симчук Назар",
            status: "Сотрудник",
            coins: "2k",
            url: "/icons/nazar.jpg",
          },
          {
            name: "Познающий мир",
            status: "Редактор",
            coins: "1.6k",
            url: "/icons/katze.jpg",
          },
          {
            name: "Какой-то чел",
            status: "Сотрудник",
            coins: "1.3k",
            url: "/icons/linus.jpg",
          },
        ],
      }}
    />
  </svelte:fragment>
  <svelte:fragment slot="column-2">
    <TruthDare
      data={{
        truth: "Я втуалете, что делать?",
        dare: "Поменять воду в куллере",
        truthPrice: 23,
        darePrice: 23,
        dareMatics: true,
        truthTill: new Date("2022-10-9 8:00"),
        dareTill: new Date("2022-10-9 8:00"),
        answersCount: 12,
        answer: true,
      }}
    />
    <Forums
      data={[
        {
          title: "Как менять воду в куллере?",
          count: 12,
          id: 0,
        },
        {
          title: "Как опоздать на 4 часа и не спалиться?",
          count: 23,
          id: 0,
        },
      ]}
    />
    <Courses
      data={[
        {
          title: "Профессиональная починка куллера",
          left: 5,
          price: 25,
          url: "/couler.jpg",
          started: false,
        },
        {
          title: "Работа на платформе YourEDU",
          left: 3,
          price: 30,
          url: "/icons/sum.jpg",
          started: true,
        },
      ]}
    />
  </svelte:fragment>
</Grid>
