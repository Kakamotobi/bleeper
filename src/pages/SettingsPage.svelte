<script>
	import { theme } from "../stores/stores.js";
	import Page from "../components/shared/Page.svelte";
	import Section from "../components/shared/Section.svelte";

	const handleDarkModeToggle = () => {
		theme.update();
	};
</script>

<Page>
	<Section contentType="config-section">
		<h2 slot="title">Settings</h2>
		<ul slot="content">
			<li>
				<label for="darkModeToggle" class="checkbox-and-label">
					<input
						type="checkbox"
						id="darkModeToggle"
						checked={$theme === "dark" ? true : false}
						on:change={handleDarkModeToggle}
					/>
					<span>Dark Mode</span>
				</label>
			</li>
		</ul>
	</Section>
</Page>

<style>
	.checkbox-and-label input[type="checkbox"] {
		width: 18px;
		height: 18px;
	}

	.checkbox-and-label > span {
		margin-left: 10px;
		font-size: 1.2rem;
	}
</style>
