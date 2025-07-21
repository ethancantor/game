import { Achievement } from "$lib/types/achievements";
import type { ToolType } from "$lib/types/tools";
import type { ResourceColor, Resource, ResourceAchievementThreshold } from "../types/resources";

export const possibleResources = ["wood", "stone", "iron", "gold", "diamond"] as const;

export const resourceColors: Record<Resource, ResourceColor> = {
    wood: 'is-success',
    stone: 'is-primary',
    iron: 'is-error',
    gold: 'is-warning',
    diamond: 'is-primary',
};

export const resourceDurability: Record<Resource, number> = {
    wood: 100,
    stone: 200,
    iron: 300,
    gold: 400,
    diamond: 500,
}

export const resourceLabels: Record<Resource, string> = {
    wood: 'Chop Wood',
    stone: 'Mine Stone',
    iron: 'Mine Iron',
    gold: 'Mine Gold',
    diamond: 'Mine Diamond',
};


export const resourceTools: Record<Resource, ToolType> = {
    wood: "axe",
    stone: "pickaxe",
    iron: "pickaxe",
    gold: "pickaxe",
    diamond: "pickaxe",
}

export const resourceAchievementThresholds: Record<Resource, ResourceAchievementThreshold[]> = {
    wood: [{ achievement: Achievement.Collect100Wood, threshold: 100 }],
    stone: [{ achievement: Achievement.Collect100Stone, threshold: 100 }],
    iron: [],
    gold: [],
    diamond: []
}