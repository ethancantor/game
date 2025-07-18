import type { Resource } from "../types/resources";

export const resourceThresholds: Record<Resource, Partial<Record<Resource, number>>> = {
    wood: {},
    stone: { wood: 5 },
    iron: { stone: 5 },
    gold: { iron: 5 },
    diamond: { gold: 5 },
};
