<script>
  import ActionButton from "./ActionButton.svelte";

  export let target;
  export let buttons;
</script>

<div class="buttons-container">
  {#each buttons as button}
    <ActionButton action={button} {target} />
  {/each}
</div>

<style>
  .buttons-container {
    display: flex;
    gap: 8px;
  }
</style>
