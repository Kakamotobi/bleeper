<script>
	import { currentPage, theme } from "../stores/stores.js";

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
		<li
			class={$currentPage === "home" && "is-selected"}
			data-name="home"
			on:click={routeHandler}
			on:keydown={routeHandler}
		>
			<img
				src="assets/HomeIcon.svg"
				alt="Home"
				class={$theme === "dark" && "filter-white"}
			/><span>Home</span>
		</li>
		<li
			class={$currentPage === "manage-tasks" && "is-selected"}
			data-name="manage-tasks"
			on:click={routeHandler}
			on:keydown={routeHandler}
		>
			<img
				src="assets/TasksIcon.svg"
				alt="Tasks"
				class={$theme === "dark" && "filter-white"}
			/><span>Manage Tasks</span>
		</li>
		<li
			class={$currentPage === "manage-bleeps" && "is-selected"}
			data-name="manage-bleeps"
			on:click={routeHandler}
			on:keydown={routeHandler}
		>
			<img
				src="assets/BleepsIcon.svg"
				alt="Bleeps"
				class={$theme === "dark" && "filter-white"}
			/><span>Manage Bleeps</span>
		</li>
		<li
			class={$currentPage === "settings" && "is-selected"}
			data-name="settings"
			on:click={routeHandler}
			on:keydown={routeHandler}
		>
			<img
				src="assets/SettingsIcon.svg"
				alt="Settings"
				class={$theme === "dark" && "filter-white"}
			/><span>Settings</span>
		</li>
	</ul>

	<button on:click={expandHandler}>
		<img
			src="assets/Arrow.svg"
			alt="Arrow"
			class={`${isCollapsed && "rotate180"} ${
				$theme === "dark" && "filter-white"
			}`}
		/>
	</button>
</nav>

<style>
	nav {
		width: 200px;
		padding-top: 50px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		background-color: var(--bg-nav);
		transition: width 250ms ease-out;
	}

	nav.is-collapsed {
		width: 54px;
	}

	ul {
		width: 100%;
		overflow: hidden;
	}

	li {
		padding: 15px 30px;
		display: flex;
		align-items: center;
		white-space: nowrap;
		cursor: pointer;
		transition: padding 120ms ease-out, background-color 80ms ease-out;
	}

	nav.is-collapsed li {
		padding-left: 15px;
		padding-right: 0;
	}

	li:hover,
	li.is-selected {
		background-color: var(--bg-nav-hover);
		color: var(--text-active);
	}

	li > span {
		margin-left: 15px;
	}

	button {
		height: 46px;
		padding-right: 15px;
		background-color: var(--bg-button);
		border: none;
		text-align: right;
		cursor: pointer;
		transition: all 80ms ease-out;
	}

	button:hover {
		background-color: var(--bg-button-hover);
	}
</style>
