import type { Tool, ToolType } from "$lib/types/tools";
import type { Resource } from "$lib/types/resources";
import { resourceDurability } from "$lib/resources/ResourceDurability";
import { ToolCrafter } from "./ToolCrafter.";
import { Resources } from "$lib/resources/Resources.svelte";


export const possibleTools = ["axe", "pickaxe"] as const;

class ToolCollection {
    #toolList: Tool[] = $state([]);

    public craftTool(type: ToolType, material: Resource) {
        const newTool: Tool = {
            type,
            material,
            durability: resourceDurability[material]
        }

        if (!ToolCrafter.canCraftTool(material)) {
            throw new Error(`Cannot craft ${type} with ${material}`);
        }
        const cost = ToolCrafter.getToolRequirements(material);
        for (const [resource, amount] of Object.entries(cost)) {
            Resources.useResource(resource as Resource, amount);
        }

        this.#toolList = [...this.#toolList, newTool];
    }

    public useTool(toolType: ToolType) {
        if (toolType === 'hand') {
            return; // Hand tools don't have durability
        }

        const foundTool = this.getTool(toolType);
        if (!foundTool) {
            throw new Error(`Tool of type ${toolType} not found`);
        }

        if (foundTool.durability <= 10) {
            this.#toolList = this.#toolList.filter(tool => tool.type !== toolType);
            return;
        }

        this.#toolList = this.#toolList.map(tool => {
            if (tool.type === toolType) {
                return { ...tool, durability: tool.durability - 10 };
            }
            return tool;
        });
    }

    public hasTool(toolType: ToolType): boolean {
        return toolType === 'hand' || this.#toolList.some(tool => tool.type === toolType);
    }

    public getTool(toolType: ToolType): Tool | undefined {
        return this.#toolList.find(tool => tool.type === toolType);
    }

    public getAllTools(): Tool[] {
        return this.#toolList;
    }
}

export const Tools = new ToolCollection();