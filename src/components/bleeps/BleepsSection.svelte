<script>
	import { currentPage } from "../../stores/stores.js";
	import Section from "../shared/Section.svelte";
	import ActionButtons from "../shared/ActionButtons.svelte";
	import BleepForm from "./BleepForm.svelte";
	import Bleeps from "./Bleeps.svelte";
</script>

{#if $currentPage === "manage-bleeps"}
	<Section contentType="main-section">
		<h2 slot="title">Manage Bleeps</h2>

		<ActionButtons
			slot="buttons"
			target="bleeps"
			buttons={["activate", "deactivate", "clear"]}
		/>

		<Bleeps slot="content" displayActiveOnly={false} />

		<BleepForm slot="form" />
	</Section>
{:else}
	<Section contentType="main-section">
		<h2 slot="title">Active Bleeps</h2>

		<ActionButtons
			slot="buttons"
			target="bleeps"
			buttons={["activate", "deactivate"]}
		/>

		<Bleeps slot="content" displayActiveOnly={true} />
	</Section>
{/if}
