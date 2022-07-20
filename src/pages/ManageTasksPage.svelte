<script>
	import { tasks } from "../stores.js";
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
	<section>
		<h2>Manage Tasks</h2>

		<ul class="tasks-list">
			{#each $tasks as task}
				<li class="tasks-list__item">
					<Task {task} />
				</li>
			{/each}
		</ul>

		<form on:submit|preventDefault={handleSubmit}>
			<input type="text" bind:value={inputVal} />
			<button type="submit">Add</button>
		</form>
	</section>

	<section>
		<h2>Configurations</h2>

		<ul class="configs-list">
			<li class="configs-list__item">
				<input type="checkbox" />
				Reset after time
				<ul class="configs-list__item__options-list">
					<li class="configs-list__item__options-list__item">
						Reset at <input type="time" />
					</li>
					<li class="configs-list__item__options-list__item">
						<input type="checkbox" />
						Keep unfinished tasks
					</li>
				</ul>
			</li>
		</ul>
	</section>
</div>

<style>
	.Page {
		height: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 10px;

		/* border: 1px solid red; */
	}

	section {
		height: 100%;
		display: flex;
		flex-direction: column;
		position: relative;

		/* border: 1px solid green; */
	}

	h2 {
		margin-bottom: 20px;
	}

	section:first-of-type {
		min-width: 350px;
		flex-grow: 1;
	}

	.tasks-list {
		flex-grow: 1;
		overflow: auto;
	}

	.tasks-list__item {
		height: 40px;
		margin-bottom: 10px;
		padding-inline: 10px;

		/* border: 1px solid orange; */
	}

	form {
		width: 100%;
		height: 35px;
		display: flex;
		position: sticky;
		/* bottom: 0; */
	}

	input {
		height: inherit;
		flex-grow: 1;
		background-color: #f9f9f9;
		font-size: 1rem;
	}

	button {
		width: 12%;
		max-width: 50px;
		height: inherit;
	}

	section:last-of-type {
		min-width: 300px;
	}

	/* Configurations */
	.configs-list {
		padding-inline: 10px;
	}

	.configs-list__item__options-list {
		padding-left: 25px;
	}
</style>
