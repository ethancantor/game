import { writable } from "svelte/store";
import type { Tool, ToolType } from "$lib/types/tools";
import type { Resource } from "$lib/types/resources";
import { resourceDurability } from "$lib/resources/ResourceDurability";
import { canCraftTool, getToolRequirements } from "./ToolRequirements";
import { useResource } from "$lib/resources/Resources.svelte";

export const possibleTools = ["axe", "pickaxe"] as const;

export const tools = writable<Tool[]>([]);

export function craftTool(type: ToolType, material: Resource) {
    const newTool: Tool = {
        type,
        material,
        durability: resourceDurability[material]
    }

    if (!canCraftTool(material)) {
        throw new Error(`Cannot craft ${type} with ${material}`);
    }
    const cost = getToolRequirements(material);
    for (const [resource, amount] of Object.entries(cost)) {
        useResource(resource as Resource, amount);
    }

    tools.update((currentTools) => [...currentTools, newTool]);
}

export function useTool(toolType: ToolType) {
    tools.update((currentTools) => {
        const index = currentTools.findIndex(t => t.type === toolType);
        if (index !== -1) {
            if (currentTools[index].durability <= 10) {
                currentTools.splice(index, 1);
            } else {
                currentTools[index].durability -= 10;
            }
        }

        return currentTools;
    });
}
