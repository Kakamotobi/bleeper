import { writable } from "svelte/store";
import { v4 as uuidv4 } from "uuid";

//- Currently Editting Bleep Store
export const currEdittingBleep = writable("");

//- Bleeps Store
const createBleeps = () => {
	const { subscribe, update, set } = writable([
		{
			id: "1",
			content: "drink water",
			interval: "1",
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

//- Bleeps Configuration Store
export const setTime = writable(false);

export const startTime = writable("09:00");

export const endTime = writable("18:00");
