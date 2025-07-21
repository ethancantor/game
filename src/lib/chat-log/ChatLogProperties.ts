import { ChatLogEvent } from "$lib/types/chatlogs";
import type { ResourceColor } from "$lib/types/resources";

export const chatLogMessages: Record<ChatLogEvent, string> = {
    [ChatLogEvent.AchievementUnlocked]: "Achievement Unlocked: __{achievement}__",
    [ChatLogEvent.MinerHired]: "Miner Hired: __{miner}__",
    [ChatLogEvent.MinerExpired]: "Miner Expired: __{miner}__",
    [ChatLogEvent.ToolCrafted]: "You crafted a __{tool}__",
    [ChatLogEvent.ToolBroken]: "Your __{tool}__ has broken!",
    [ChatLogEvent.ResourceUsed]: "You used __{resource}__."
}

export const chatLogMessageReplace: Record<ChatLogEvent, string> = {
    [ChatLogEvent.AchievementUnlocked]: "{achievement}",
    [ChatLogEvent.MinerHired]: "{miner}",
    [ChatLogEvent.MinerExpired]: "{miner}",
    [ChatLogEvent.ToolCrafted]: "{tool}",
    [ChatLogEvent.ToolBroken]: "{tool}",
    [ChatLogEvent.ResourceUsed]: "{resource}"
}

export const chatLogMessageColors: Record<ChatLogEvent, ResourceColor> = {
    [ChatLogEvent.AchievementUnlocked]: "is-success",
    [ChatLogEvent.MinerHired]: "is-success",
    [ChatLogEvent.MinerExpired]: "is-error",
    [ChatLogEvent.ToolBroken]: "is-error",
    [ChatLogEvent.ResourceUsed]: "is-error",
    [ChatLogEvent.ToolCrafted]: "is-primary"
};