<script lang="ts">
  export let name = "Название";
  export let status = "Статус";
  export let url = "/favicon.png";
  export let num = 0;
  export let m = 0;
</script>

<button class="wrapper" style:margin="{m / 4}rem 0">
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
    padding: 0.5rem;
    padding-right: 1rem;
    width: 100%;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    .main {
      flex: 1;
      display: flex;
      flex-direction: row;
      align-items: center;
      overflow: hidden;
      .icon {
        @apply border-1 border-gray-300 gdark:border-gray-700;
        width: 3rem;
        height: 3rem;
        border-radius: 100%;
        overflow: hidden;
        margin-right: 10px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .title {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        overflow: hidden;
        .name {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          @apply font-medium text-gray-800 gdark:text-gray-50;
        }
        .status {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          @apply text-sm text-gray-500 gdark:text-gray-400;
        }
      }
    }
    .number {
      min-width: 28px;
      padding: 2px 4px;
      border-radius: 6px;
      @apply text-blue-600 font-medium border-1 border-blue-500;
      @apply bg-[#08f3] gdark:text-white;
    }
  }
</style>
