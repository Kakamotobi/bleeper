export const isDescendantOf = (targetParentClass, child) => {
	let node = child.parentElement;
	while (node) {
		if (node.classList.contains(targetParentClass)) return true;
		node = node.parentElement;
	}
	return false;
};

export const getTime = () => {
	const date = new Date();
	const hours = date.getHours().toString().padStart(2, "0");
	const minutes = date.getMinutes().toString().padStart(2, "0");
	return `${hours}:${minutes}`;
};

export const formatTime = (time) => {
	return time.replace(":", "");
};