import type { ChatLogEvent, ChatLogMessage, ChatLogMessageWithIndex } from "$lib/types/chatlogs";
import { generateChatLogMessage } from "./ChatLogObjectFactory";

class ChatLogStorage {
    #messages: ChatLogMessage[] = $state([]);

    addMessage(event: ChatLogEvent, replacement = ''): void {
        const message: ChatLogMessage = {
            message: generateChatLogMessage(event, replacement),
            event
        }
        this.#messages.push(message);
    }

    getMessages(): ChatLogMessageWithIndex[] {
        return this.#messages.map((message, index) => ({ ...message, index }));
    }
}

export const ChatLog = new ChatLogStorage();