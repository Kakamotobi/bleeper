<script>
	import { bleeps } from "../../stores/bleepsStore";

	let contentVal = "";
	let intervalVal = 1;

	const handleSubmit = () => {
		const newBleepContent = contentVal.trim();
		const newBleepInterval = intervalVal;

		if (newBleepContent === "") return;

		bleeps.add({ content: newBleepContent, interval: newBleepInterval });
		bleeps.sort();
		contentVal = "";
		intervalVal = 1;
	};

	const handleChange = () => {
		if (intervalVal >= 1440) intervalVal = 1440;
		else if (intervalVal <= 1) intervalVal = 0;
	};

	const handleIncrement = () => {
		if (intervalVal < 1440) intervalVal++;
	};

	const handleDecrement = () => {
		if (intervalVal > 1) intervalVal--;
	};
</script>

<form on:submit|preventDefault={handleSubmit}>
	<input
		type="text"
		placeholder="New bleep..."
		maxlength="100"
		required
		bind:value={contentVal}
	/>
	<div id="number-input-container">
		<label id="interval-label" for="interval">Min:</label>
		<input
			id="interval"
			type="number"
			min="1"
			max="1440"
			required
			bind:value={intervalVal}
			on:change={handleChange}
		/>
		<div class="number-input-btns">
			<button class="number-input-btn" type="button" on:click={handleIncrement}
				>+</button
			>
			<button class="number-input-btn" type="button" on:click={handleDecrement}
				>-</button
			>
		</div>
	</div>
	<button type="submit">Add</button>
</form>
