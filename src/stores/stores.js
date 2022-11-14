import { readable, writable, get } from "svelte/store";
import localforage from "localforage";
import { getTime, customSetInterval } from "../utils/utils.js";

//- Current Time
export const currentTime = readable(null, (set) => {
	set(getTime());

	const timer = customSetInterval(() => {
		set(getTime());
	}, 1000);

	return () => clearTimeout(timer.id);
});

//- Page Store
export const currentPage = writable("home");

//- Theme Store
const createTheme = async () => {
	const storedTheme = await localforage.getItem("bleeper_theme");

	const themeStore = writable(storedTheme || "light");
	const { subscribe, update, set } = themeStore;

	subscribe(async (val) => {
		await localforage.setItem("bleeper_theme", val);
	});

	return {
		subscribe,
		set,
		update: () => update((prevTheme) => {
			const body = document.querySelector("body");
			const newTheme = prevTheme === "light" ? "dark" : "light";
			body.classList.remove(prevTheme);
			body.classList.add(newTheme);
			return newTheme;
		}),
		initialLoad: () => update((prevTheme) => {
			const body = document.querySelector("body");
			body.classList.remove(prevTheme);
			body.classList.add(get(themeStore));
			return get(themeStore);
		})
	};
};

export const theme = await createTheme();
