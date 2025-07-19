<script lang="ts">
	import ToolCrafterButton from './ToolCrafterButton.svelte';
	import ToolDisplay from './ToolDisplay.svelte';
	import { possibleTools } from './ToolProperties';
	import { Tools } from './Tools.svelte';
</script>

<div class="button-container">
	{#each possibleTools as possibleTool}
		{#if Tools.getTool(possibleTool)}
			<ToolDisplay tool={Tools.getTool(possibleTool)!} />
		{:else}
			<ToolCrafterButton toolName={possibleTool} color="is-success" />
		{/if}
	{/each}
</div>

<style>
	.button-container {
		display: flex;
		flex-direction: row;
		gap: 0.5rem;
		flex-wrap: wrap;
	}
</style>
