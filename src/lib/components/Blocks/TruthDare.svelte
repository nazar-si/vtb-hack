<script lang="ts">
  import Button from "../ui/Button.svelte";
  import Input from "../ui/Input.svelte";
  import Card from "../ui/Card.svelte";
  import {
    Rocket,
    InfoCircle,
    Message,
    Send,
    Check,
  } from "tabler-icons-svelte";
  import Badge from "../ui/Badge.svelte";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  interface data {
    truth: string;
    dare: string;
    truthPrice: number;
    darePrice: number;
    dareTill: Date;
    truthTill: Date;
    truthMatics?: boolean;
    dareMatics?: boolean;
    answersCount: number;
    answer: boolean;
  }
  export let data: data;
  export let hideTitle = false;

  const formatter = new Intl.RelativeTimeFormat("ru", {
    style: "short",
    numeric: "auto",
  });
  const truthDiff = (data.truthTill - new Date()) / (1000 * 60);
  const dareDiff = (data.dareTill - new Date()) / (1000 * 60);
</script>

<Card
  title={hideTitle ? "" : "Парвда или действие"}
  description={hideTitle
    ? ""
    : "Получите коины за ответ на вопрос или выполнение задачи."}
  full={hideTitle ? "" : "Смотреть все"}
  fullHref="/main/play"
>
  <div class="wrapper">
    <div class="entry">
      <div class="top">
        <div class="question">
          {data.truth}
        </div>
        <Badge vr={!data.truthMatics} mc={data.truthMatics}>
          {data.truthPrice}
        </Badge>
      </div>
      <div class="bottom">
        <div class="row">
          <div class="time">
            {#if truthDiff < 60}
              Кончается {formatter.format(Math.floor(truthDiff), "minutes")}
            {:else if truthDiff < 60 * 24}
              Кончается {formatter.format(Math.floor(truthDiff / 60), "hours")}
            {:else}
              Кончается {formatter.format(
                Math.floor(truthDiff / 60 / 24),
                "day"
              )}
            {/if}
          </div>
        </div>
        <div class="row">
          <div class="badge truth">
            <div class="icon">
              <InfoCircle size={16} />
            </div>
            <div>Правда</div>
          </div>
          <div class="badge">
            <div class="icon">
              <Message size={16} />
            </div>
            <div>{data.answersCount} Ответов</div>
          </div>
          {#if data.answer}
            <div class="badge">
              <div class="icon">
                <Check size={16} />
              </div>
              <div>Ваш ответ</div>
            </div>
          {/if}
        </div>
      </div>
      <div class="row">
        <Input placeholder="Ваш ответ" my={0} />
        <Button
          px={2.5}
          on:click={() => {
            dispatch("truth");
          }}><Send /></Button
        >
      </div>
    </div>
    <div class="entry">
      <div class="top">
        <div class="question">
          {data.dare}
        </div>
        <Badge vr={!data.dareMatics} mc={data.dareMatics}>
          {data.darePrice}
        </Badge>
      </div>
      <div class="bottom">
        <div class="row">
          <div class="time">
            {#if dareDiff < 60}
              Кончается {formatter.format(Math.floor(dareDiff), "minutes")}
            {:else if dareDiff < 60 * 24}
              Кончается {formatter.format(Math.floor(dareDiff / 60), "hours")}
            {:else}
              Кончается {formatter.format(
                Math.floor(dareDiff / 60 / 24),
                "day"
              )}
            {/if}
          </div>
        </div>
        <div class="row">
          <div class="badge dare">
            <div class="icon">
              <Rocket size={16} />
            </div>
            <div>Действие</div>
          </div>
          <div class="badge">Проверяется</div>
        </div>
      </div>
      <Button
        on:click={() => {
          dispatch("dare");
        }}>Выполнить</Button
      >
    </div>
  </div>
</Card>

<style lang="postcss">
  .wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
    .entry {
      min-width: 420px;
      border-radius: 8px;
      padding: 1rem;
      flex: 1;
      @apply border-1 border-gray-300 gdark:border-gray-700;
      @apply hover:border-blue-500 transition-all;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      .row {
        display: flex;
        gap: 0.5rem;
        width: 100%;
        &:first-child {
          flex: 1;
        }
      }
      .top {
        flex: 1;
        @apply text-gray-800 font-medium gdark:text-gray-50;
        display: flex;
        gap: 1rem;
        .question {
          flex: 1;
        }
      }
      .bottom {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        .badge {
          border-radius: 24px;
          width: fit-content;
          @apply border-2;
          display: flex;
          padding: 2px 0.5rem;
          gap: 0.5rem;
          align-items: center;
          cursor: pointer;
          @apply transition-all;
          @apply border-gray-300 text-gray-600 gdark:text-gray-500 gdark:border-gray-700 hover:text-blue-500 hover:border-blue-500;
          &.truth {
            @apply border-blue-500 bg-blue-500/25 text-blue-600 gdark:text-blue-400;
          }
          &.dare {
            @apply border-purple-500 bg-purple-500/25 text-purple-600 gdark:text-purple-400;
          }
        }
        .row {
          display: flex;
          gap: 1rem;
          @apply text-gray-500;
        }
      }
    }
  }
</style>
