<script>
	import { tasks } from "../stores/tasksStore.js";

	export let task;

	const handleCheckOff = () => {
		tasks.checkOff(task.id);
	};

	const handleEditContent = (evt) => {
		const inputVal = evt.target.value.trim();
		if (inputVal !== "") tasks.edit(task.id, inputVal);
	};

	const handleRemove = (evt) => {
		tasks.remove(task.id);
	};
</script>

<div class="Task" data-id={task.id}>
	<div class="check-off">
		<input
			type="checkbox"
			checked={task.isCheckedOff}
			on:change={handleCheckOff}
		/>
	</div>
	<input
		type="text"
		class="task-content"
		value={task.content}
		on:blur={handleEditContent}
	/>
	<button type="button" on:click={handleRemove}>Remove</button>
</div>

<style>
	.Task {
		width: 100%;
		height: inherit;
		padding: 8px;
		display: flex;
		align-items: center;
		/* background-color: rgba(0, 0, 0, 0.47); */
		backdrop-filter: blur(19.2px);
		-webkit-backdrop-filter: blur(19.2px);
		border: 1px solid rgba(0, 0, 0, 0.26);
		border-radius: 10px;
		/* box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); */
	}

	.check-off {
		width: 25px;
		height: 25px;
		background: white;
		text-align: center;
		line-height: 25px;
	}

	.check-off > input {
		width: inherit;
		height: inherit;
	}

	.task-content {
		height: 100%;
		margin-left: 10px;
		flex-grow: 1;
		font-size: 1rem;
		background: transparent;
		border: none;
	}
</style>
