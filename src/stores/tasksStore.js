import { get, writable } from "svelte/store";
import localforage from "localforage";
import { v4 as uuidv4 } from "uuid";

//- Tasks Store
const createTasks = async () => {
  const storedTasks = await localforage.getItem("bleeper_tasks");

  const { subscribe, set, update } = writable(storedTasks || []);

  subscribe(async (val) => {
    await localforage.setItem("bleeper_tasks", val);
  });

  return {
    subscribe,
    set,
    add: (taskContent) =>
      update((tasks) => [
        ...tasks,
        { id: uuidv4(), content: taskContent, isCheckedOff: false },
      ]),
    edit: (taskId, editedTaskContent) =>
      update((tasks) => {
        const targetTask = tasks.find((task) => task.id === taskId);
        targetTask.content = editedTaskContent;
        return tasks;
      }),
    remove: (taskId) =>
      update((tasks) => tasks.filter((task) => task.id !== taskId)),
    removeAll: () => update(() => []),
    checkOff: (taskId) =>
      update((tasks) => {
        const targetTask = tasks.find((task) => task.id === taskId);
        targetTask.isCheckedOff = !targetTask.isCheckedOff;
        return tasks;
      }),
    checkOffAll: () =>
      update((tasks) =>
        tasks.map((task) => {
          return { ...task, isCheckedOff: true };
        })
      ),
    uncheckAll: () =>
      update((tasks) =>
        tasks.map((task) => {
          return { ...task, isCheckedOff: false };
        })
      ),
    reset: () => {
      if (get(keepUnfinishedTasks) == true) {
        return update((tasks) =>
          tasks.filter((task) => task.isCheckedOff === false)
        );
      }
      return set([]);
    },
  };
};

//- Tasks Configuration Store
const createResetAt = async () => {
  const storedResetAt = await localforage.getItem(
    "bleeper_tasks_config_resetAt"
  );

  const { subscribe, set, update } = writable(storedResetAt || false);

  subscribe(async (val) => {
    await localforage.setItem("bleeper_tasks_config_resetAt", val);
  });

  return {
    subscribe,
    set,
    update,
  };
};

const createResetAtTime = async () => {
  const storedResetAtTime = await localforage.getItem(
    "bleeper_tasks_config_resetAtTime"
  );

  const { subscribe, set, update } = writable(storedResetAtTime || "00:00");

  subscribe(async (val) => {
    await localforage.setItem("bleeper_tasks_config_resetAtTime", val);
  });

  return {
    subscribe,
    set,
    update,
  };
};

const createKeepUnfinishedTasks = async () => {
  const storedKeepUnfinishedTasks = await localforage.getItem(
    "bleeper_tasks_config_keepUnfinishedTasks"
  );

  const { subscribe, set, update } = writable(
    storedKeepUnfinishedTasks || false
  );

  subscribe(async (val) => {
    await localforage.setItem("bleeper_tasks_config_keepUnfinishedTasks", val);
  });

  return {
    subscribe,
    set,
    update,
  };
};

//- Exports
export const tasks = await createTasks();
export const resetAt = await createResetAt();
export const resetAtTime = await createResetAtTime();
export const keepUnfinishedTasks = await createKeepUnfinishedTasks();
