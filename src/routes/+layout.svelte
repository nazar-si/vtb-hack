<script lang="ts">
  import "../app.postcss";
  import Layout from "$lib/components/Layout.svelte";
</script>

<svelte:head>
  <title>Application</title>
</svelte:head>

<Layout>
  <slot />
</Layout>
