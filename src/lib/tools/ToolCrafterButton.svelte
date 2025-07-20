<script lang="ts">
	import { Achievements } from '$lib/achievements/Achievements.svelte';
	import { Achievement } from '$lib/types/achievements';
	import type { ResourceColor } from '$lib/types/resources';
	import type { ToolType } from '$lib/types/tools';
	import { ToolCrafter } from './ToolCrafter.';
	import { toolIcons } from './ToolProperties';

	const { toolName, color }: { toolName: ToolType; color: ResourceColor } = $props();

	function handleClick() {
		const didCraft = ToolCrafter.craftBestTool(toolName);
		if (didCraft) {
			Achievements.addAchievement(Achievement.CraftedFirstTool);
		}
	}

	let disabled = $derived(() => !ToolCrafter.getBestAvailableResource());
</script>

<button
	class="nes-btn {disabled() ? 'is-disabled' : color}"
	type="button"
	onclick={handleClick}
	disabled={disabled()}
>
	<img src={toolIcons[toolName]} alt={toolName} class="tool-icon" />
	<span class="tool-label">Craft {toolName}</span>
	<span class="tool-sub-label">{ToolCrafter.getBestAvailableResource()}</span>
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

	.tool-sub-label {
		font-size: 10px;
		color: var(--color-text-secondary);
	}
</style>
