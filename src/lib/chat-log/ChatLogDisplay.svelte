<script lang="ts">
	import { fade } from 'svelte/transition';
	import { ChatLog } from './ChatLog.svelte';
	import { flip } from 'svelte/animate';
</script>

<div class="nes-container is-dark with-title is-rounded">
	<p class="title">Chat Log</p>
	<div class="chat-log-display">
		{#each ChatLog.getMessages().slice(-30) as message (message.index)}
			<div class="chat-log-message" animate:flip in:fade>{message.message}</div>
		{/each}
	</div>
</div>

<style>
	.nes-container {
		padding: 1rem !important;
		width: 25vw;
		margin-left: auto;
	}

	.title {
		font-size: 0.8rem !important;
		padding-bottom: 0rem !important;
	}

	.chat-log-display {
		height: 14vh;
		width: 100%;
		text-wrap: wrap;
		max-height: 14vh;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		font-size: 0.4rem;
		justify-content: flex-end;
		margin-top: -0.5rem;
	}
</style>
