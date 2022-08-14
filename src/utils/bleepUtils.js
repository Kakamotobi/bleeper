import { getTime } from "./utils.js";

//- Start a new timer interval for a bleep.
export const startTimerInterval = (bleep) => {
	return setInterval(() => {
		// Send bleep notification.
		console.log(bleep.content, bleep.intervalID, getTime());
	}, bleep.interval * 60000);
};

//- Remove the timer interval that was in place for a bleep.
export const removeTimerInterval = (bleep) => {
	console.log("Clear timer interval!");
	clearInterval(bleep.intervalID);
	bleep.intervalID = null;
	bleep.prevInterval = bleep.interval;
};
