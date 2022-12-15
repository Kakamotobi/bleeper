<script>
	import { tasks } from "../../stores/tasksStore";

	let inputVal;

	const handleSubmit = () => {
		const newTaskContent = inputVal.trim();
		if (newTaskContent !== "") {
			tasks.add(newTaskContent);
			inputVal = "";
		}
	};
</script>

<form on:submit|preventDefault={handleSubmit}>
	<input
		type="text"
		placeholder="New task..."
		maxlength="100"
		required
		bind:value={inputVal}
	/>
	<button type="submit">Add</button>
</form>
