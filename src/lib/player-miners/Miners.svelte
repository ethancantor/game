<script lang="ts">
	import MinerButton from './MinerButton.svelte';
	import type { Resource } from '../types/resources';
	import { toolCollectionAmount } from '$lib/tools/ToolProperties';
	import {
		possibleResources,
		resourceColors,
		resourceLabels,
		resourceTools
	} from '$lib/resources/ResourceProperties';
	import { Achievement } from '$lib/types/achievements';
	import { achievementsNeededToUnlockResources } from './MinerProperties';
</script>

<div class="nes-container is-rounded">
	<h2>Player Actions</h2>
	<div class="button-container">
		<MinerButton
			resource="wood"
			label="Collect Twigs"
			color={resourceColors.wood}
			tool="hand"
			amount={toolCollectionAmount.hand}
			achievement={Achievement.CollectTwig}
		/>
		{#each possibleResources as resource}
			<MinerButton
				{resource}
				label={resourceLabels[resource]}
				color={resourceColors[resource]}
				amount={toolCollectionAmount[resourceTools[resource]] || toolCollectionAmount.hand}
				achievement={resource === 'wood' ? Achievement.ChoppedFirstTree : undefined}
				achievementNeededs={achievementsNeededToUnlockResources[resource]}
			/>
		{/each}
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
