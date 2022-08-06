<script>
	import {
		currEdittingBleep,
		setTime,
		startTime,
		endTime,
	} from "../stores/bleepsStore.js";
	import { currentTime } from "../stores/stores.js";
	import { formatTime } from "../utils.js";
	import BleepEditBox from "./BleepEditBox.svelte";

	export let bleep;

	let intervalId = null;
	let previousInterval = bleep.interval;

	//- Dependencies: setTime, currentTime, startTime, endTime, bleep.interval
	//- If any of these change, this block runs.
	//- Objective: check the current time to know when to send a notification.
	$: {
		if ($setTime === true) {
			console.log("Time period is enabled!");

			//- Time Conditions
			let validTimeCondition;
			let invalidTimeCondition;

			if (formatTime($startTime) <= formatTime($endTime)) {
				validTimeCondition =
					formatTime($currentTime) >= formatTime($startTime) &&
					formatTime($currentTime) <= formatTime($endTime);
				invalidTimeCondition =
					formatTime($currentTime) < formatTime($startTime) ||
					formatTime($currentTime) > formatTime($endTime);
			} else {
				validTimeCondition =
					formatTime($currentTime) >= formatTime($startTime) ||
					formatTime($currentTime) <= formatTime($endTime);
				invalidTimeCondition =
					formatTime($currentTime) > formatTime($startTime) &&
					formatTime($currentTime) < formatTime($endTime);
			}

			if (
				validTimeCondition &&
				(intervalId === null || bleep.interval !== previousInterval)
			) {
				//- If the interval has changed, remove the previous interval that was in place.
				if (bleep.interval !== previousInterval) {
					clearInterval(intervalId);
					previousInterval = bleep.interval;
				}
				//- Start interval for the bleep.
				intervalId = setInterval(() => {
					// Send bleep notification.
					console.log(bleep.content, $currentTime);
				}, bleep.interval * 60000);
			}
			//- Else if currentTime is invalid, clear the interval.
			else if (
				invalidTimeCondition &&
				intervalId !== null
			) {
				console.log("Clear interval!");
				clearInterval(intervalId);
				intervalId = null;
			}
		} else if ($setTime === false) {
			console.log("Time period is disabled!");
			//- If there is no interval already in place OR the interval has changed.
			if (intervalId === null || bleep.interval !== previousInterval) {
				//- If the interval has changed, remove the previous interval that was in place.
				if (bleep.interval !== previousInterval) {
					clearInterval(intervalId);
					previousInterval = bleep.interval;
				}
				//- Start interval for the bleep.
				intervalId = setInterval(() => {
					// Send bleep notification.
					console.log(bleep.content, intervalId, $currentTime);
				}, bleep.interval * 60000);
			}
		}
	}

	//- For Bleep Edit Box.
	const openEditBox = () => {
		$currEdittingBleep = bleep.id;
	};
</script>

<div class="Bleep" data-id={bleep.id} on:click|stopPropagation={openEditBox}>
	<p class="content">{bleep.content}</p>
	<slot name="activation" />
	{#if $currEdittingBleep === bleep.id}
		<BleepEditBox bind:bleep />
	{/if}
</div>

<style>
	.Bleep {
		width: 100%;
		height: inherit;
		padding: 8px;
		display: flex;
		align-items: center;
		position: relative;
		border: 1px solid rgba(0, 0, 0, 0.26);
		border-radius: 10px;
		cursor: pointer;
	}
</style>
