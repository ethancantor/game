<script lang="ts">
	import AutoMinerButton from './AutoMinerButton.svelte';
</script>

<div class="nes-container is-rounded">
	<h2>Auto Actions</h2>
	<div class="button-container">
		<AutoMinerButton job="woodcutter" />
		<AutoMinerButton job="stonemason" />
		<AutoMinerButton job="ironminer" />
		<AutoMinerButton job="goldminer" />
		<AutoMinerButton job="diamondminer" />
	</div>
</div>

<style>
	.button-container {
		display: flex;
		flex-direction: row;
		gap: 0.5rem;
		flex-wrap: wrap;
	}

	.nes-container {
		height: fit-content !important;
		max-width: 50vw;
	}
</style>
