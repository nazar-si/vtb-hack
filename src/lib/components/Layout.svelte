<script lang="ts">
  import SideBar from "./SideBar/SideBar.svelte";
</script>

<div class="wrapper">
  <side><SideBar /></side>
  <main><slot /></main>
</div>

<style lang="postcss">
  .wrapper {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    height: 100vh;
    main {
      flex: 1;
    }
  }
</style>
