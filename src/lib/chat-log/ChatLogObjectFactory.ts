import { ChatLogEvent } from "$lib/types/chatlogs";
import { chatLogMessageReplace, chatLogMessages } from "./ChatLogProperties";

export function generateChatLogMessage(event: ChatLogEvent, replacement: string = ''): string {
    return chatLogMessages[event].replaceAll(chatLogMessageReplace[event] || '', replacement);
}
