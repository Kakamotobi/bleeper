<script>
	import {
		tasks,
		resetAfter,
		resetAfterTime,
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

	const setResetTime = () => {
		if ($resetAfter === true) {
			//- If there's already an interval in place, return.
			if (intervalId) return;

			intervalId = setInterval(() => {
				const date = new Date();
				const hours = date.getHours().toString().padStart(2, "0");
				const minutes = date.getMinutes().toString().padStart(2, "0");
				const currentTime = `${hours}:${minutes}`;
				if (currentTime === $resetAfterTime) tasks.reset();
			}, 1000);
		} else {
			clearInterval(intervalId);
			intervalId = null;
		}
	};

	const handleResetAfter = () => {
		$resetAfter = !$resetAfter;

		//- Initialize reset time to midnight.
		$resetAfterTime = "00:00";

		//- Set interval to reset tasks at time.
		setResetTime();
	};

	const handleResetTime = (evt) => {
		$resetAfterTime = evt.target.value;

		//- Set interval to reset tasks at time.
		setResetTime();
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
				<input
					type="checkbox"
					checked={$resetAfter}
					on:change={handleResetAfter}
				/>
				Reset after time
				{#if $resetAfter === true}
					<ul>
						<li>
							Reset at <input
								type="time"
								value={$resetAfterTime}
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
