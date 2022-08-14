<script>
	import { bleeps, setTime, startTime, endTime } from "./stores/bleepsStore.js";
	import { currentTime } from "./stores/stores.js";
	import {
		startTimerInterval,
		removeTimerInterval,
	} from "./utils/bleepUtils.js";
	import { formatTime } from "./utils/utils.js";

	//- Set intervals for bleeps
	//- Dependencies: currentTime, setTime, startTime, endTime, bleep.interval
	$: {
		if ($setTime === true) {
			console.log("Time period is enabled!");
			//- Time Condition
			let validTime;
			if (formatTime($startTime) <= formatTime($endTime)) {
				validTime =
					formatTime($currentTime) >= formatTime($startTime) &&
					formatTime($currentTime) <= formatTime($endTime);
			} else {
				validTime =
					formatTime($currentTime) >= formatTime($startTime) ||
					formatTime($currentTime) <= formatTime($endTime);
			}

			for (let bleep of $bleeps) {
				//- If currentTime is valid AND (either there is no timer interval in place OR the bleep's interval has been changed).
				if (
					validTime &&
					(!bleep.intervalID || bleep.interval !== bleep.prevInterval)
				) {
					//- If the bleep's interval has changed, remove the previous timer interval that was in place.
					if (bleep.interval !== bleep.prevInterval) removeTimerInterval(bleep);
					//- Start timer interval for the bleep.
					bleep.intervalID = startTimerInterval(bleep);
				}
				//- Else if currentTime is invalid, remove the previous timer interval that was in place.
				else if (!validTime && bleep.intervalID !== null)
					removeTimerInterval(bleep);
			}
		} else if ($setTime === false) {
			console.log("Time period is disabled!");

			for (let bleep of $bleeps) {
				//- If there is no timer interval already in place OR the bleep's interval has changed.
				if (!bleep.intervalID || bleep.interval !== bleep.prevInterval) {
					//- If the bleep's interval has changed, remove the previous timer interval that was in place.
					if (bleep.interval !== bleep.prevInterval) removeTimerInterval(bleep);
					//- Start timer interval for the bleep.
					bleep.intervalID = startTimerInterval(bleep);
				}
			}
		}
	}
</script>
