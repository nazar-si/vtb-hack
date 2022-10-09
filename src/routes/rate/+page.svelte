<script>
  import { onMount } from "svelte";
  import { get } from "$lib/help/fetch";
  import BreadCrumb from "$lib/components/BreadCrumb.svelte";
  import Card from "$lib/components/ui/Card.svelte";
  import Object from "$lib/components/ui/Object.svelte";
  import { userData, roleType } from "$lib/stores/user";
  let selfId = $userData.id;
  let rating = [];
  onMount(() => {
    let token = window.localStorage.getItem("token");
    get("/users/?sort=rating", token)
      .then((res) => res.json())
      .then((json) => {
        rating = json.map((a) => ({
          url: a.avatar,
          id: a.id,
          value: a.max_roubles,
          name: `${a.name} ${a.surname}`,
          role: [
            roleType.admin,
            roleType.manager,
            roleType.editor,
            roleType.default,
          ][a.role],
        }));
      });
  });
  $: console.log(rating);
</script>

<BreadCrumb items={[{ title: "Рейтинг", href: "/rate" }]} />
<Card>
  <div class="list">
    {#each rating as person, id}
      <div class="entry">
        <div class="place">{id + 1}</div>
        <Object
          name={person.name}
          vr
          num={person.value}
          url={person.url}
          selected={person.id == selfId}
          status={person.role}
        />
      </div>
    {/each}
  </div>
</Card>

<style lang="postcss">
  .list {
    display: flex;
    align-items: stretch;
    flex-direction: column;
    gap: 1rem;
    .entry {
      display: flex;
      gap: 1rem;
      align-items: center;
      .place {
        @apply text-gray-900 gdark:text-gray-50 font-medium;
      }
    }
  }
</style>
