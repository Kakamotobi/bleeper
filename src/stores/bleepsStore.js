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
			prevInterval: null,
			intervalID: null,
			clickToConfirm: false,
			isActive: true,
		},
		{
			id: "2",
			content: "eye drops",
			interval: "2",
			prevInterval: null,
			intervalID: null,
			clickToConfirm: false,
			isActive: true,
		},
		{
			id: "3",
			content: "stretch",
			interval: "3",
			prevInterval: null,
			intervalID: null,
			clickToConfirm: false,
			isActive: true,
		},
	]);
	return {
		subscribe,
		set,
		update: () => update((bleeps) => bleeps),
		add: (newBleep) =>
			update((bleeps) => [
				{
					id: uuidv4(),
					content: newBleep.content,
					interval: newBleep.interval,
					prevInterval: null,
					intervalID: null,
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
