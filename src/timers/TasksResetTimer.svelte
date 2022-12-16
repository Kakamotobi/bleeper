<script>
	import { currentTime, resetAt, resetAtTime, tasks } from "@stores/index.js";

	$: {
		if ($resetAt === true) {
			if ($currentTime === $resetAtTime) {
				tasks.reset();
			}
		}
	}
</script>
