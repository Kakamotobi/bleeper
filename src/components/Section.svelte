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
	}

	section :global(h2) {
		margin-bottom: 20px;
	}

	.wrapper {
		height: 100%;
		display: flex;
		flex-direction: column;
		overflow: auto;
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

	.main-section :global(form) {
		width: 100%;
		height: 35px;
		display: flex;
		position: sticky;
	}

	.main-section :global(form input) {
		height: inherit;
		flex-grow: 1;
		background-color: #f9f9f9;
		font-size: 1rem;
	}

	.main-section :global(form .bleep-interval-input) {
		flex-grow: 0;
		width: 60px;
	}

	.main-section :global(form button) {
		width: 12%;
		max-width: 50px;
		height: inherit;
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
		color: rgb(184, 184, 184);
	}
</style>
