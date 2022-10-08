<script lang="ts">
  export let red = false;
  export let vr = false;
  export let mc = false;
</script>

<div class="number" class:red class:mc>
  <slot />
  {#if vr}V₽{/if}
  {#if mc}M€{/if}
</div>

<style lang="postcss">
  .number {
    min-width: 28px;
    min-height: 28px;
    padding: 2px 4px;
    border-radius: 6px;
    text-align: center;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    @apply text-blue-600 font-medium border-1
    border-blue-500;
    @apply bg-[#08f3] gdark:text-white;
    box-shadow: 0 0 6px #08f4;
    &.red {
      @apply text-rose-600 font-medium border-1 border-rose-500;
      @apply bg-[#f143] gdark:text-white;
      box-shadow: 0 0 6px #f144;
    }
    &.mc {
      @apply text-indigo-600 font-medium border-1 border-indigo-500;
      @apply bg-[#81f3] gdark:text-white;
      box-shadow: 0 0 6px #81f4;
    }
  }
</style>
