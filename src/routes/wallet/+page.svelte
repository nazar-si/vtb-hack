<script lang="ts">
  import History from "$lib/components/common/History.svelte";
  import Card from "$lib/components/ui/Card.svelte";
  import BreadCrumb from "$lib/components/BreadCrumb.svelte";
  import { Gift, Exchange } from "tabler-icons-svelte";
  import declOfNum from "$lib/help/declOfNum";
  import WalletValue from "$lib/components/common/WalletValue.svelte";
  import { walletData } from "$lib/stores/user";

  let value: number;
  let maxValue: number;
  let maticsValue: number;
  $: maticsValue = $walletData.maticsValue;
  $: value = $walletData.value;
  $: maxValue = $walletData.maxValue;
</script>

<BreadCrumb items={[{ title: "Кошелек", href: "/wallet" }]} />

<div class="main">
  <div class="entry">
    <Card height="100%"
      ><div class="content">
        <WalletValue />
      </div>
      <div class="subtitle">
        {declOfNum(value, ["Виртуальный", "Виртуальных", "Виртуальных"])}
        {declOfNum(value, ["рубль", "рублей", "рублей"])}
      </div></Card
    >
  </div>
  <div class="entry">
    <Card height="100%"
      ><div class="content matic">
        {maticsValue.toFixed(1)}
      </div>
      <div class="subtitle">Милли-MATIC</div></Card
    >
  </div>
  <div class="entry">
    <Card height="100%"
      ><div class="content"><div class="icon"><Gift size={48} /></div></div>
      <div class="subtitle">Подарить</div></Card
    >
  </div>
  <div class="entry">
    <Card height="100%"
      ><div class="content">
        <div class="icon"><Exchange size={48} /></div>
      </div>
      <div class="subtitle">Обменять</div></Card
    >
  </div>
</div>
<History />

<style lang="postcss">
  .main {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 1.5rem;
    gap: 1.5rem;
    flex-wrap: wrap;
    .entry {
      min-width: 250px;
      flex: 1;
      @apply border-1 border-transparent hover:border-blue-500 transition-all;
      border-radius: 10px;
      position: relative;

      .content {
        height: 5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1rem;
      }
      .matic {
        @apply text-4xl font-bold;
        @apply text-gray-700 gdark:text-gray-100;
      }
      .subtitle {
        position: absolute;
        bottom: 0.5rem;
        /* margin-bottom: -0.5rem; */
        @apply text-gray-500;
      }
      .icon {
        @apply text-gray-400 gdark:text-gray-500 transition-all;
      }
    }
    .entry:hover .icon,
    .entry:hover .subtitle {
      @apply text-blue-500;
    }
  }
</style>
