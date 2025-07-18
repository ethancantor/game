<script lang="ts">
	import { possibleResources, resources } from '$lib/resources/Resources.svelte';
	import type { Resource, ResourceColor } from '$lib/types/resources';
	import type { ToolType } from '$lib/types/tools';
	import { craftBestTool } from './ToolCrafter';
	import { toolIcons } from './ToolIcons';
	import { canCraftAnyTool, canCraftTool, getToolRequirements } from './ToolRequirements';

	const { toolName, color }: { toolName: ToolType; color: ResourceColor } = $props();

	function handleClick() {
		craftBestTool(toolName);
	}

	let disabled = $derived(
		() =>
			!possibleResources.some((material) =>
				Object.entries(getToolRequirements(material as Resource)).every(
					([resource, amount]) => ($resources[resource as Resource] || 0) >= amount
				)
			)
	);
</script>

<button
	class="nes-btn {disabled() ? 'is-disabled' : color}"
	type="button"
	onclick={handleClick}
	disabled={disabled()}
>
	<img src={toolIcons[toolName]} alt={toolName} class="tool-icon" />
	<span class="tool-label">Craft {toolName}</span>
</button>

<style>
	.nes-btn {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.tool-icon {
		width: 45px;
		height: 45px;
		object-fit: contain;
	}

	.tool-label {
		margin-left: 0.5rem;
		font-size: 12px;
	}
</style>
