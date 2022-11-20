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
	<label class="check-off">
		<input
			type="checkbox"
			checked={task.isCheckedOff}
			on:change={handleCheckOff}
		/>
	</label>
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
	}

	.check-off input[type="checkbox"] {
		width: inherit;
		height: inherit;
		display: grid;
		place-content: center;
		appearance: none;
		background-color: var(--bg-checkbox);
		border: 1px solid var(--box-border);
		border-radius: 5px;
	}

	.check-off input[type="checkbox"]::before {
		content: "";
		width: 14px;
		height: 14px;
		transform: scale(0);
		transition: 120ms transform ease-out;
		border-radius: 4px;
  	clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
	}

	.check-off input[type="checkbox"]:checked::before {
		box-shadow: inset 15px 15px var(--check);
		transform: scale(1);
	}

	.check-off input[type="checkbox"]:hover {
		background-color: var(--bg-checkbox-hover);
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
