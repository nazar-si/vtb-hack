<script lang="ts">
  import Button from "./ui/Button.svelte";
  import Input from "./ui/Input.svelte";
  import Badge from "./ui/Badge.svelte";
  import { ChevronRight } from "tabler-icons-svelte";
  import Frame from "./ui/Frame.svelte";
  const formatter = new Intl.NumberFormat("en", { notation: "compact" });
  export let title = "";
  export let points = 0;
  export let value = "";
  export let placeholder = "";
  export let matics = false;
</script>

<Frame
  ><div class="own">
    <div class="row">
      <div class="title">{title}</div>
      {#if points}<Badge mc={matics} vr={!matics}
          >{formatter.format(points)}</Badge
        >{/if}
    </div>
    <div class="row">
      <Input {placeholder} bind:value />
      <Button px={2.5} on:click><ChevronRight /></Button>
    </div>
  </div></Frame
>

<style lang="postcss">
  .own {
    display: flex;
    padding: 1rem;
    flex-direction: column;
    gap: 0.5rem;
    border-radius: 8px;
    @apply bg-white gdark:bg-gray-750;
    .row {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      .title {
        flex: 1;
        @apply text-lg font-medium text-gray-800 gdark:text-gray-50;
      }
    }
  }
</style>
