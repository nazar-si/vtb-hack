<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let components = [];
  export let label = "";
  export let check = false;
  export let value = [0];
  export let disabled = false;
  export let type = "text";
  export let small = false;
  // let value = [0];
</script>

<div class="entry">
  <div class="title">{label}</div>
  <div class="select">
    {#each components as component, i}
      <button
        {disabled}
        class="option"
        class:sole={component.length == 1}
        class:selected={value.includes(i)}
        style:height="{small ? 32 : 44}px"
        on:click={() => {
          if (!check) {
            value = [i];
          } else {
            if (value.includes(i)) {
              value = value.filter((c) => c != i);
            } else {
              value = value.concat(i);
            }
          }
          dispatch("change", value);
        }}
      >
        {#if type == "icon"}
          <svelte:component this={component} strokeWidth={1.5} size={16} />
        {:else}
          <div>{component}</div>
        {/if}
      </button>
    {/each}
  </div>
</div>

<style lang="postcss">
  .entry {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @apply text-gray-700 gdark:text-gray-300;
    .select {
      display: flex;
      font-weight: 600;
      font-size: 16px;
      width: 100%;

      .option {
        border-width: 1px;
        flex: 1;
        @apply px-2;
        height: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
        @apply border-gray-300 gdark:border-gray-650 transition-all;
        @apply bg-gray-100 gdark:bg-gray-750;
        &.selected {
          @apply bg-white gdark:bg-gray-700 gdark:border-gray-600;
          @apply text-blue-500 gdark:text-blue-500;
        }
        &:hover {
          @apply border-gray-500 text-gray-900 gdark:text-gray-50 gdark:border-gray-550;
        }
        &:focus {
          @apply border-blue-500 text-blue-500 gdark:border-blue-500 gdark:text-blue-500;
        }
        &:first-of-type {
          border-radius: 6px 0 0 6px;
        }
        &:last-of-type {
          border-radius: 0 6px 6px 0;
        }
        &.sole {
          border-radius: 6px;
        }
      }
      &.out {
        width: 150px;
        display: flex;
        justify-content: center;
        @apply text-gray-900;
      }
    }
  }
</style>
