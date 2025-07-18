<script lang="ts">
	import { fade } from 'svelte/transition';
	import { addResource, resources } from '../resources/Resources.svelte';
	import type { ResourceColor, Resource } from '../types/resources';
	import { useTool } from '$lib/tools/Tools.svelte';

	const {
		resource,
		label,
		color,
		showThreshold
	}: {
		resource: Resource;
		label: string;
		color: ResourceColor;
		showThreshold: Partial<Record<Resource, number>>;
	} = $props();

	function handleClick() {
		addResource(resource, 1);
		useTool('axe');
	}

	const allThresholdsMet = $derived(() =>
		Object.keys(showThreshold).every(
			(key) => showThreshold[key as Resource]! <= ($resources[key as Resource] ?? 0)
		)
	);
</script>

{#if allThresholdsMet()}
	<button class="nes-btn {color}" onclick={handleClick} in:fade out:fade>
		{label}
	</button>
{/if}
