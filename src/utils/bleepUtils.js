import {
	isPermissionGranted,
	requestPermission,
	sendNotification,
} from "@tauri-apps/api/notification";
import { customSetInterval } from "./utils.js";

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

//- Start a new timer for the bleep.
export const startBleepTimer = (bleep) => {
	bleep.timer = customSetInterval(() => {
		//- Send bleep notification.
		notify(bleep);
	}, bleep.interval * 60000);
};

//- Remove the timer that was in place for the bleep.
export const stopBleepTimer = (bleep) => {
	clearTimeout(bleep.timer?.id);
	bleep.timer = null;
	bleep.prevInterval = bleep.interval;
};
