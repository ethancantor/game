<script lang="ts">
	import { fade } from 'svelte/transition';
	import { addResource, resources } from '../resources/Resources.svelte';
	import type { ResourceColor, Resource } from '../types/resources';
	import { tools, useTool } from '$lib/tools/Tools.svelte';
	import { resourceTools } from '$lib/resources/ResourceTools';
	import type { ToolType } from '$lib/types/tools';

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
			(key) => showThreshold[key as Resource]! <= ($resources[key as Resource] ?? 0)
		)
	);

	let hasTool = $derived(
		() => toolToMine === 'hand' || $tools.some((tool) => tool.type === toolToMine)
	);

	function handleClick() {
		if (!hasTool()) {
			return;
		}
		addResource(resource, amount);
		useTool(toolToMine);
	}
</script>

{#if allThresholdsMet() && hasTool()}
	<button
		class="nes-btn {!hasTool() ? 'is-disabled' : color}"
		onclick={handleClick}
		in:fade
		out:fade
		disabled={!hasTool()}
	>
		{label}
	</button>
{/if}
