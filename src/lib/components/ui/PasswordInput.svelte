<script lang="ts">
  export let label = "";
  export let description = "";
  export let value = "";
  export let placeholder = "";
  export let m = 0;
  export let mx = 0;
  export let my = 0;
  export let mb = 0;
  export let mt = 0;
  export let error = false;
  export let flex = false;
  export let disabled = false;
  import cuid from "cuid";
  let c = cuid();
</script>

<div
  class="frame"
  style:margin="{(my ? my : m) / 4}rem {(mx ? mx : m) / 4}rem"
  style:margin-bottom="{mb}rem"
  style:margin-top="{mt}rem"
  class:error
  class:disabled
  on:keydown
>
  <label for="input-{c}" class="label">
    <div class="title">{label}</div>
    <div class="description">{description}</div>
  </label>
  <label for="input-{c}" class="input">
    {#if $$slots.icon}
      <div class="icon"><slot name="icon" /></div>
    {/if}
    <input
      autocomplete="answer"
      id="input-{c}"
      type="password"
      {placeholder}
      on:click
      on:change
      on:blur
      on:focus
      bind:value
      {disabled}
    />
  </label>
</div>

<style lang="postcss">
  input {
    background: none;
    outline: none;
    border: none;
    flex: 1;
    &::placeholder {
      @apply text-gray-500;
    }
  }
  .input {
    align-items: center;
    height: 44px;
    transition: border 0.2s, box-shadow 0.2s;
    box-shadow: 0 0 0 #0000;
    border-radius: 6px;
    padding: 0 16px;
    width: 100%;
    @apply flex gap-3 border-1;
    @apply bg-gray-50 border-gray-300;
    @apply gdark:bg-gray-850 gdark:border-gray-700;
    @apply text-gray-800 gdark:text-gray-100;
    .icon {
      @apply text-gray-400 gdark:text-gray-500;
      @apply transition-all;
    }
    &:focus-within {
      @apply border-blue-500;
      .icon {
        @apply text-blue-500;
      }
    }
    input {
      min-width: 0;
    }
  }
  .label {
    .title {
      @apply text-base font-medium text-gray-700 gdark:text-gray-100;
    }
    .description {
      @apply text-sm text-gray-500 gdark:text-gray-400;
    }
  }
  .frame {
    width: 100%;
    &.disabled {
      .input {
        @apply bg-white border-gray-300;
        @apply gdark:bg-gray-750 gdark:border-gray-700;
        @apply text-gray-800 gdark:text-gray-100;
      }
    }
  }
  .frame.error {
    .label {
      .title {
        @apply text-rose-500;
      }
      .description {
        @apply text-rose-500;
      }
    }
    .input {
      @apply border-rose-500;
      input::placeholder {
        @apply text-rose-500;
      }
      .icon {
        @apply text-rose-500;
      }
    }
  }
</style>
