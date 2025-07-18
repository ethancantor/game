<script lang="ts">
	import {
		accumulator,
		lastTime,
		MAX_TICK,
		running,
		tick,
		timestep
	} from '$lib/GameLoopWritables.svelte';

	function loop(currentTime: number) {
		if (!$running) return;

		const frameTime = currentTime - $lastTime;
		$accumulator = $accumulator + frameTime;
		$lastTime = currentTime;

		while ($accumulator >= timestep) {
			$tick = ($tick + 1) % MAX_TICK; // update logic
			$accumulator = $accumulator - timestep;
		}

		requestAnimationFrame(loop);
	}

	$effect(() => {
		if ($running) {
			$lastTime = performance.now();
			$accumulator = 0;
			requestAnimationFrame(loop);
		}
	});
</script>
