<script>
	import BleepEditBox from "./BleepEditBox.svelte";
	import { currEdittingBleep } from "../stores.js";

	export let bleep;

	const openEditBox = () => {
		$currEdittingBleep = bleep.id;
		console.log($currEdittingBleep);
	};
</script>

<div class="Bleep" data-id={bleep.id} on:click|stopPropagation={openEditBox}>
	<p class="content">{bleep.content}</p>
	<slot name="activation" />
	{#if $currEdittingBleep === bleep.id}
		<BleepEditBox {bleep} />
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
