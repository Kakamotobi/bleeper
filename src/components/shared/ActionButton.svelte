<script>
	import { tasks, bleeps } from "@stores/index.js";
	import { askConfirmation, capitalize } from "@utils/index.js";

	export let action;
	export let target;

	const handleAction = async () => {
		if (target === "bleeps") {
			if (action === "activate") {
				bleeps.activateAll();
			} else if (action === "deactivate") {
				bleeps.deactivateAll();
			} else if (action === "clear") {
				if (await askConfirmation("all bleeps")) bleeps.removeAll();
			}
		} else if (target === "tasks") {
			if (action === "check") {
				tasks.checkOffAll();
			} else if (action === "uncheck") {
				tasks.uncheckAll();
			} else if (action === "clear") {
				if (await askConfirmation("all tasks")) tasks.removeAll();
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
