import { ChatLogEvent } from "$lib/types/chatlogs";


export const chatLogMessages: Record<ChatLogEvent, string> = {
    [ChatLogEvent.AchievementUnlocked]: "Achievement Unlocked: {achievement}",
    [ChatLogEvent.MinerHired]: "Miner Hired: {miner}",
    [ChatLogEvent.MinerExpired]: "Miner Expired: {miner}",
}

export const chatLogMessageReplace: Record<ChatLogEvent, string> = {
    [ChatLogEvent.AchievementUnlocked]: "{achievement}",
    [ChatLogEvent.MinerHired]: "{miner}",
    [ChatLogEvent.MinerExpired]: "{miner}",
}