import {
  isPermissionGranted,
  requestPermission,
  sendNotification,
} from "@tauri-apps/api/notification";
import { get } from "svelte/store";
import { setNotificationSound, notificationSound } from "@stores/index.js";
import { customSetInterval } from "./index.js";

//- Notification for bleeps.
const notify = async (bleep) => {
  let permissionGranted = await isPermissionGranted();
  if (!permissionGranted) {
    const permission = await requestPermission();
    permissionGranted = permission === "granted";
  }

  if (permissionGranted) {
    const notificationSoundName = get(notificationSound);
    const notificationAudio =
      get(setNotificationSound) && notificationSoundName
        ? new Audio(
            `/assets/notification-sounds/bleeps/${notificationSoundName}.mp3`
          )
        : undefined;
    if (notificationAudio) await notificationAudio.play();
    sendNotification({ title: "Bleep!", body: bleep.content });
    if (notificationAudio) notificationAudio.pause();
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
