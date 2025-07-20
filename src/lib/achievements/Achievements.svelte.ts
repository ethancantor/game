import { ChatLog } from "$lib/chat-log/ChatLog.svelte";
import { Achievement } from "$lib/types/achievements";
import { ChatLogEvent } from "$lib/types/chatlogs";
import { achievementDisplayNames } from "./AchievementProperties";


class AchievementStorage {
    #achievements: Achievement[] = $state([]);

    getAchievements(): Achievement[] {
        return this.#achievements;
    }

    addAchievement(achievement: Achievement): void {
        if (!this.hasAchievement(achievement)) {
            ChatLog.addMessage(ChatLogEvent.AchievementUnlocked, achievementDisplayNames[achievement]);
            this.#achievements.push(achievement);
        }
    }

    hasAchievement(achievement: Achievement): boolean {
        return this.#achievements.some(a => a === achievement);
    }
}

export const Achievements = new AchievementStorage();