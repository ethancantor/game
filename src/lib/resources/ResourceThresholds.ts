import type { Resource } from "../types/resources";

export const resourceThresholds: Record<Resource, Partial<Record<Resource, number>>> = {
    wood: { stone: 10, iron: 20, gold: 30, diamond: 40 },
    stone: { iron: 20, gold: 30, diamond: 40 },
    iron: { gold: 30, diamond: 40 },
    gold: { diamond: 40 },
    diamond: {},
};
