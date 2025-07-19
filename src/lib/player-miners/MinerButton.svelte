<script lang="ts">
	import { fade } from 'svelte/transition';
	import type { ResourceColor, Resource } from '../types/resources';
	import type { ToolType } from '$lib/types/tools';
	import { Tools } from '$lib/tools/Tools.svelte';
	import { Resources } from '$lib/resources/Resources.svelte';
	import { resourceTools } from '$lib/resources/ResourceProperties';

	const {
		resource,
		label,
		color,
		showThreshold,
		tool,
		amount
	}: {
		resource: Resource;
		label: string;
		color: ResourceColor;
		tool?: ToolType;
		showThreshold: Partial<Record<Resource, number>>;
		amount: number;
	} = $props();

	const toolToMine = tool || resourceTools[resource];

	let allThresholdsMet = $derived(() =>
		Object.keys(showThreshold).every(
			(key) => showThreshold[key as Resource]! <= (Resources.getResources()[key as Resource] ?? 0)
		)
	);

	function handleClick() {
		if (!Tools.hasTool(toolToMine)) {
			return;
		}
		Tools.useTool(toolToMine);
		Resources.addResource(resource, amount);
	}
</script>

{#if allThresholdsMet() && Tools.hasTool(toolToMine)}
	<button
		class="nes-btn {!Tools.hasTool(toolToMine) ? 'is-disabled' : color}"
		onclick={handleClick}
		in:fade
		out:fade
		disabled={!Tools.hasTool(toolToMine)}
	>
		{label}
	</button>
{/if}
