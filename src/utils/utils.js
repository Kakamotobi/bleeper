import { confirm } from "@tauri-apps/api/dialog";

//- Check if an element is a descendant of an element with a particular class.
export const isDescendantOf = (targetParentClass, child) => {
	let node = child.parentElement;
	while (node) {
		if (node.classList.contains(targetParentClass)) return true;
		node = node.parentElement;
	}
	return false;
};

//- Get the current time.
export const getTime = () => {
	const date = new Date();
	const hours = date.getHours().toString().padStart(2, "0");
	const minutes = date.getMinutes().toString().padStart(2, "0");
	return `${hours}:${minutes}`;
};

//- Get the current date.
export const getDate = () => {
	const months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];
	const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	const today = new Date();
	const day = days[today.getDay()];
	const date = today.getDate();
	const month = months[today.getMonth()];
	const year = today.getFullYear();
	return `${day}, ${date} ${month}. ${year}`;
};

//- Format time from HH:MM to HHMM.
export const formatTime = (time) => {
	return time.replace(":", "");
};

//- Self adjusting setInterval.
export const customSetInterval = (cb, interval) => {
	//- The expected time at which cb should be invoked (timer should end).
	let expected = Date.now() + interval;

	const idContainer = {};

	function tick() {
		//- The amount in ms that the timer drifted.
		const delta = Date.now() - expected;
		const ticks = Math.max(1, 1 + Math.round(delta / interval));

		//- Invoke callback.
		cb();

		//- Calculate the expected time for the next point at which cb should be invoked.
		const addToExpected = interval * ticks;
		expected += addToExpected;

		//- Restart timer when interval is done (effectively, reenacting a precise interval).
		idContainer.id = setTimeout(tick, addToExpected - delta);
	}

	//- Initiate timer and store its ID.
	idContainer.id = setTimeout(tick, interval);

	return idContainer; //- { id: Number }
};

//- Capitalize first letter of every word in string.
export const capitalize = (str) => {
	return str
		.split(" ")
		.map((s) => s[0].toUpperCase() + s.slice(1))
		.join(" ");
};

//- Confirmation Modal
export const askConfirmation = async (target) => {
	return await confirm("This action cannot be reverted. Are you sure?", {
		title: `Clear ${capitalize(target)}`,
		type: "warning",
	});
};
