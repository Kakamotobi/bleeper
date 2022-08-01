<script>
	import { tasks } from "../stores/tasksStore.js";
	import Section from "../components/Section.svelte";
	import Task from "../components/Task.svelte";

	let inputVal;

	const handleSubmit = () => {
		const newTaskContent = inputVal.trim();
		if (newTaskContent !== "") {
			tasks.add(newTaskContent);
			inputVal = "";
		}
	};
</script>

<div class="Page">
	<Section contentType="main-section">
		<h2 slot="title">Manage Tasks</h2>

		<ul slot="content">
			{#each $tasks as task}
				<li>
					<Task {task} />
				</li>
			{/each}
		</ul>

		<form slot="form" on:submit|preventDefault={handleSubmit}>
			<input type="text" bind:value={inputVal} />
			<button type="submit">Add</button>
		</form>
	</Section>

	<Section contentType="config-section">
		<h2 slot="title">Configurations</h2>

		<ul slot="content">
			<li>
				<input type="checkbox" />
				Reset after time
				<ul>
					<li>
						Reset at <input type="time" />
					</li>
					<li>
						<input type="checkbox" />
						Keep unfinished tasks
					</li>
				</ul>
			</li>
		</ul>
	</Section>
</div>

<style>
	.Page {
		height: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 10px;
	}
</style>
