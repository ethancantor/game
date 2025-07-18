<script>
	import GameLoop from '$lib/GameLoop.svelte';
	import Miners from '$lib/Miners.svelte';
	import ResourceDisplay from '$lib/resources/ResourceDisplay.svelte';
</script>

<GameLoop />

<div class="nes-container is-rounded">
	<Miners />
	<ResourceDisplay />
</div>

<style>
	.nes-container {
		margin: 1rem;
		padding: 1rem;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
</style>
