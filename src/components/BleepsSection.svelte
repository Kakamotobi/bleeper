<script>
	import { bleeps } from "../stores/bleepsStore.js";
	import { currentPage } from "../stores/stores.js";
	import Section from "./Section.svelte";
	import Bleeps from "./Bleeps.svelte";

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

{#if $currentPage === "manage-bleeps"}
	<Section contentType="main-section">
		<h2 slot="title">Manage Bleeps</h2>

		<Bleeps slot="content" />

		<form slot="form" on:submit|preventDefault={handleSubmit}>
			<input
				type="text"
				placeholder="Enter bleep name"
				required
				bind:value={contentVal}
			/>
			<input
				type="number"
				min="1"
				max="1440"
				required
				class="bleep-interval-input"
				bind:value={intervalVal}
			/>
			<button type="submit">Add</button>
		</form>
	</Section>
{:else}
	<Section contentType="main-section">
		<h2 slot="title">Active Bleeps</h2>
		<Bleeps slot="content" displayActiveOnly={true} />
	</Section>
{/if}
