<script lang="ts">
	import { fade } from 'svelte/transition';
	import type { ResourceColor, Resource } from '../types/resources';
	import type { ToolType } from '$lib/types/tools';
	import { Tools } from '$lib/tools/Tools.svelte';
	import { Resources } from '$lib/resources/Resources.svelte';
	import { resourceTools } from '$lib/resources/ResourceProperties';
	import type { Achievement } from '$lib/types/achievements';
	import { Achievements } from '$lib/achievements/Achievements.svelte';

	const {
		resource,
		label,
		color,
		showThreshold,
		tool,
		amount,
		achievement
	}: {
		resource: Resource;
		label: string;
		color: ResourceColor;
		tool?: ToolType;
		showThreshold: Partial<Record<Resource, number>>;
		amount: number;
		achievement?: Achievement;
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
		if (achievement) {
			Achievements.addAchievement(achievement);
		}
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
