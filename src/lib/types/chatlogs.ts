export enum ChatLogEvent {
    AchievementUnlocked = "achievement-unlocked",
    MinerHired = "miner-hired",
    MinerExpired = "miner-expired",
    ToolBroken = "tool-broken",
    ToolCrafted = "tool-crafted",
    ResourceUsed = "resource-used",
}

export type ChatLogMessage = {
    message: string;
    event: ChatLogEvent;
}

export type ChatLogMessageWithIndex = ChatLogMessage & {
    index: number;
}