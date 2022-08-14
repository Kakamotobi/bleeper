<script>
	import { bleeps } from "../stores/bleepsStore.js";

	import Bleep from "../components/Bleep.svelte";
</script>

<ul>
	{#each $bleeps as bleep}
		<li>
			<Bleep bind:bleep />
		</li>
	{/each}
</ul>
