import { possibleResources, Resources } from "$lib/resources/Resources.svelte";
import type { FullResourceStore, Resource } from "$lib/types/resources";
import type { ToolType } from "$lib/types/tools";
import { combineNumericObjects } from "$lib/utils/utils";
import { Tools } from "./Tools.svelte";

export class ToolCrafterClass {
    private toolHeadResourceRequirements: FullResourceStore = {
        wood: 5,
        stone: 10,
        iron: 20,
        gold: 30,
        diamond: 50,
    }

    private toolRodRequirements: FullResourceStore = {
        wood: 2,
        stone: 5,
        iron: 10,
        gold: 15,
        diamond: 20,
    }

    public craftBestTool(toolType: ToolType) {
        const bestResource = this.getBestAvailableResource();
        if (bestResource) {
            return Tools.craftTool(toolType, bestResource);
        }
    }

    public getBestAvailableResource(): Resource | undefined {
        const toolMaterials: Resource[] = possibleResources.toReversed();
        for (const material of toolMaterials) {
            if (this.canCraftTool(material)) {
                return material;
            }
        }
    }

    public getToolRequirements(material: Resource) {
        const toolHeadRequirements = { [material]: this.toolHeadResourceRequirements[material] };
        const toolRodRequirement = { wood: this.toolRodRequirements[material] };

        return combineNumericObjects([toolHeadRequirements, toolRodRequirement]);

    }

    public canCraftTool(material: Resource): boolean {
        const requirements = this.getToolRequirements(material);
        return Object.entries(requirements).every(([resource, amount]) => (Resources.getResource(resource as Resource) || 0) >= amount);
    }

    public canCraftAnyTool(): boolean {
        return possibleResources.some(material => this.canCraftTool(material as Resource));
    }

}

export const ToolCrafter = new ToolCrafterClass();