<script>
	import AchievementsDisplay from '$lib/achievements/AchievementsDisplay.svelte';
	import AutoMiners from '$lib/auto-miners/AutoMinersDisplay.svelte';
	import GameLoop from '$lib/GameLoop.svelte';
	import Miners from '$lib/player-miners/Miners.svelte';
	import ResourceDisplay from '$lib/resources/ResourceDisplay.svelte';
	import ToolsDisplay from '$lib/tools/ToolsDisplay.svelte';
</script>

<GameLoop />

<div class="nes-container is-rounded">
	<div class="vert-container">
		<Miners />
		<AutoMiners />
	</div>
	<div class="vert-container">
		<ResourceDisplay />
		<ToolsDisplay />
		<AchievementsDisplay />
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

	.vert-container {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
