<script>
	export let contentType;
</script>

<section
	class={contentType === "main-section" ? "main-section" : "config-section"}
>
	<slot name="title" />

	<slot name="content">
		{#if contentType === "main"}
			<b>There is nothing!</b>
		{/if}
	</slot>

	<slot name="form" />
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

	/* Main Section */
	.main-section {
		min-width: 350px;
		flex-grow: 1;
	}

	.main-section :global(ul) {
		flex-grow: 1;
		overflow: auto;
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
		min-width: 300px;
	}

	.config-section :global(ul) {
		padding-left: 25px;
	}
</style>
