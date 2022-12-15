<script>
	import Section from "../shared/Section.svelte";
	import Tasks from "./Tasks.svelte";
	import ActionButtons from "../shared/ActionButtons.svelte";
	import TaskForm from "./TaskForm.svelte";
</script>

<Section contentType="main-section">
	<h2 slot="title">Tasks</h2>

	<ActionButtons
		slot="buttons"
		target="tasks"
		buttons={["check", "uncheck", "clear"]}
	/>

	<Tasks slot="content" />

	<TaskForm slot="form" />
</Section>
