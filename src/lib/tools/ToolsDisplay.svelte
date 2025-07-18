<script lang="ts">
	import ToolCrafterButton from './ToolCrafterButton.svelte';
	import ToolDisplay from './ToolDisplay.svelte';
	import { tools } from './Tools.svelte';
	import { possibleTools } from './Tools.svelte';

	let allTools = $derived(
		possibleTools.map((tool) => ({ foundTool: $tools.find((t) => t.type === tool), tool }))
	);
</script>

<div class="nes-container is-rounded">
	<h2>Tools</h2>
	<div class="button-container">
		{#each allTools as tool}
			{#if tool.foundTool}
				<ToolDisplay tool={tool.foundTool} />
			{:else}
				<ToolCrafterButton toolName={tool.tool} color={'is-success'} />
			{/if}
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
</style>
