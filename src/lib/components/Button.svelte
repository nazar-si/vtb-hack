<script lang="ts">
  export let secondary = false;
  export let white = false;
  export let py = 2;
  export let px = 4;
</script>

<button
  on:click
  class:primary={!secondary && !white}
  class:secondary={secondary && !white}
  class:white={white && !secondary}
  style:padding="{py / 4}rem {px / 4}rem"
>
  <slot />
</button>

<style lang="postcss">
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    box-shadow: 0 0 0 0 #0000;
    @apply transition-all font-medium;
    &.primary {
      @apply bg-blue-600 text-white hover:bg-blue-700;
      @apply gdark:bg-blue-500 gdark:hover:bg-blue-600;
    }
    &.secondary {
      @apply text-blue-500 bg-[#0084ff33] hover:bg-blue-400/50;
      @apply gdark:hover:bg-blue-900;
    }
    &.white {
      @apply bg-white text-gray-700 border-1 border-gray-300 shadow hover:bg-gray-100;
      @apply gdark:bg-gray-750 gdark:border-gray-700 gdark:text-gray-50 gdark:hover:bg-gray-700;
    }
    &:focus {
      box-shadow: 0 0 0 3px #08f5;
    }
  }
</style>
