<script lang="ts">
	import MinerButton from './MinerButton.svelte';
	import type { Resource } from '../types/resources';
	import { toolCollectionAmount } from '$lib/tools/ToolProperties';
	import {
		resourceColors,
		resourceLabels,
		resourceThresholds,
		resourceTools
	} from '$lib/resources/ResourceProperties';
	import { Achievement } from '$lib/types/achievements';

	const keys = Object.keys(resourceThresholds) as Resource[];
</script>

<div class="nes-container is-rounded">
	<h2>Player Actions</h2>
	<div class="button-container">
		<MinerButton
			resource="wood"
			label="Collect Twigs"
			color={resourceColors.wood}
			tool="hand"
			showThreshold={{}}
			amount={toolCollectionAmount.hand}
			achievement={Achievement.CollectTwig}
		/>
		{#each keys as resource}
			<MinerButton
				{resource}
				label={resourceLabels[resource]}
				color={resourceColors[resource]}
				showThreshold={resourceThresholds[resource]}
				amount={toolCollectionAmount[resourceTools[resource]] || toolCollectionAmount.hand}
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
