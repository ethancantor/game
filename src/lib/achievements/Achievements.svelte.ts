import { Achievement } from "$lib/types/achievements";


class AchievementStorage {
    #achievements: Achievement[] = $state([Achievement.CollectTwig

    ]);

    getAchievements(): Achievement[] {
        return this.#achievements;
    }

    hasAchievement(id: Achievement): boolean {
        return this.#achievements.some(achievement => achievement === id);
    }
}

export const Achievements = new AchievementStorage();