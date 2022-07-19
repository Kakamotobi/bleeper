<script>
	import { currentPage } from "../stores.js";
	import HomeIcon from "../../public/assets/HomeIcon.svelte";
	import TasksIcon from "../../public/assets/TasksIcon.svelte";
	import BleepsIcon from "../../public/assets/BleepsIcon.svelte";
	import SettingsIcon from "../../public/assets/SettingsIcon.svelte";
	import LeftArrow from "../../public/assets/LeftArrow.svelte";
	import RightArrow from "../../public/assets/RightArrow.svelte";

	let isCollapsed = false;

	const routeHandler = (evt) => {
		let el = evt.target;
		while (el.tagName !== "LI") {
			el = el.parentElement;
		}
		$currentPage = el.dataset.name;
	};

	const expandHandler = (evt) => {
		isCollapsed = !isCollapsed;
	};
</script>

<nav class={isCollapsed && "is-collapsed"}>
	<ul>
		<li data-name="home" on:click={routeHandler}>
			<HomeIcon /><span class={isCollapsed && "is-hidden"}>Home</span>
		</li>
		<li data-name="manage-tasks" on:click={routeHandler}>
			<TasksIcon /><span class={isCollapsed && "is-hidden"}>Manage Tasks</span>
		</li>
		<li data-name="manage-bleeps" on:click={routeHandler}>
			<BleepsIcon /><span class={isCollapsed && "is-hidden"}>Manage Bleeps</span
			>
		</li>
		<li data-name="settings" on:click={routeHandler}>
			<SettingsIcon /><span class={isCollapsed && "is-hidden"}>Settings</span>
		</li>
	</ul>

	<button on:click={expandHandler}>
		{#if isCollapsed}
			<RightArrow />
		{:else}
			<LeftArrow />
		{/if}
	</button>
</nav>

<style>
	.is-hidden {
		display: none;
	}

	nav {
		width: auto;
		min-width: 200px;
		padding-top: 50px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		background-color: rgb(238, 238, 238);
		overflow: hidden;
	}

	nav.is-collapsed {
		min-width: 48px;
	}

	ul {
		width: 100%;
		list-style: none;
	}

	li {
		padding: 15px 30px;
		display: flex;
		align-items: center;
		white-space: nowrap;
		cursor: pointer;
	}

	nav.is-collapsed li {
		padding-left: 0;
		padding-right: 0;
		justify-content: center;
	}

	li > span {
		margin-left: 10px;
	}

	li:hover {
		background-color: rgb(215, 215, 215);
		color: #747bff;
	}

	button {
		height: 46px;
		padding-right: 10px;
		background-color: rgb(210, 210, 210);
		border: none;
		text-align: right;
		cursor: pointer;
	}

	button:hover {
		background-color: rgb(188, 188, 188);
	}
</style>
