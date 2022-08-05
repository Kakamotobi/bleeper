import { readable, writable } from "svelte/store";

//- Current Time
const getTime = () => {
	const date = new Date();
	const hours = date.getHours().toString().padStart(2, "0");
	const minutes = date.getMinutes().toString().padStart(2, "0");
	return `${hours}:${minutes}`;
};

export const currentTime = readable(null, (set) => {
	set(getTime());

	const intervalId = setInterval(() => {
		set(getTime());
	}, 1000);

	return () => clearInterval(intervalId);
});

//- Page Store
export const currentPage = writable("manage-tasks");
