import type { Achievement } from "./achievements";
import type { AutoMiner } from "./autominer";

export enum ChatLogEvent {
    AchievementUnlocked = "achievement-unlocked",
    MinerHired = "miner-hired",
    MinerExpired = "miner-expired",
}

export interface ChatLogEventBase {
    type: ChatLogEvent;
    message: string;
}

interface MinerEventBase extends ChatLogEventBase {
    miner: AutoMiner;
}

export interface MinerHiredEvent extends MinerEventBase {
    type: ChatLogEvent.MinerHired;
}

export interface MinerExpiredEvent extends MinerEventBase {
    type: ChatLogEvent.MinerExpired;
}

export interface AchievementUnlockedEvent extends ChatLogEventBase {
    type: ChatLogEvent.AchievementUnlocked;
    achievement: Achievement;
}

export type ChatLogInfoType = Partial<{
    achievement: Achievement;
    miner: AutoMiner;
}>;