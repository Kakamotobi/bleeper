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
		width: 100%;
		display: flex;
		flex-direction: column;
		background-color: inherit;
	}

	.wrapper {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		overflow-y: auto;
	}

	section :global(h2) {
		margin-bottom: 20px;
	}

	section :global(ul) {
		width: 100%;
	}

	section :global(form) {
		width: 100%;
		height: 35px;
		display: flex;
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
		width: 45px;
		padding-left: 5px;
		flex-grow: 0;
	}

	section :global(form button) {
		width: 12%;
		max-width: 50px;
		min-width: 40px;
		height: inherit;
		background-color: var(--bg-button);
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
		flex-grow: 2;
		gap: 10px;
	}

	.main-section :global(ul li) {
		width: 100%;
		height: 40px;
		margin-bottom: 10px;
	}

	/* Config Section */
	.config-section {
		max-width: 200px;
		height: 100%;
	}

	.config-section :global(ul li) {
		padding-left: 10px;
	}

	.config-section :global(em) {
		padding-left: 10px;
		color: var(--text-tertiary);
	}

	/* Media Queries */
	@media screen and (max-width: 700px) {
		.wrapper {
			width: 100%;
			height: 100%;
			min-height: 250px;
			display: flex;
			flex-direction: column;
		}

		section :global(form #intervalLabel) {
			display: none;
		}

		.config-section {
			max-width: 100%;
		}
	}
</style>
