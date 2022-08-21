import {
	isPermissionGranted,
	requestPermission,
	sendNotification,
} from "@tauri-apps/api/notification";

//- Notification for bleeps.
const notify = async (bleep) => {
	let permissionGranted = await isPermissionGranted();
	if (!permissionGranted) {
		const permission = await requestPermission();
		permissionGranted = permission === "granted";
	}

	if (permissionGranted) {
		sendNotification({ title: "Bleep!", body: bleep.content });
	}
};

//- Start a new timer interval for a bleep.
export const startTimerInterval = (bleep) => {
	return setInterval(() => {
		//- Send bleep notification.
		notify(bleep);
	}, bleep.interval * 60000);
};

//- Remove the timer interval that was in place for a bleep.
export const removeTimerInterval = (bleep) => {
	console.log("Clear timer interval!");
	clearInterval(bleep.intervalID);
	bleep.intervalID = null;
	bleep.prevInterval = bleep.interval;
};
