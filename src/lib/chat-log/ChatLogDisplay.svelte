<script lang="ts">
	import { fade } from 'svelte/transition';
	import { ChatLog } from './ChatLog.svelte';
	import { flip } from 'svelte/animate';
	import { ChatLogEvent } from '$lib/types/chatlogs';
	import { chatLogMessageColors } from './ChatLogProperties';
</script>

{#snippet chatLogMessage(message: string, chatLogEvent: ChatLogEvent)}
	{#each message.split('__') as msg, index (index)}
		{#if index === 1}
			<span class="nes-text {chatLogMessageColors[chatLogEvent]}">{msg}</span>
		{:else}
			<span class="nes-text">{msg}</span>
		{/if}
	{/each}
{/snippet}

<div class="nes-container is-dark with-title is-rounded">
	<p class="title">Chat Log</p>
	<div class="chat-log-display">
		{#each ChatLog.getMessages().slice(-30) as message (message.index)}
			<div class="chat-log-message" animate:flip in:fade>
				{@render chatLogMessage(message.message, message.event)}
			</div>
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
