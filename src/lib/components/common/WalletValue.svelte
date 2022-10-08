<script lang="ts">
  import { walletData } from "$lib/stores/user";
  const formatter = new Intl.NumberFormat("en", { notation: "compact" });
  let value: number;
  let maxValue: number;
  $: value = $walletData.value;
  $: maxValue = $walletData.maxValue;
</script>

<div class="number">
  {formatter.format(value)} <span>/ {formatter.format(maxValue)}</span>
</div>

<style lang="postcss">
  .number {
    display: flex;
    @apply text-5xl font-bold;
    @apply text-gray-500 gdark:text-gray-600;
    span {
      display: block;
      @apply text-4xl translate-y-6;
      @apply text-gray-700 gdark:text-gray-100;
    }
  }
</style>
