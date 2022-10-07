<h1>Base Svelte with tailwind project</h1>
<button class="p-2 bg-primary-500 rounded-md text-white font-bold">
  Primary
</button>
<button class="p-2 bg-secondary-500 rounded-md text-white font-bold">
  Secondary
</button>
<button class="p-2 bg-info rounded-md  text-white font-bold"> Info </button>
<button class="p-2 bg-error rounded-md  text-white font-bold"> Error </button>
<button class="p-2 bg-success rounded-md  text-white font-bold">
  Success
</button>
<button class="p-2 bg-warning rounded-md  text-white font-bold">
  Warning
</button>
<br />
<br />
<button
  class="p-2 bg-primary-500 rounded-md text-white font-bold"
  on:click={() => {
    document.body.classList.remove("emerald");
    document.body.classList.add("corporate");
  }}>Corporate</button
>
<button
  class="p-2 bg-primary-500 rounded-md text-white font-bold"
  on:click={() => {
    document.body.classList.remove("corporate");
    document.body.classList.add("emerald");
  }}>Emerald</button
>
