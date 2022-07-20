<script>
	import { currentPage } from "./stores.js";
	import Navbar from "./components/Navbar.svelte";
	import HomePage from "./pages/HomePage.svelte";
	import ManageTasksPage from "./pages/ManageTasksPage.svelte";
	import ManageBleepsPage from "./pages/ManageBleepsPage.svelte";
	import SettingsPage from "./pages/SettingsPage.svelte";
</script>

<Navbar />
<main>
	{#if $currentPage === "home"}
		<HomePage />
	{:else if $currentPage === "manage-tasks"}
		<ManageTasksPage />
	{:else if $currentPage === "manage-bleeps"}
		<ManageBleepsPage />
	{:else if $currentPage === "settings"}
		<SettingsPage />
	{/if}
</main>

<style>
	main {
		padding: 30px;
		flex-grow: 1;
	}

	@media (min-width: 640px) {
		main {
			background-color: white;
		}
	}
</style>
