<div class="wrapper {$$props.class}">
  <slot />
</div>

<style lang="postcss">
  .wrapper {
    margin: 0;
    border-radius: 6px;
    @apply text-gray-500 gdark:text-gray-600;
    @apply border-1 border-gray-300 gdark:border-gray-700;
    @apply hover:border-blue-500 hover:text-blue-500;
  }
</style>
