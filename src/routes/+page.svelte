<script>
  import { onMount } from "svelte";
  let dark = false;
  onMount(() => {
    dark = document.body.classList.contains("dark");
  });
  import Button from "$lib/components/Button.svelte";
</script>

<Button
  on:click={() => {
    dark = !dark;
    if (!dark) document.body.classList.remove("dark");
    else document.body.classList.add("dark");
  }}
>
  Primary
</Button>

<Button white>Test white</Button>

<Button secondary>Test secondary</Button>
