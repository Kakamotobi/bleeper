<script>
	import { currentPage } from "./stores.js";
	import Navbar from "./components/Navbar.svelte";
	import Home from "./pages/Home.svelte";
	import ManageTasks from "./pages/ManageTasks.svelte";
	import ManageBleeps from "./pages/ManageBleeps.svelte";
	import Settings from "./pages/Settings.svelte";
</script>

<Navbar />
<main>
	{#if $currentPage === "home"}
		<Home />
	{:else if $currentPage === "manage-tasks"}
		<ManageTasks />
	{:else if $currentPage === "manage-bleeps"}
		<ManageBleeps />
	{:else if $currentPage === "settings"}
		<Settings />
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
