import { get, writable } from "svelte/store";
import localforage from "localforage";
import { v4 as uuidv4 } from "uuid";

localforage
	.getItem("blahblah")
	.then((val) => console.log(val))
	.catch((err) => console.log(err));

//- Get Data from LocalForage
let storedTasks;
localforage
	.getItem("bleeper_tasks")
	.then((val) => (storedTasks = val))
	.catch((err) => console.log(err));

let storedResetAt;
localforage
	.getItem("bleeper_tasks_config_resetAt")
	.then((val) => (storedResetAt = val))
	.catch((err) => console.log(err));

let storedResetAtTime;
localforage
	.getItem("bleeper_tasks_config_resetAtTime")
	.then((val) => (storedResetAtTime = val))
	.catch((err) => console.log(err));

let storedKeepUnfinishedTasks;
localforage
	.getItem("bleeper_tasks_config_keepUnfinishedTasks")
	.then((val) => (storedKeepUnfinishedTasks = val))
	.catch((err) => console.log(err));

//- Tasks Store
const createTasks = () => {
	const { subscribe, set, update } = writable(storedTasks || []);

	subscribe(async (val) => {
		await localforage.setItem("bleeper_tasks", val);
	});

	return {
		subscribe,
		set,
		add: (taskContent) =>
			update((tasks) => [
				{ id: uuidv4(), content: taskContent, isCheckedOff: false },
				...tasks,
			]),
		edit: (taskId, editedTaskContent) =>
			update((tasks) => {
				const targetTask = tasks.find((task) => task.id === taskId);
				targetTask.content = editedTaskContent;
				return tasks;
			}),
		remove: (taskId) =>
			update((tasks) => tasks.filter((task) => task.id !== taskId)),
		checkOff: (taskId) =>
			update((tasks) => {
				const targetTask = tasks.find((task) => task.id === taskId);
				targetTask.isCheckedOff = !targetTask.isCheckedOff;
				return tasks;
			}),
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

export const tasks = createTasks();

//- Tasks Configuration Store
export const resetAt = writable(storedResetAt || false);
resetAt.subscribe(
	async (val) => await localforage.setItem("bleeper_tasks_config_resetAt", val)
);

export const resetAtTime = writable(storedResetAtTime || "00:00");
resetAtTime.subscribe(
	async (val) =>
		await localforage.setItem("bleeper_tasks_config_resetAtTime", val)
);

export const keepUnfinishedTasks = writable(storedKeepUnfinishedTasks || false);
keepUnfinishedTasks.subscribe(
	async (val) =>
		await localforage.setItem("bleeper_tasks_config_keepUnfinishedTasks", val)
);
