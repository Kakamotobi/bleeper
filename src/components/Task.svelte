<script>
	import { tasks } from "../stores/tasksStore.js";
	import { theme } from "../stores/stores.js";

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
	<button
		type="button"
		class={`remove-btn ${$theme === "dark" && "filter-white"}`}
		on:click={handleRemove}
		><img src="assets/RemoveIcon.svg" alt="Remove" /></button
	>
</div>

<style>
	.Task {
		width: 100%;
		height: inherit;
		padding: 8px;
		padding-right: 10px;
		display: flex;
		align-items: center;
		background-color: var(--bg-box);
		border: 1px solid var(--box-border);
		border-radius: 10px;
		overflow: hidden;
	}

	.Task:hover .remove-btn {
		transform: translateX(0);
	}

	.check-off {
		width: 20px;
		height: 20px;
		position: relative;
		text-align: center;
		line-height: 25px;
	}

	.check-off > input {
		width: inherit;
		height: inherit;
	}

	.task-content {
		width: 100%;
		height: 100%;
		margin-left: 10px;
		font-size: 1rem;
		background: transparent;
		border: none;
	}

	.remove-btn {
		width: 15px;
		height: 15px;
		background-color: transparent;
		transform: translateX(30px) rotate(90deg);
		transition: transform 250ms ease-out;
	}

	.remove-btn > img {
		width: inherit;
		height: inherit;
	}
</style>
