<script lang="ts">
</script>

<div class="number">
  <slot />
</div>

<style lang="postcss">
  .number {
    min-width: 28px;
    min-height: 28px;
    padding: 2px 4px;
    border-radius: 6px;
    @apply text-blue-600 font-medium border-1 border-blue-500;
    @apply bg-[#08f3] gdark:text-white;
  }
</style>
