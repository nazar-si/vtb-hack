<script lang="ts">
  import { Sun, Moon } from "tabler-icons-svelte";
  import User from "../ui/Object.svelte";
  import Nav from "./Nav.svelte";
  import { userData, walletData } from "$lib/stores/user";
  import type { userDataType } from "$lib/stores/user";
  let data: userDataType;
  let walletValue: number;
  $: data = $userData;
  $: walletValue = $walletData.maxValue;

  const formatter = new Intl.NumberFormat("en", { notation: "compact" });

  import { onMount } from "svelte";
  let dark = false;
  onMount(() => {
    dark = document.body.classList.contains("dark");
  });
  import Button from "$lib/components/ui/Button.svelte";

  let selected = 0;
</script>

<div class="wrapper">
  <header>
    <div class="logo">
      <img src="/logo VTB.svg" alt="" width="85" height="30" />
    </div>
    <Button
      on:click={() => {
        dark = !dark;
        if (!dark) document.body.classList.remove("dark");
        else document.body.classList.add("dark");
      }}
      white
      px={2}
      py={2}
    >
      {#if dark}
        <Moon />
      {:else}
        <Sun />
      {/if}
    </Button>
  </header>
  <User
    vr
    url={data.url}
    name="{data.name} {data.surname}"
    status={data.role}
    num={formatter.format(walletValue)}
    href="/me"
    selected={selected == -1}
    on:click={() => {
      selected = -1;
    }}
  />
  <Nav bind:selected />
</div>

<style lang="postcss">
  .wrapper {
    width: 320px;
    padding: 20px;
    @apply bg-gray-200 border-r-1 border-gray-300 gdark:bg-gray-750 gdark:border-gray-700;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 20px;
    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .logo {
        @apply invert gdark:invert-0;
        margin-bottom: 10px;
      }
    }
  }
</style>
