<script>
	import {
		bleeps,
		setTime,
		startTime,
		endTime,
	} from "../stores/bleepsStore.js";
	import Page from "../components/Page.svelte";
	import Section from "../components/Section.svelte";
	import Bleeps from "../components/Bleeps.svelte";

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

	//- For configuration
	const handleSetTime = () => {
		$setTime = !$setTime;
	};

	const handleStartTime = (evt) => {
		$startTime = evt.target.value;
	};

	const handleEndTime = (evt) => {
		$endTime = evt.target.value;
	};
</script>

<Page>
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

	<Section contentType="config-section">
		<h2 slot="title">Configurations</h2>

		<ul slot="content">
			<li>
				<input type="checkbox" checked={$setTime} on:change={handleSetTime} />
				Set Time
				{#if $setTime === true}
					<ul>
						<li>
							<label for="time-from">From</label>
							<input
								type="time"
								id="time-from"
								value={$startTime}
								on:change={handleStartTime}
							/>
							<label for="time-to">To</label>
							<input
								type="time"
								id="time-to"
								value={$endTime}
								on:change={handleEndTime}
							/>
						</li>
					</ul>
				{/if}
			</li>
		</ul>

		<em slot="info">
			* Make sure to allow notifications in your OS to receive bleeps.
		</em>
	</Section>
</Page>
