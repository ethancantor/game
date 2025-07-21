<script lang="ts">
	import {
		accumulator,
		lastTime,
		MAX_TICK,
		running,
		tick,
		timestep
	} from './GameLoopWritables.svelte';
	import { gameLoopPublisher } from './GameLoopPublisher';

	let lastTick = $state(0);

	function loop(currentTime: number) {
		if (!$running) return;

		const frameTime = currentTime - $lastTime;
		$accumulator = $accumulator + frameTime;
		$lastTime = currentTime;

		while ($accumulator >= timestep) {
			$tick = ($tick + 1) % MAX_TICK;
			$accumulator = $accumulator - timestep;
		}

		requestAnimationFrame(loop);

		// do something at the FPS of the game loop
		if (lastTick !== $tick) {
			gameLoopPublisher.publish();
		}

		lastTick = $tick;
	}

	$effect(() => {
		if ($running) {
			$lastTime = performance.now();
			$accumulator = 0;
			requestAnimationFrame(loop);
		}
	});
</script>
