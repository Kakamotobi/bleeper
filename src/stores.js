import { writable } from "svelte/store";
import { v4 as uuidv4 } from "uuid";

//- Page Store
export const currentPage = writable("manage-bleeps");

//- Currently Editting Bleep Store
export const currEdittingBleep = writable("");

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
		reset: () => set([]),
	};
};

export const tasks = createTasks();

//- Bleeps Store
const createBleeps = () => {
	const { subscribe, update, set } = writable([
		{
			id: "1",
			content: "drink water",
			interval: "60",
			clickToConfirm: false,
			isActive: true,
		},
		{
			id: "2",
			content: "eye drops",
			interval: "30",
			clickToConfirm: false,
			isActive: true,
		},
		{
			id: "3",
			content: "stretch",
			interval: "60",
			clickToConfirm: false,
			isActive: true,
		},
	]);
	return {
		subscribe,
		update: () => update((bleeps) => bleeps),
		set,
		add: (newBleep) =>
			update((bleeps) => [
				{
					id: uuidv4(),
					content: newBleep.content,
					interval: newBleep.interval,
					clickToConfirm: false,
					isActive: true,
				},
				...bleeps,
			]),
		remove: (bleepId) =>
			update((bleeps) => bleeps.filter((bleep) => bleep.id !== bleepId)),
	};
};

export const bleeps = createBleeps();
