<script>
	import { bleeps } from "../stores/bleepsStore";
	import { tasks } from "../stores/tasksStore.js";
	import { capitalize } from "../utils/utils.js";

	export let action;
	export let target;

	const handleAction = () => {
		if (target === "bleeps") {
			if (action === "activate") {
				bleeps.activateAll();
			} else if (action === "deactivate") {
				bleeps.deactivateAll();
			} else if (action === "clear") {
				bleeps.removeAll();
			}
		} else if (target === "tasks") {
			if (action === "clear") {
				tasks.removeAll();
			} else if (action === "check") {
				tasks.checkOffAll();
			} else if (action === "uncheck") {
				tasks.uncheckAll();
			}
		}
	};
</script>

<button class={action} on:click={handleAction}>{capitalize(action)} All</button>

<style>
	button {
		padding: 5px 10px;
		border-radius: 5px;
		transition: all 100ms ease-out;
	}

	.activate,
	.check {
		background-color: var(--bg-activate-button);
		border: 1px solid var(--border-activate-button);
	}

	.activate:hover,
	.check:hover {
		background-color: var(--bg-activate-button-hover);
	}

	.deactivate,
	.uncheck {
		background-color: var(--bg-deactivate-button);
		border: 1px solid var(--border-deactivate-button);
	}

	.deactivate:hover,
	.uncheck:hover {
		background-color: var(--bg-deactivate-button-hover);
	}

	.clear {
		background-color: var(--bg-clear-button);
		border: 1px solid var(--border-clear-button);
	}

	.clear:hover {
		background-color: var(--bg-clear-button-hover);
	}
</style>
