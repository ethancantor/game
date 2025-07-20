<script lang="ts">
	import { type Achievement } from '$lib/types/achievements';
	import {
		achievementColors,
		achievementDisplayNames,
		achievementIcon
	} from './AchievementProperties';
	import { Achievements } from './Achievements.svelte';
</script>

{#snippet AchievementsDisplay(achievement: Achievement)}
	<div class="achievement-container">
		<img src={achievementIcon} alt="Achievement Icon" class="achievement-icon" />
		<h3 class="nes-text {achievementColors[achievement]} achievement-text">
			{achievementDisplayNames[achievement]}
		</h3>
	</div>
{/snippet}

<div class="nes-container is-rounded">
	<h2>Achievements</h2>
	<div class="vert-container">
		{#each Achievements.getAchievements() as achievement}
			{@render AchievementsDisplay(achievement)}
		{/each}
	</div>
</div>

<style>
	.vert-container {
		display: flex;
		flex-direction: col;
		gap: 0.5rem;
		flex-wrap: wrap;
		overflow-y: auto;
		max-height: 25vh;
	}

	.achievement-icon {
		width: 32px;
		height: 32px;
	}

	.achievement-text {
		font-size: 12px;
	}

	.achievement-container {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
</style>
