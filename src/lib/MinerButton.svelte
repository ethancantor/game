<script lang="ts">
	import { fade } from 'svelte/transition';
	import { addResource } from './resources/Resources.svelte';
	import type { ButtonColor, Resource } from './types/resources';

	const { resource, label, color }: { resource: Resource; label: string; color: ButtonColor } =
		$props();

	function handleClick() {
		addResource(resource, 1);
	}
</script>

<button class="nes-btn {color}" onclick={handleClick} in:fade out:fade>
	{label}
</button>
