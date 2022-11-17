<script>
	import { appWindow } from "@tauri-apps/api/window";
	import { onMount } from "svelte";
	import { currentPage, theme } from "./stores/stores.js";
	import { bleeps } from "./stores/bleepsStore.js";
	import Navbar from "./components/Navbar.svelte";
	import HomePage from "./pages/HomePage.svelte";
	import ManageTasksPage from "./pages/ManageTasksPage.svelte";
	import ManageBleepsPage from "./pages/ManageBleepsPage.svelte";
	import SettingsPage from "./pages/SettingsPage.svelte";
	import TasksResetTimer from "./TasksResetTimer.svelte";
	import BleepIntervals from "./BleepIntervals.svelte";

	onMount(() => {
		theme.initialLoad();
		bleeps.destroyAllTimers();
	});

	appWindow.onCloseRequested(async (evt) => {
		bleeps.destroyAllTimers();
	});
</script>

<!-- Tasks reset timer -->
<TasksResetTimer />
<!-- Bleep intervals logic independent of any given component -->
<BleepIntervals />

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
		width: 100%;
		height: 100%;
	}
</style>
