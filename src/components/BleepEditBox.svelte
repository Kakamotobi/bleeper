<script>
	import { bleeps, currEdittingBleep } from "../stores/bleepsStore.js";
	import { removeTimerInterval } from "../utils/bleepUtils.js";
	import { isDescendantOf } from "../utils/utils.js";

	export let bleep;

	const closeEditBox = (evt) => {
		if (isDescendantOf("Bleep-edit-box", evt.target)) return;

		if (
			bleep.id !== $currEdittingBleep ||
			evt.target.dataset.id !== $currEdittingBleep
		) {
			//- Close edit box
			$currEdittingBleep = "";
		}
	};

	const handleRemove = () => {
		bleeps.remove(bleep.id);
		removeTimerInterval(bleep);
	};
</script>

<svelte:window on:click={closeEditBox} />

<div class="Bleep-edit-box" data-id={bleep.id}>
	<input
		type="text"
		placeholder="Enter bleep name"
		required
		name="content"
		bind:value={bleep.content}
	/>
	<label for="interval">Interval (mins)</label>
	<input
		type="number"
		min="1"
		required
		name="interval"
		bind:value={bleep.interval}
	/>
	<label for="clickToConfirm">Click To Confirm</label>
	<input
		type="checkbox"
		name="clickToConfirm"
		bind:checked={bleep.clickToConfirm}
	/>
	<label for="isActive">Activate</label>
	<input
		type="checkbox"
		name="isActive"
		bind:checked={bleep.isActive}
	/>
	<button type="button" on:click={handleRemove}>Remove</button>
</div>

<style>
	.Bleep-edit-box {
		padding: 10px;
		display: flex;
		flex-direction: column;
		position: absolute;
		top: 0;
		right: 0;
		background-color: lightgrey;
		border-radius: 10px;
		z-index: 2;
	}
</style>
