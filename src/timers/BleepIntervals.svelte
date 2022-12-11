<script>
	import { bleeps, setTime, startTime, endTime } from "../stores/bleepsStore.js";
	import { currentTime } from "../stores/stores.js";
	import { startBleepTimer, stopBleepTimer } from "../utils/bleepUtils.js";
	import { formatTime } from "../utils/utils.js";

	//- Set intervals for bleeps
	//- Dependencies: currentTime, setTime, startTime, endTime, bleep.timer
	$: {
		if ($setTime === true) {
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
				//- If currentTime is valid AND (either there is no timer in place OR
				//- the bleep's interval has been changed) AND the bleep is activated.
				if (
					validTime &&
					(!bleep.timer || bleep.interval !== bleep.prevInterval) &&
					bleep.isActive === true
				) {
					//- If the bleep's interval has changed, remove the previous timer that was in place.
					if (bleep.interval !== bleep.prevInterval) stopBleepTimer(bleep);
					//- Start timer for the bleep.
					startBleepTimer(bleep);
				}
				//- Else if currentTime is invalid OR the bleep is deactivated, remove the timer that is in place, if any.
				else if (!validTime || bleep.isActive === false) stopBleepTimer(bleep);
			}
		} else if ($setTime === false) {
			for (let bleep of $bleeps) {
				//- If (there is no timer already in place OR the bleep's interval has changed) AND the bleep is activated.
				if (
					(!bleep.timer || bleep.interval !== bleep.prevInterval) &&
					bleep.isActive === true
				) {
					//- If the bleep's interval has changed, remove the previous timer that was in place.
					if (bleep.interval !== bleep.prevInterval) stopBleepTimer(bleep);
					//- Start timer for the bleep.
					startBleepTimer(bleep);
				} else if (bleep.isActive === false) {
					stopBleepTimer(bleep);
				}
			}
		}
	}
</script>
