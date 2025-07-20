import type { ChatLogEventBase } from "$lib/types/chatlogs";


class ChatLogStorage {
    #messages: string[] = $state([]);

    addMessage(event: ChatLogEventBase): void {
        this.#messages.push(event.message);
    }

    getMessages(): string[] {
        return this.#messages;
    }
}

export const ChatLog = new ChatLogStorage();