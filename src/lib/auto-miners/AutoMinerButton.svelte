<script lang="ts">
	import { fade } from 'svelte/transition';
	import type { AutoMiner } from '$lib/types/autominer';
	import { autoMinerColors, autoMinerLabels } from './AutoMinerProperties';
	import { AutoMiners } from './AutoMiners.svelte';

	const {
		job
	}: {
		job: AutoMiner;
	} = $props();

	function handleClick() {
		AutoMiners.hireMiner(job, 1);
	}
</script>

<button
	class="nes-btn {autoMinerColors[job]}"
	onclick={handleClick}
	in:fade
	out:fade
	disabled={false}
>
	Hire {autoMinerLabels[job]}
</button>
