<script>
	import { currEdittingBleep } from "../stores/bleepsStore.js";
	import BleepEditBox from "./BleepEditBox.svelte";

	export let bleep;

	//- For Bleep Edit Box.
	const openEditBox = () => {
		$currEdittingBleep = bleep.id;
	};
</script>

<div
	class={`Bleep ${!bleep.isActive && "in-active"}`}
	data-id={bleep.id}
	on:click|stopPropagation={openEditBox}
	on:keydown={openEditBox}
>
	<p class="content">{bleep.content}</p>
	{#if $currEdittingBleep === bleep.id}
		<BleepEditBox bind:bleep />
	{/if}
</div>

<style>
	.Bleep {
		width: 100%;
		height: inherit;
		padding: 15px 15px 10px;
		display: flex;
		align-items: center;
		position: relative;
		background-color: var(--bg-box);
		border: 1px solid var(--box-border);
		border-radius: 10px;
		cursor: pointer;
	}

	.content {
		width: 100%;
		white-space: nowrap;
		overflow-x: scroll;
	}

	.in-active {
		color: var(--text-secondary);
		background-color: var(--bg-box-inactive);
	}

	::-webkit-scrollbar {
		height: 5px;
		opacity: 0;
	}

	::-webkit-scrollbar-track {
		background: none;
	}

	::-webkit-scrollbar-thumb {
		border-radius: 2px;
		background-color: var(--scroll-thumb);
	}

	.Bleep:hover ::-webkit-scrollbar {
		opacity: 1;
	}
</style>
