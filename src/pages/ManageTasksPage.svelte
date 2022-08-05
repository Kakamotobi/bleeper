<script>
	import { currentTime } from "../stores/stores.js";
	import {
		tasks,
		resetAt,
		resetAtTime,
		keepUnfinishedTasks,
	} from "../stores/tasksStore.js";
	import Section from "../components/Section.svelte";
	import Task from "../components/Task.svelte";

	//- For new task
	let inputVal;

	const handleSubmit = () => {
		const newTaskContent = inputVal.trim();
		if (newTaskContent !== "") {
			tasks.add(newTaskContent);
			inputVal = "";
		}
	};

	//- For configuration
	let intervalId;

	const startTicking = () => {
		if ($resetAt === true) {
			//- If there's already an interval in place, return.
			if (intervalId) return;

			intervalId = setInterval(() => {
				if ($currentTime === $resetAtTime) tasks.reset();
			}, 1000);
		} else {
			clearInterval(intervalId);
			intervalId = null;
		}
	};

	const handleResetAt = () => {
		$resetAt = !$resetAt;

		//- Start checking the clock.
		startTicking();
	};

	const handleResetTime = (evt) => {
		$resetAtTime = evt.target.value;

		//- Start checking the clock.
		startTicking();
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
			<input type="text" maxlength="100" bind:value={inputVal} />
			<button type="submit">Add</button>
		</form>
	</Section>

	<Section contentType="config-section">
		<h2 slot="title">Configurations</h2>

		<ul slot="content">
			<li>
				<input type="checkbox" checked={$resetAt} on:change={handleResetAt} />
				Reset at time
				{#if $resetAt === true}
					<ul>
						<li>
							Reset at <input
								type="time"
								value={$resetAtTime}
								on:change={handleResetTime}
							/>
						</li>
						<li>
							<input
								type="checkbox"
								checked={$keepUnfinishedTasks}
								on:change={() => ($keepUnfinishedTasks = !$keepUnfinishedTasks)}
							/>
							Keep unfinished tasks
						</li>
					</ul>
				{/if}
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
