<script>
	import {
		resetAt,
		resetAtTime,
		keepUnfinishedTasks,
	} from "../stores/tasksStore.js";
	import Section from "./Section.svelte";

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
