<script lang="ts">
</script>

<div class="wrapper">
  <slot />
</div>

<style lang="postcss">
  .wrapper {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  }
</style>
