<script>
	import { bleeps, currEdittingBleep } from "../stores/bleepsStore.js";
	import { isDescendantOf } from "../utils.js";

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
	};
</script>

<svelte:window on:click={closeEditBox} />

<div class="Bleep-edit-box" data-id={bleep.id}>
	<input
		type="text"
		name="content"
		id="bleep-content"
		bind:value={bleep.content}
		placeholder="Enter bleep name"
		required
	/>
	<label for="interval">Interval (mins)</label>
	<input
		type="number"
		name="interval"
		bind:value={bleep.interval}
		min="1"
		required
	/>
	<label for="clickToConfirm">Click To Confirm</label>
	<input
		type="checkbox"
		name="clickToConfirm"
		value={bleep.clickToConfirm}
		bind:checked={bleep.clickToConfirm}
	/>
	<label for="isActive">Activate</label>
	<input
		type="checkbox"
		name="isActive"
		value={bleep.isActive}
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
