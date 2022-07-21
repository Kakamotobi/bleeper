export const isDescendantOf = (targetParentClass, child) => {
	let node = child.parentElement;
	while (node) {
		if (node.classList.contains(targetParentClass)) return true;
		node = node.parentElement;
	}
	return false;
};
