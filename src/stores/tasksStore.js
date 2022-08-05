import { get, writable } from "svelte/store";
import { v4 as uuidv4 } from "uuid";

//- Tasks Store
const createTasks = () => {
	const { subscribe, set, update } = writable([
		{ id: 1, content: "water plants", isCheckedOff: false },
		{ id: 2, content: "buy groceries", isCheckedOff: false },
		{ id: 3, content: "workout", isCheckedOff: false },
	]);
	return {
		subscribe,
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
export const resetAt = writable(false);

export const resetAtTime = writable("00:00");

export const keepUnfinishedTasks = writable(false);
