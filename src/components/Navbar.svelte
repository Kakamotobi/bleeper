<script>
	import {
		currentTime,
		currentDate,
		currentPage,
		theme,
	} from "@stores/index.js";

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
	<div class="wrapper">
		<div class="time-date-container">
			<div class="time">{$currentTime}</div>
			<div class="date">{$currentDate}</div>
		</div>

		<ul>
			<li
				class={$currentPage === "home" && "is-selected"}
				data-name="home"
				on:click={routeHandler}
				on:keydown={routeHandler}
			>
				<img
					src="assets/icons/HomeIcon.svg"
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
					src="assets/icons/TasksIcon.svg"
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
					src="assets/icons/BleepsIcon.svg"
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
					src="assets/icons/SettingsIcon.svg"
					alt="Settings"
					class={$theme === "dark" && "filter-white"}
				/><span>Settings</span>
			</li>
		</ul>
	</div>

	<button on:click={expandHandler}>
		<img
			src="assets/icons/Arrow.svg"
			alt="Arrow"
			class={$theme === "dark" && "filter-white"}
		/>
	</button>
</nav>

<style>
	nav {
		width: 170px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		background-color: var(--bg-nav);
		transition: width 150ms ease-out;
	}

	nav.is-collapsed {
		width: 70px;
	}

	.wrapper {
		display: flex;
		flex-direction: column;
	}

	.time-date-container {
		height: 65px;
		padding: 11px;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.time {
		font-size: 1.3rem;
		transition: all 250ms ease-out;
	}

	.date {
		max-height: 100%;
		font-size: 0.9rem;
		color: var(--text-secondary);
		overflow: hidden;
		transition: all 120ms ease-out;
	}

	nav.is-collapsed .date {
		max-height: 0;
		opacity: 0;
		visibility: hidden;
	}

	ul {
		width: 100%;
		box-shadow: 0px 0px 7px 0px var(--box-shadow) inset;
	}

	li {
		width: 100%;
		padding: 15px;
		display: flex;
		align-items: center;
		overflow: hidden;
		white-space: nowrap;
		cursor: pointer;
		transition: padding 150ms ease-out, background-color 80ms ease-out;
	}

	nav.is-collapsed li {
		padding-inline: 20px;
	}

	li:hover,
	li.is-selected {
		background-color: var(--bg-nav-hover);
		box-shadow: -5px 0px 5px 0px var(--box-shadow);
		color: var(--text-active);
	}

	nav.is-collapsed li > img {
		transition: all 120ms ease-out;
	}

	li > span {
		margin-left: 15px;
		transition: opacity 120ms ease-out;
	}

	nav.is-collapsed li > span {
		opacity: 0;
		display: none;
	}

	button {
		width: 100%;
		height: 46px;
		position: relative;
		background-color: var(--bg-button);
		border: none;
		cursor: pointer;
		transition: all 80ms ease-out;
	}

	button:hover {
		background-color: var(--bg-button-hover);
	}

	button > img {
		position: absolute;
		right: 15px;
		top: 50%;
		transform: translateY(-50%);
	}

	nav.is-collapsed button > img {
		transform: rotate(180deg) translateY(50%);
	}
</style>
