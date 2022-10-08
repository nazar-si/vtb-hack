<script lang="ts">
  import Frame from "../ui/Frame.svelte";
  import Card from "../ui/Card.svelte";
  import Badge from "../ui/Badge.svelte";
  import declOfNum from "$lib/help/declOfNum";
  import Button from "../ui/Button.svelte";

  interface course {
    title: string;
    left: number; // lessons left
    price: number; // coins to get from completion
    url: string;
    started: boolean;
  }

  export let data: course[];
</script>

<Card
  title="Курсы"
  description="Посмотрите список увлекательных куросв."
  full="Показать все"
>
  <div class="wrapper">
    {#each data as course}
      <Frame>
        <div class="entry">
          <div class="image"><img src={course.url} alt="картинка курса" /></div>
          <div class="info">
            <div class="row">
              <div class="title">{course.title}</div>
              <div class="badge">
                <Badge>{course.price} V₽</Badge>
              </div>
            </div>
            <div class="left">
              Осталось {course.left}
              {declOfNum(course.left, ["день", "дня", "дней"])}
            </div>
            <Button white={!course.started}
              >{#if course.started}Продолжить{:else}Начать{/if}</Button
            >
          </div>
        </div>
      </Frame>
    {/each}
  </div>
</Card>

<style lang="postcss">
  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex-wrap: wrap;
    .entry {
      padding: 1rem;
      display: flex;
      flex-direction: row;
      gap: 1rem;
      .image {
        width: 200px;
        height: 150px;
        overflow: hidden;
        @apply border-1 border-gray-300 gdark:border-gray-700;
        border-radius: 8px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .info {
        .row {
          display: flex;
          gap: 1rem;
        }
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        .title {
          align-items: flex-start;
          flex: 1;
          @apply font-medium text-gray-800 text-lg gdark:text-gray-50;
        }
        .badge {
          height: 44px;
        }
        .left {
          @apply text-gray-500;
        }
      }
    }
  }
</style>
