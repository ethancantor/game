<script>
	import GameLoop from '$lib/GameLoop.svelte';
	import Miners from '$lib/miners/Miners.svelte';
	import ResourceDisplay from '$lib/resources/ResourceDisplay.svelte';
	import ToolsDisplay from '$lib/tools/ToolsDisplay.svelte';
</script>

<GameLoop />

<div class="nes-container is-rounded">
	<Miners />
	<div class="status-container">
		<ResourceDisplay />
		<ToolsDisplay />
	</div>
</div>

<style>
	.nes-container {
		margin: 1rem;
		padding: 1rem;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.status-container {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
