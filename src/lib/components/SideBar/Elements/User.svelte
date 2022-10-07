<script lang="ts">
  export let name = "Олег";
  export let status = "Гуру";
  export let url = "/favicon.png";
  export let num = 23;
</script>

<button class="wrapper">
  <div class="main">
    <div class="icon">
      <img src={url} alt="Иконка пользователя" />
    </div>
    <div class="title">
      <div class="name">{name}</div>
      <div class="status">{status}</div>
    </div>
  </div>
  <div class="number">
    {num}
  </div>
</button>

<style lang="postcss">
  .wrapper {
    @apply border-1 border-gray-300 gdark:border-gray-700;
    padding: 8px;
    padding-right: 16px;
    width: 100%;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .main {
      display: flex;
      flex-direction: row;
      align-items: center;
      .icon {
        @apply border-1 border-gray-300 gdark:border-gray-700;
        width: 52px;
        height: 52px;
        border-radius: 100%;
        overflow: hidden;
        margin-right: 10px;
      }
      .title {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        .name {
          @apply font-medium text-gray-800 gdark:text-gray-50;
        }
        .status {
          @apply text-sm text-gray-500 gdark:text-gray-400;
        }
      }
    }
    .number {
      padding: 2px 4px;
      border-radius: 6px;
      @apply bg-blue-600 text-white font-medium gdark:bg-blue-500;
    }
  }
</style>
