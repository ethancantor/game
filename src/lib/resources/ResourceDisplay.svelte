<script>
	import { resources } from './Resources.svelte';
</script>

<div class="nes-container is-rounded">
	<h2>Resources</h2>
	<ul class="nes-list is-disc">
		{#each Object.entries($resources) as [name, amount]}
			<li>{name}: {amount}</li>
		{/each}
	</ul>
</div>
