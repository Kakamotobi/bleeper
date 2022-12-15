<script>
	export let contentType;
</script>

<section
	class={contentType === "main-section" ? "main-section" : "config-section"}
>
	<div class="wrapper">
		<slot name="title" />

		<slot name="buttons" />

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
		margin-bottom: 15px;
	}

	section :global(.buttons-container) {
		margin-bottom: 10px;
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

	section :global(form input[type="text"]:hover),
	section :global(form input[type="text"]:focus),
	section :global(form input[type="number"]:hover),
	section :global(form input[type="number"]:focus) {
		background-color: var(--bg-input-hover);
	}

	section :global(form #number-input-container) {
		display: flex;
	}

	section :global(form #interval-label) {
		padding-inline: 5px;
		display: flex;
		align-items: center;
		background-color: var(--bg-input);
		transition: all 80ms ease-in-out;
	}

	section :global(form input[type="number"]) {
		width: 38px;
		height: inherit;
		padding-right: 8px;
		flex-grow: 0;
		text-align: right;
	}

	section :global(form input[type="number"]::-webkit-inner-spin-button),
	section :global(form input[type="number"]::-webkit-outer-spin-button) {
		appearance: none;
	}

	section :global(form .number-input-btns) {
		width: 15px;
		height: inherit;
		display: flex;
		flex-direction: column;
	}

	section :global(form .number-input-btns .number-input-btn) {
		width: inherit;
		height: 50%;
		min-width: 0;
		background-color: var(--bg-input-button);
		border-radius: 0;
		text-align: center;
		transition: all 80ms ease-in-out;
	}

	section :global(form .number-input-btn:hover) {
		background-color: var(--bg-input-button-hover);
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
		max-width: 210px;
		height: 100%;
	}

	.config-section :global(ul li) {
		padding-left: 10px;
	}

	.config-section :global(em) {
		padding-left: 10px;
		color: var(--text-tertiary);
	}

	.config-section :global(.main-option) {
		margin-bottom: 15px;
	}

	.config-section :global(.main-option-wrapper) {
		margin-bottom: 5px;
		display: flex;
		align-items: center;
	}

	.config-section :global(.checkbox-and-label) {
		margin-right: 8px;
		display: flex;
		align-items: center;
	}

	.config-section :global(.checkbox-and-label input[type="checkbox"]) {
		width: 15px;
		height: 15px;
	}

	.config-section :global(.checkbox-and-label input[type="checkbox"]::before) {
		width: 10px;
		height: 10px;
	}

	.config-section :global(.checkbox-and-label > span) {
		margin-left: 5px;
	}

	.config-section :global(.sub-option) {
		padding-left: 20px;
		display: flex;
		gap: 5px;
	}

	/* Media Queries */
	@media screen and (max-width: 780px) {
		.config-section :global(.sub-option) {
			flex-direction: column;
			gap: 0;
		}
	}

	@media screen and (max-width: 712px) {
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

		.config-section :global(.sub-option) {
			flex-direction: row;
			gap: 5px;
		}
	}
</style>
