<script>
	import Section from "@components/shared/Section.svelte";
	import ActionButtons from "@components/shared/ActionButtons.svelte";
	import Tasks from "./Tasks.svelte";
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
