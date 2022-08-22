<script>
	import { bleeps } from "../stores/bleepsStore.js";
	import Bleep from "../components/Bleep.svelte";

	export let displayActiveOnly;

	$: sortedBleeps = $bleeps.sort((a,b) => a.interval - b.interval);
</script>

<ul>
	{#each sortedBleeps as bleep}
		{#if displayActiveOnly}
			{#if bleep.isActive}
				<li>
					<Bleep bind:bleep />
				</li>
			{/if}
		{:else}
			<li>
				<Bleep bind:bleep />
			</li>
		{/if}
	{/each}
</ul>
