<div class="Page">
	<slot />
</div>

<style>
	.Page {
		width: 100%;
		height: 100%;
		padding: 30px;
		display: flex;
		gap: 30px;
	}

	@media screen and (max-width: 712px) {
		.Page {
			flex-direction: column;
			gap: 50px;
			overflow: auto;
		}
	}
</style>
