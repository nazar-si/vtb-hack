<script lang="ts">
</script>

<div class="wrapper">
  <div class="column">
    <slot name="column-1" />
  </div>
  <div class="column">
    <slot name="column-2" />
  </div>
</div>

<style lang="postcss">
  .wrapper {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    .column {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
  }
</style>
