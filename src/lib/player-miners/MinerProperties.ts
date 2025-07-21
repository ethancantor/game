import { Achievement } from "$lib/types/achievements";
import type { Resource } from "$lib/types/resources";

export const achievementsNeededToUnlockResources: Record<Resource, Achievement[]> = {
    wood: [],
    stone: [Achievement.Collect100Wood],
    iron: [Achievement.Collect100Stone],
    gold: [],
    diamond: []
}