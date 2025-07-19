<script lang="ts">
	import type { Resource } from '$lib/types/resources';
	import { resourceColors } from './ResourceProperties';
	import { Resources } from './Resources.svelte';
</script>

<div class="nes-container is-rounded">
	<h2>Resources</h2>
	<ul class="nes-list is-disc">
		{#each Object.entries(Resources.getResources()) as [name, amount]}
			<li>{name}: <span class="nes-text {resourceColors[name as Resource]}">{amount}</span></li>
		{/each}
	</ul>
</div>
