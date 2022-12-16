<script>
	import { bleeps } from "@stores/index.js";
	import Bleep from "./Bleep.svelte";

	export let displayActiveOnly;
</script>

<ul>
	{#each $bleeps as bleep}
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
