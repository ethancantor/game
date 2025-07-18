import { writable } from "svelte/store";
import type { Tool, ToolType } from "$lib/types/tools";
import type { Resource } from "$lib/types/resources";
import { resourceDurability } from "$lib/resources/ResourceDurability";

export const tools = writable<Tool[]>([
    { type: "axe", material: 'wood', durability: 100 },
]);

export function craftTool(type: ToolType, material: Resource) {
    const newTool: Tool = {
        type,
        material,
        durability: resourceDurability[material]
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