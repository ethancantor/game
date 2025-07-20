import type { ChatLogEvent } from "$lib/types/chatlogs";
import { generateChatLogMessage } from "./ChatLogObjectFactory";

class ChatLogStorage {
    #messages: string[] = $state([]);

    addMessage(event: ChatLogEvent, replacement = ''): void {
        this.#messages.push(generateChatLogMessage(event, replacement));
    }

    getMessages(): { message: string; index: number }[] {
        return this.#messages.map((message, index) => ({ message, index }));
    }
}

export const ChatLog = new ChatLogStorage();