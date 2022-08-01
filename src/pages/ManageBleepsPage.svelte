<script>
	import { bleeps } from "../stores.js";
	import Section from "../components/Section.svelte";
	import Bleep from "../components/Bleep.svelte";

	//- For new bleep
	let contentVal = "";
	let intervalVal = 1;

	const handleSubmit = () => {
		const newBleepContent = contentVal.trim();
		const newBleepInterval = intervalVal;

		if (newBleepContent === "") return;

		bleeps.add({ content: newBleepContent, interval: newBleepInterval });
		contentVal = "";
		intervalVal = 1;
	};
</script>

<div class="Page">
	<Section contentType="main-section">
		<h2 slot="title">Manage Bleeps</h2>

		<ul slot="content">
			{#each $bleeps as bleep}
				<li>
					<Bleep bind:bleep />
				</li>
			{/each}
		</ul>

		<form slot="form" on:submit|preventDefault={handleSubmit}>
			<input
				type="text"
				bind:value={contentVal}
				placeholder="Enter bleep name"
				required
			/>
			<input
				class="bleep-interval-input"
				type="number"
				bind:value={intervalVal}
				min="1"
				max="1440"
				required
			/>
			<button type="submit">Add</button>
		</form>
	</Section>

	<Section contentType="config-section">
		<h2 slot="title">Configurations</h2>

		<ul slot="content">
			<li>
				Set Time <br />
				<label for="time-from">From</label>
				<input type="time" id="time-from" />
				<label for="time-to">To</label>
				<input type="time" id="time-to" />
			</li>
		</ul>
	</Section>
</div>

<style>
	.Page {
		height: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 10px;
	}
</style>
