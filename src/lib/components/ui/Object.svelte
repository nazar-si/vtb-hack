<script lang="ts">
  import Badge from "./Badge.svelte";
  import { Bell } from "tabler-icons-svelte";

  export let name = "Название";
  export let status = "Статус";
  export let url = "/favicon.png";
  export let num = "";
  export let selected = false;
  export let m = 0;
  export let href = "";
  export let bell = false;
  export let vr = false;
  export let mc = false;
</script>

<a {href} class="wrapper" style:margin="{m / 4}rem 0" class:selected on:click>
  <div class="main">
    <div class="icon">
      <img src={url ? url : "/favicon.ico"} alt="Иконка пользователя" />
    </div>
    <div class="title">
      <div class="name">{name}</div>
      <div
        class="status {status == 'Редактор'
          ? 'blue'
          : status == 'Руководитель'
          ? 'yellow'
          : status == 'Администратор'
          ? 'red'
          : ''}"
      >
        {status}
      </div>
    </div>
  </div>
  {#if num !== undefined}<Badge {vr} {mc}
      >{num}
      {#if bell}
        <Bell size={16} />{/if}</Badge
    >{/if}
</a>

<style lang="postcss">
  .wrapper {
    @apply border-1 border-gray-300 gdark:border-gray-700;
    @apply hover:border-blue-500 transition-all;
    padding: 0.5rem;
    padding-right: 1rem;
    width: 100%;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    &.selected {
      @apply border-blue-500;
      @apply bg-blue-500/10;
    }
    .main {
      flex: 1;
      display: flex;
      flex-direction: row;
      align-items: center;
      overflow: hidden;
      .icon {
        @apply border-1 border-gray-300 gdark:border-gray-700;
        width: 3rem;
        height: 3rem;
        border-radius: 100%;
        overflow: hidden;
        margin-right: 10px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .title {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        overflow: hidden;
        .name {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          @apply font-medium text-gray-800 gdark:text-gray-50;
        }
        .status {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          @apply text-sm text-gray-500 gdark:text-gray-400;
        }
        .status.blue {
          @apply text-blue-500;
        }
        .status.yellow {
          @apply text-amber-600 gdark:text-amber-500;
        }
        .status.red {
          @apply text-rose-500 gdark:text-rose-400;
        }
      }
    }
  }
</style>
