<script>
	export let contentType;
</script>

<section
	class={contentType === "main-section" ? "main-section" : "config-section"}
>
	<div class="wrapper">
		<slot name="title" />

		<slot name="content">
			{#if contentType === "main-section"}
				<b>Empty!</b>
			{/if}
		</slot>
	</div>

	<slot name="form" />

	<slot name="info" />
</section>

<style>
	section {
		min-width: 350px;
		height: 100%;
		display: flex;
		flex-direction: column;
		position: relative;
		background-color: inherit;
	}

	.wrapper {
		height: 100%;
		display: flex;
		flex-direction: column;
		overflow: auto;
	}

	section :global(h2) {
		margin-bottom: 20px;
	}

	section :global(form) {
		width: 100%;
		height: 35px;
		display: flex;
		position: sticky;
	}

	section :global(form input) {
		transition: all 80ms ease-in-out;
	}

	section :global(form input[type="text"]) {
		height: inherit;
		padding-inline: 10px;
		flex-grow: 1;
		border-top-left-radius: 3px;
		border-bottom-left-radius: 3px;
		font-size: 1rem;
	}

	section :global(form #intervalWrapper) {
		display: flex;
	}

	section :global(form #intervalLabel) {
		padding-inline: 10px;
		display: flex;
		align-items: center;
		background-color: var(--bg-input);
		transition: all 80ms ease-in-out;
	}

	section :global(form input[type="number"]) {
		width: 55px;
		padding-left: 10px;
		flex-grow: 0;
	}

	section :global(form button) {
		width: 12%;
		max-width: 50px;
		height: inherit;
		background-color: var(--bg-button);
		/* background-color: rgb(238, 238, 238); */
		border: none;
		border-top-right-radius: 3px;
		border-bottom-right-radius: 3px;
		font-size: 0.9rem;
		transition: all 80ms ease-in-out;
	}

	section :global(form input[type="text"]:hover),
	section :global(form input[type="text"]:focus),
	section :global(form #intervalWrapper:hover > #intervalLabel),
	section :global(form #intervalWrapper:hover > #interval),
	section :global(form #interval:focus) {
		background-color: var(--bg-input-hover);
	}

	section :global(form button):hover {
		background-color: var(--bg-button-hover);
	}

	/* Main Section */
	.main-section {
		min-width: 350px;
		flex-grow: 1;
	}

	.main-section :global(ul) {
		flex-grow: 1;
	}

	.main-section :global(ul li) {
		height: 40px;
		margin-bottom: 10px;
		padding-inline: 10px;
	}

	/* Config Section */
	.config-section {
		width: 100px;
	}

	.config-section :global(ul) {
		padding-left: 25px;
	}

	.config-section :global(em) {
		padding-left: 25px;
		color: var(--text-secondary);
	}
</style>
