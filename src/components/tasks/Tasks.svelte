<script>
	import { tasks } from "@stores/index.js";
	import Task from "./Task.svelte";
</script>

<ul>
	{#each $tasks as task}
		<li>
			<Task bind:task />
		</li>
	{/each}
</ul>
