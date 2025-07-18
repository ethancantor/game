import type { ButtonColor, Resource } from "../types/resources";

export const resourceColors: Record<Resource, ButtonColor> = {
    wood: 'is-success',
    stone: 'is-primary',
    iron: 'is-error',
    gold: 'is-warning',
    diamond: 'is-primary',
};
