<script>
	import { theme } from "../stores/stores.js";
	import Page from "../components/Page.svelte";
	import Section from "../components/Section.svelte";

	const handleDarkModeToggle = () => {
		theme.update();
	};
</script>

<Page>
	<Section contentType="config-section">
		<h2 slot="title">Settings</h2>
		<ul slot="content">
			<li>
				<input
					type="checkbox"
					id="darkModeToggle"
					checked={$theme === "dark" ? true : false}
					on:change={handleDarkModeToggle}
				/>
				<label for="darkModeToggle">Dark Mode</label>
			</li>
		</ul>
	</Section>
</Page>

<style>
	label {
		padding-left: 5px;
		font-size: 1.1rem;
	}
</style>
