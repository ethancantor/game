<script lang="ts">
	import { resourceColors } from '$lib/resources/ResourceColors';
	import type { Tool } from '$lib/types/tools';
	import { toolIcons } from './ToolIcons';

	let { tool }: { tool: Tool } = $props();

	let barColor = $derived(() => {
		if (tool.durability < 20) {
			return 'is-error';
		} else if (tool.durability < 50) {
			return 'is-warning';
		}
		return 'is-success';
	});
</script>

<div class="tool-display is-rounded nes-container {resourceColors[tool.material]}">
	<img src={toolIcons[tool.type]} alt={tool.type} class="tool-icon" />
	<p>Material: {tool.material}</p>
	<progress class="nes-progress {barColor()}" value={tool.durability} max="100"> </progress>
</div>

<style>
	.tool-display {
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 12px;
		gap: 0rem;
	}

	.tool-icon {
		width: 45px;
		height: 45px;
		object-fit: contain;
	}

	.nes-progress {
		width: 100%;
		height: 1rem;
	}

	.nes-container {
		padding-left: 1rem;
		padding-right: 1rem;
		padding-bottom: 0.5rem;
		padding-top: 0rem;
	}
</style>
