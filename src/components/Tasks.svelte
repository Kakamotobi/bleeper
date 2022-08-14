<script>
	import { tasks } from "../stores/tasksStore.js";
	import Task from "../components/Task.svelte";
</script>

<ul>
	{#each $tasks as task}
		<li>
			<Task bind:task />
		</li>
	{/each}
</ul>
