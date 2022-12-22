import { writable } from "svelte/store";
import localforage from "localforage";
import { v4 as uuidv4 } from "uuid";
import { stopBleepTimer } from "@utils/index.js";

//- Bleeps Store
const createBleeps = async () => {
  const storedBleeps = await localforage.getItem("bleeper_bleeps");

  const { subscribe, update, set } = writable(storedBleeps || []);

  subscribe(async (val) => {
    await localforage.setItem("bleeper_bleeps", val);
  });

  const bleepsStore = {
    subscribe,
    set,
    update,
    sort: () =>
      update((bleeps) => bleeps.sort((a, b) => a.interval - b.interval)),
    add: (newBleep) =>
      update((bleeps) => [
        {
          id: uuidv4(),
          content: newBleep.content,
          interval: newBleep.interval,
          prevInterval: newBleep.interval,
          timer: null, //- { id: null }
          isActive: true,
        },
        ...bleeps,
      ]),
    remove: (bleepId) =>
      update((bleeps) => bleeps.filter((bleep) => bleep.id !== bleepId)),
    removeAll: () =>
      update(() => {
        bleepsStore.destroyAllTimers();
        return [];
      }),
    activateAll: () =>
      update((bleeps) =>
        bleeps.map((bleep) => {
          return { ...bleep, isActive: true };
        })
      ),
    deactivateAll: () =>
      update((bleeps) =>
        bleeps.map((bleep) => {
          return { ...bleep, isActive: false };
        })
      ),
    destroyAllTimers: () =>
      update((bleeps) =>
        bleeps.map((bleep) => {
          stopBleepTimer(bleep);
          return { ...bleep, timer: null, prevInterval: bleep.interval };
        })
      ),
  };

  return bleepsStore;
};

//- Bleeps Configuration Store
const createSetTime = async () => {
  const storedSetTime = await localforage.getItem(
    "bleeper_bleeps_config_setTime"
  );

  const { subscribe, update, set } = writable(storedSetTime || false);

  subscribe(async (val) => {
    await localforage.setItem("bleeper_bleeps_config_setTime", val);
  });

  return {
    subscribe,
    set,
    update,
  };
};

const createStartTime = async () => {
  const storedStartTime = await localforage.getItem(
    "bleeper_bleeps_config_startTime"
  );

  const { subscribe, update, set } = writable(storedStartTime || "09:00");

  subscribe(async (val) => {
    await localforage.setItem("bleeper_bleeps_config_startTime", val);
  });

  return {
    subscribe,
    set,
    update,
  };
};

const createEndTime = async () => {
  const storedEndTime = await localforage.getItem(
    "bleeper_bleeps_config_endTime"
  );

  const { subscribe, update, set } = writable(storedEndTime || "18:00");

  subscribe(async (val) => {
    await localforage.setItem("bleeper_bleeps_config_endTime", val);
  });

  return {
    subscribe,
    set,
    update,
  };
};

const createSetNotificationSound = async () => {
  const storedSetNotificationSound = await localforage.getItem(
    "bleeper_bleeps_config_setNotificationSound"
  );

  const { subscribe, update, set } = writable(
    storedSetNotificationSound || false
  );

  subscribe(async (val) => {
    await localforage.setItem(
      "bleeper_bleeps_config_setNotificationSound",
      val
    );
  });

  return {
    subscribe,
    update,
    set,
  };
};

const createNotificationSound = async () => {
  const storedNotificationSound = await localforage.getItem(
    "bleeper_bleeps_config_notificationSound"
  );

  const { subscribe, update, set } = writable(
    storedNotificationSound || "bleep-sound1"
  );

  subscribe(async (val) => {
    await localforage.setItem("bleeper_bleeps_config_notificationSound", val);
  });

  return {
    subscribe,
    set,
    update,
  };
};

//- Exports
export const bleeps = await createBleeps();
export const setTime = await createSetTime();
export const startTime = await createStartTime();
export const endTime = await createEndTime();
export const setNotificationSound = await createSetNotificationSound();
export const notificationSound = await createNotificationSound();

//- Currently Editting Bleep Store
export const currEdittingBleep = writable("");
