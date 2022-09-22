<script>
	import Section from "./Section.svelte";
	import Tasks from "./Tasks.svelte";
	import { tasks } from "../stores/tasksStore.js";

	//- For new task
	let inputVal;

	const handleSubmit = () => {
		const newTaskContent = inputVal.trim();
		if (newTaskContent !== "") {
			tasks.add(newTaskContent);
			inputVal = "";
		}
	};
</script>

<Section contentType="main-section">
	<h2 slot="title">Tasks</h2>
	<Tasks slot="content" />

	<form slot="form" on:submit|preventDefault={handleSubmit}>
		<input
			type="text"
			placeholder="New task..."
			maxlength="100"
			required
			bind:value={inputVal}
		/>
		<button type="submit">Add</button>
	</form>
</Section>
