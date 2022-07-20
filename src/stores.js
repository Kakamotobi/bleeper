import { writable } from "svelte/store";

//- Page Store
export const currentPage = writable("manage-tasks");

//- Tasks Store
const createTasks = () => {
	const { subscribe, set, update } = writable([
		{ id: 1, content: "water plants", isCheckedOff: false },
		{ id: 2, content: "buy groceries", isCheckedOff: false },
		{ id: 3, content: "workout", isCheckedOff: false },
	]);
	return {
		subscribe,
		add: (task) => update((tasks) => [task, ...tasks]),
		update: (taskId, editedTaskContent) =>
			update((tasks) => {
				const targetTask = tasks.find((task) => task.id === taskId);
				targetTask.content = editedTaskContent;
				return tasks;
			}),
		remove: (taskId) =>
			update((tasks) => tasks.filter((task) => task.id === taskId)),
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

//- task
	//- id
	//- content
	//- isCheckedOff

//- bleep
	//- id
	//- content
	//- minutely/hourly
	//- isActivated
	//- clickToConfirm
