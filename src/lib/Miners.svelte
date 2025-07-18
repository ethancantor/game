<script lang="ts">
	import MinerButton from './MinerButton.svelte';
	import { resourceColors } from './resources/ResourceColors';
	import { resourceLabels } from './resources/ResourceLabels';
	import { resourceThresholds } from './resources/ResourceThresholds';
	import type { Resource } from './types/resources';

	const keys = Object.keys(resourceThresholds) as Resource[];
</script>

<div class="nes-container is-rounded">
	<h2>Actions</h2>
	{#each keys as resource}
		<MinerButton {resource} label={resourceLabels[resource]} color={resourceColors[resource]} />
	{/each}
</div>
