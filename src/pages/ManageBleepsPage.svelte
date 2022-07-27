<script>
	import Bleep from "../components/Bleep.svelte";
	import { bleeps } from "../stores.js";

	//- For new bleep
	let contentVal = "";
	let intervalVal = 1;

	const handleSubmit = () => {
		//- Add to store.
		const newBleepContent = contentVal.trim();
		const newBleepInterval = intervalVal;

		if (newBleepContent === "") return;

		bleeps.add({ content: newBleepContent, interval: newBleepInterval });
		contentVal = "";
		intervalVal = 1;
	};
</script>

<div class="Page">
	<section>
		<h2>Manage Bleeps</h2>

		<ul class="bleeps-list">
			{#each $bleeps as bleep}
				<li class="bleeps-list__item">
					<Bleep bind:bleep />
				</li>
			{/each}
		</ul>

		<form on:submit|preventDefault={handleSubmit}>
			<input
				type="text"
				bind:value={contentVal}
				placeholder="Enter bleep name"
				required
			/>
			<input type="number" bind:value={intervalVal} min="1" required />
			<button type="submit">Add</button>
		</form>
	</section>

	<section>
		<h2>Configurations</h2>

		<ul class="configs-list">
			<li class="configs-list__item">
				Set Time <br/>
				<label for="time-from">From</label>
				<input type="time" id="time-from" />
				<label for="time-to">To</label>
				<input type="time" id="time-to" />
			</li>
		</ul>
	</section>
</div>

<style>
	.Page {
		height: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 10px;
	}

	section {
		height: 100%;
		display: flex;
		flex-direction: column;
		position: relative;

		/* border: 1px solid blue; */
	}

	h2 {
		margin-bottom: 20px;
	}

	section:first-of-type {
		min-width: 350px;
		flex-grow: 1;
	}

	.bleeps-list {
		flex-grow: 1;
		overflow: auto;
	}

	.bleeps-list__item {
		height: 40px;
		margin-bottom: 10px;
		padding-inline: 10px;

		/* border: 1px solid orange; */
	}

	form {
		width: 100%;
		height: 35px;
		display: flex;
		position: sticky;
		/* bottom: 0; */
	}

	input {
		height: inherit;
		background-color: #f9f9f9;
		font-size: 1rem;
	}

	input:first-of-type {
		flex-grow: 5;
	}
	input:last-of-type {
		/* max-width: 200px; */
		flex-grow: 1;
	}

	button {
		width: 12%;
		max-width: 50px;
		height: inherit;
	}

	section:last-of-type {
		min-width: 300px;
	}
</style>
