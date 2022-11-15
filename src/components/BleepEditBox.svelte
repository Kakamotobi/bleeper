<script>
	import { bleeps, currEdittingBleep } from "../stores/bleepsStore.js";
	import { stopBleepTimer } from "../utils/bleepUtils.js";
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
			bleeps.sort();
		}
	};

	const handleRemove = () => {
		bleeps.remove(bleep.id);
		stopBleepTimer(bleep);
	};
</script>

<svelte:window on:click={closeEditBox} />

<div class="Bleep-edit-box" data-id={bleep.id}>
	<div class="container">
		<input
			type="text"
			placeholder="Enter bleep name"
			required
			name="content"
			bind:value={bleep.content}
		/>
	</div>
	<div class="container">
		<label for="interval">Interval (min):</label>
		<input
			type="number"
			min="1"
			max="1440"
			required
			id="interval"
			bind:value={bleep.interval}
		/>
	</div>
	<div class="container">
		<label for="isActive">Active</label>
		<input type="checkbox" id="isActive" bind:checked={bleep.isActive} />
	</div>
	<div class="container">
		<button type="button" on:click={handleRemove}>Remove</button>
	</div>
</div>

<style>
	.Bleep-edit-box {
		width: 160px;
		display: flex;
		flex-direction: column;
		position: absolute;
		top: -1px;
		right: -1px;
		background-color: var(--bg-edit-box);
		border: 1px solid var(--box-border);
		border-radius: 10px;
		box-shadow: 0 0 5px 0.3px var(--edit-box-shadow);
		z-index: 2;
		overflow: hidden;
	}

	.container {
		width: 100%;
		height: 100%;
		padding: 6px 12px 6px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid var(--edit-box-shadow);
	}

	.container:first-of-type {
		padding-top: 10px;
		padding-bottom: 10px;
	}

	.container:last-of-type {
		padding: 0;
		border-bottom: none;
		text-align: center;
	}

	.container label {
		font-weight: 500;
	}

	input[type="text"] {
		width: 100%;
		font-size: 1rem;
		font-weight: 500;
	}

	input[type="number"] {
		width: 40px;
	}

	button {
		width: 100%;
		height: 20px;
		font-weight: 500;
		color: var(--red);
	}
</style>
