<script>
	import {
		tasks,
		resetAt,
		resetAtTime,
		keepUnfinishedTasks,
	} from "../stores/tasksStore.js";
	import Page from "../components/Page.svelte";
	import Section from "../components/Section.svelte";
	import Tasks from "../components/Tasks.svelte";

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
	const handleResetAt = () => {
		$resetAt = !$resetAt;
	};

	const handleResetTime = (evt) => {
		$resetAtTime = evt.target.value;
	};

	const handleKeepUnfinishedTasks = () => {
		$keepUnfinishedTasks = !$keepUnfinishedTasks;
	};
</script>

<Page>
	<Section contentType="main-section">
		<h2 slot="title">Manage Tasks</h2>

		<Tasks slot="content" />

		<form slot="form" on:submit|preventDefault={handleSubmit}>
			<input
				type="text"
				placeholder="Enter task name"
				maxlength="100"
				required
				bind:value={inputVal}
			/>
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
								on:change={handleKeepUnfinishedTasks}
							/>
							Keep unfinished tasks
						</li>
					</ul>
				{/if}
			</li>
		</ul>
	</Section>
</Page>
