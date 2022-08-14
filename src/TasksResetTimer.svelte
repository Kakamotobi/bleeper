<script>
	import { tasks, resetAt, resetAtTime } from "./stores/tasksStore.js";
	import { currentTime } from "./stores/stores.js";

	$: {
		if ($resetAt === true) {
			if ($currentTime === $resetAtTime) {
				console.log("reset");
				tasks.reset();
			}
		}
	}
</script>
