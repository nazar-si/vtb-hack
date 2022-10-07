<script lang="ts">
  import User from "./Elements/User.svelte";
  import Nav from "./Elements/Nav.svelte";
</script>

<div class="wrapper">
  <div class="logo">
    <img src="/logo VTB.svg" alt="" width="85" height="30" />
  </div>
  <User />
  <Nav />
</div>

<style lang="postcss">
  .wrapper {
    width: 270px;
    padding: 20px;
    @apply bg-gray-200 border-r-1 border-gray-300 gdark:bg-gray-750 gdark:border-gray-700;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 20px;
    .logo {
      @apply invert gdark:invert-0;
      margin-bottom: 10px;
    }
  }
</style>
