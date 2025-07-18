<script lang="ts">
	import MinerButton from './MinerButton.svelte';
	import { resourceColors } from '../resources/ResourceColors';
	import { resourceLabels } from '../resources/ResourceLabels';
	import { resourceThresholds } from '../resources/ResourceThresholds';
	import type { Resource } from '../types/resources';

	const keys = Object.keys(resourceThresholds) as Resource[];
</script>

<div class="nes-container is-rounded">
	<h2>Actions</h2>
	<div class="button-container">
		{#each keys as resource}
			<MinerButton
				{resource}
				label={resourceLabels[resource]}
				color={resourceColors[resource]}
				showThreshold={resourceThresholds[resource]}
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
