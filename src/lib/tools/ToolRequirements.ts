import type { Resource } from "$lib/types/resources";

import { possibleResources, resources } from "$lib/resources/Resources.svelte";
import { get } from "svelte/store";
import { combineNumericObjects } from "$lib/utils/utils";

const toolHeadResourceRequirements: Record<Resource, number> = {
    wood: 5,
    stone: 10,
    iron: 20,
    gold: 30,
    diamond: 50,
}

export function getToolRequirements(material: Resource) {
    const toolHeadRequirements = { [material]: toolHeadResourceRequirements[material] };
    const toolRodRequirement = { wood: material === "wood" ? 2 : 5 };

    return combineNumericObjects([toolHeadRequirements, toolRodRequirement]);

}

export function canCraftTool(material: Resource): boolean {
    const requirements = getToolRequirements(material);
    return Object.entries(requirements).every(([resource, amount]) => (get(resources)[resource as Resource] || 0) >= amount);
}

export function canCraftAnyTool(): boolean {
    return possibleResources.some(material => canCraftTool(material as Resource));
}

