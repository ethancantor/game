<script lang="ts">
	import type { ResourceColor } from '$lib/types/resources';
	import type { Tool, ToolType } from '$lib/types/tools';
	import { toolIcons } from './ToolIcons';

	const { toolName, color }: { toolName: ToolType; color: ResourceColor } = $props();
</script>

<button class="nes-btn {color}" type="button">
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
