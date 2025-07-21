
class GameLoopPublisher {
    private subscribers: Set<() => void> = new Set();

    public subscribe(callback: () => void): () => void {
        this.subscribers.add(callback);
        return () => this.subscribers.delete(callback);
    }

    public publish(): void {
        console.log("Game loop tick published");
        this.subscribers.forEach(callback => callback());
    }
}

export const gameLoopPublisher = new GameLoopPublisher();