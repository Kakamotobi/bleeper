<script>
	import { resetAt, resetAtTime, keepUnfinishedTasks } from "@stores/index.js";
	import Section from "@components/shared/Section.svelte";

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

	<ul slot="content" class="main-options">
		<li class="main-option">
			<div class="main-option-wrapper">
				<label for="reset-at" class="checkbox-and-label">
					<input
						id="reset-at"
						type="checkbox"
						checked={$resetAt}
						on:change={handleResetAt}
					/>
					<span>Reset at</span>
				</label>
				<label>
					<input
						type="time"
						value={$resetAtTime}
						disabled={!$resetAt}
						on:change={handleResetTime}
					/>
				</label>
			</div>

			<div class="sub-options-container">
				{#if $resetAt === true}
					<ul class="sub-options">
						<li class="sub-option">
							<label for="keep-unfinished-tasks" class="checkbox-and-label">
								<input
									type="checkbox"
									id="keep-unfinished-tasks"
									checked={$keepUnfinishedTasks}
									on:change={handleKeepUnfinishedTasks}
								/>
								<span>Keep unfinished tasks</span>
							</label>
						</li>
					</ul>
				{/if}
			</div>
		</li>
	</ul>
</Section>
