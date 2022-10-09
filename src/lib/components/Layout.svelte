<script lang="ts">
  import SideBar from "./SideBar/SideBar.svelte";
  import { userData, roleType, walletData } from "$lib/stores/user";
  import type { userDataType, walletDataType } from "$lib/stores/user";
  import Card from "./ui/Card.svelte";
  import Input from "./ui/Input.svelte";
  import PasswordInput from "./ui/PasswordInput.svelte";
  import Button from "./ui/Button.svelte";
  import { ask, get } from "$lib/help/fetch";
  import { Key } from "tabler-icons-svelte";
  import { onMount } from "svelte";

  let token = "";
  onMount(() => {
    token = window.localStorage.getItem("token");
    if (token) {
      get("/users/me/", token)
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          let newUserData: userDataType = {
            url: json.avatar,
            email: json.email,
            name: json.name,
            surname: json.surname,
            bio: json.bio,
            role: [
              roleType.admin,
              roleType.manager,
              roleType.editor,
              roleType.default,
            ][json.role],
            id: json.id,
          };
          let newWalletData: walletDataType = {
            value: json.rouble_balance,
            maxValue: json.max_roubles,
            maticsValue: json.matic_balance * 1000,
            history: $walletData.history,
          };
          userData.update((val) => newUserData);
          walletData.update((val) => newWalletData);
        });
    }
  });

  let email = "";
  let password = "";
  let error = false;

  const Magic = () => {
    let token;
    ask("POST", "/auth/signin/", { email, password })
      .then((response) => {
        if (response.status != 200) {
          error = true;
        } else {
          return response.json();
        }
      })
      .then((json) => {
        localStorage.setItem("token", json.token);
      });
  };
</script>

<div class="wrapper">
  <side><SideBar /></side>
  {#if token}
    <main><slot /></main>
  {:else}
    <div class="full">
      <Card>
        <div class="card">
          <div class="title">Вход</div>
          <Input placeholder="Почта" bind:value={email} {error} />
          <PasswordInput
            {error}
            placeholder="Пароль"
            bind:value={password}
            on:keydown={(e) => (e.key == "Enter" ? Magic() : 0)}
          />
          <Button on:click={Magic}>Войти</Button>
        </div>
      </Card>
    </div>
  {/if}
</div>

<style lang="postcss">
  .wrapper {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    height: 100vh;
    overflow: hidden;
    main {
      flex: 1;
      padding: 2rem;
      height: 100vh;
      overflow-y: scroll;
    }
    .full {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .card {
        width: 300px;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        gap: 1rem;
        .title {
          text-align: center;
          @apply text-lg font-medium;
        }
      }
    }
  }
</style>
