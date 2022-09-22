import { readable, writable } from "svelte/store";
import { getTime } from "../utils/utils.js"

//- Current Time
export const currentTime = readable(null, (set) => {
	set(getTime());

	const intervalId = setInterval(() => {
		set(getTime());
	}, 1000);

	return () => clearInterval(intervalId);
});

//- Page Store
export const currentPage = writable("home");

//- Theme Store
export const theme = writable("light");
