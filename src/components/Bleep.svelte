<script>
	import { currEdittingBleep } from "../stores/bleepsStore.js";
	import BleepEditBox from "./BleepEditBox.svelte";

	export let bleep;

	//- For Bleep Edit Box.
	const openEditBox = () => {
		$currEdittingBleep = bleep.id;
	};
</script>

<div class="Bleep" data-id={bleep.id} on:click|stopPropagation={openEditBox}>
	<p class="content">{bleep.content}</p>
	<slot name="activation" />
	{#if $currEdittingBleep === bleep.id}
		<BleepEditBox bind:bleep />
	{/if}
</div>

<style>
	.Bleep {
		width: 100%;
		height: inherit;
		padding: 8px;
		display: flex;
		align-items: center;
		position: relative;
		border: 1px solid rgba(0, 0, 0, 0.26);
		border-radius: 10px;
		cursor: pointer;
	}
</style>
