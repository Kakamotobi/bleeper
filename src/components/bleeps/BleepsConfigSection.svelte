<script>
	import {
		setTime,
		startTime,
		endTime,
		setNotificationSound,
		notificationSound,
	} from "../../stores/bleepsStore.js";
	import Section from "../shared/Section.svelte";

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

	const handleSetNotificationSound = () => {
		$setNotificationSound = !$setNotificationSound;
	};

	const handleSelectNotificationSound = async (evt) => {
		const soundTest = new Audio(
			`/assets/notification-sounds/bleeps/${evt.target.value}.mp3`
		);
		if (soundTest) {
			await soundTest.play();
			soundTest.pause();
		}
		$notificationSound = evt.target.value;
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
		<li class="main-option">
			<div class="main-option-wrapper">
				<label for="set-sound" class="checkbox-and-label">
					<input
						id="set-sound"
						type="checkbox"
						checked={$setNotificationSound}
						on:change={handleSetNotificationSound}
					/>
					<span>Set Notification Sound</span>
				</label>
			</div>

			<div class="sub-options-container">
				{#if $setNotificationSound === true}
					<ul class="sub-options">
						<li class="sub-option">
							<label for="sound-select">
								<span>Bleep Sound</span>
								<select
									name="notification-sound"
									id="sound-select"
									on:change={handleSelectNotificationSound}
								>
									{#each Array(8) as _, idx}
										<option value={`bleep-sound${idx + 1}`}
											>Sound {idx + 1}</option
										>
									{/each}
								</select>
							</label>
						</li>
					</ul>
				{/if}
			</div>
		</li>
	</ul>

	<em slot="info"> * Allow notifications in your OS to receive bleeps. </em>
</Section>
