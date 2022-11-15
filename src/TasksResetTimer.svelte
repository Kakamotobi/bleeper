<script>
	import { tasks, resetAt, resetAtTime } from "./stores/tasksStore.js";
	import { currentTime } from "./stores/stores.js";

	$: {
		if ($resetAt === true) {
			if ($currentTime === $resetAtTime) {
				tasks.reset();
			}
		}
	}
</script>
