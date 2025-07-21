
import { Achievements } from "$lib/achievements/Achievements.svelte";
import { ChatLog } from "$lib/chat-log/ChatLog.svelte";
import { ChatLogEvent } from "$lib/types/chatlogs";
import type { Resource } from "../types/resources";
import { resourceAchievementThresholds } from "./ResourceProperties";

class ResourceStorage {
    #resources: Partial<Record<Resource, number>> = $state({})

    addResource(resource: Resource, amount: number) {
        const currentAmount = this.#resources[resource] || 0;
        this.#resources[resource] = currentAmount + amount;

        const thresholds = resourceAchievementThresholds[resource];
        thresholds.forEach(({ achievement, threshold }) => {
            if (this.#resources[resource] && this.#resources[resource] >= threshold) {
                Achievements.unlockAchievement(achievement);
            }
        });
    }

    useResource(resource: Resource, amount: number) {
        const currentAmount = this.#resources[resource] || 0;
        if (currentAmount < amount) {
            throw new Error(`Not enough ${resource} available`);
        }
        this.#resources[resource] = currentAmount - amount;

        ChatLog.addMessage(ChatLogEvent.ResourceUsed, `${amount} ${resource}`);
    }

    getResources() {
        return this.#resources;
    }

    getResource(resource: Resource): number {
        return this.#resources[resource] || 0;
    }
}

export const Resources = new ResourceStorage();