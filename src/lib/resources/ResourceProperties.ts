import type { ToolType } from "$lib/types/tools";
import type { ResourceColor, Resource } from "../types/resources";

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

export const resourceThresholds: Record<Resource, Partial<Record<Resource, number>>> = {
    wood: {},
    stone: { wood: 5 },
    iron: { stone: 5 },
    gold: { iron: 5 },
    diamond: { gold: 5 },
};


export const resourceTools: Record<Resource, ToolType> = {
    wood: "axe",
    stone: "pickaxe",
    iron: "pickaxe",
    gold: "pickaxe",
    diamond: "pickaxe",
}