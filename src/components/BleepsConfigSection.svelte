<script>
	import { setTime, startTime, endTime } from "../stores/bleepsStore.js";
	import Section from "../components/Section.svelte";

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

<Section contentType="config-section">
	<h2 slot="title">Configurations</h2>

	<ul slot="content" class="main-options">
		<li class="main-option">
			<div class="main-option-wrapper">
				<label for="set-time" class="checkbox-and-label">
					<input
						id="set-time"
						type="checkbox"
						checked={$setTime}
						on:change={handleSetTime}
					/>
					<span>Set Time</span>
				</label>
			</div>

			<div class="sub-options-container">
				{#if $setTime === true}
					<ul class="sub-options">
						<li class="sub-option">
							<label for="time-from">
								<span>From</span>
								<input
									type="time"
									id="time-from"
									value={$startTime}
									on:change={handleStartTime}
								/>
							</label>
							<label for="time-to">
								<span>To</span>
								<input
									type="time"
									id="time-to"
									value={$endTime}
									on:change={handleEndTime}
								/>
							</label>
						</li>
					</ul>
				{/if}
			</div>
		</li>
	</ul>

	<em slot="info"> * Allow notifications in your OS to receive bleeps. </em>
</Section>
