import { writable } from "svelte/store";
import localforage from "localforage";
import { v4 as uuidv4 } from "uuid";

//- Get Data from LocalForage
let storedBleeps;
localforage
	.getItem("bleeper_bleeps")
	.then((val) => (storedBleeps = val))
	.catch((err) => console.log(err));

let storedSetTime;
localforage
	.getItem("bleeper_bleeps_config_setTime")
	.then((val) => (storedSetTime = val))
	.catch((err) => console.log(err));

let storedStartTime;
localforage
	.getItem("bleeper_bleeps_config_startTime")
	.then((val) => (storedStartTime = val))
	.catch((err) => console.log(err));

let storedEndTime;
localforage
	.getItem("bleeper_bleeps_config_endTime")
	.then((val) => (storedEndTime = val))
	.catch((err) => console.log(err));

//- Bleeps Store
const createBleeps = () => {
	const { subscribe, update, set } = writable(storedBleeps || []);

	subscribe(async (val) => {
		await localforage.setItem("bleeper_bleeps", val);
	});

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
export const setTime = writable(storedSetTime || false);
setTime.subscribe(
	async (val) => await localforage.setItem("bleeper_bleeps_config_setTime", val)
);

export const startTime = writable(storedStartTime || "09:00");
startTime.subscribe(
	async (val) =>
		await localforage.setItem("bleeper_bleeps_config_startTime", val)
);

export const endTime = writable(storedEndTime || "18:00");
endTime.subscribe(
	async (val) => await localforage.setItem("bleeper_bleeps_config_endTime", val)
);

//- Currently Editting Bleep Store
export const currEdittingBleep = writable("");

// [
// 	{
// 		id: "1",
// 		content: "drink water",
// 		interval: "1",
// 		prevInterval: null,
// 		intervalID: null,
// 		clickToConfirm: false,
// 		isActive: true,
// 	},
// 	{
// 		id: "2",
// 		content: "eye drops",
// 		interval: "2",
// 		prevInterval: null,
// 		intervalID: null,
// 		clickToConfirm: false,
// 		isActive: true,
// 	},
// 	{
// 		id: "3",
// 		content: "stretch",
// 		interval: "3",
// 		prevInterval: null,
// 		intervalID: null,
// 		clickToConfirm: false,
// 		isActive: true,
// 	},
// ]
