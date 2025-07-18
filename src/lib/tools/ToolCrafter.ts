import { possibleResources } from "$lib/resources/Resources.svelte";
import type { Resource } from "$lib/types/resources";
import type { ToolType } from "$lib/types/tools";
import { canCraftTool } from "./ToolRequirements";
import { craftTool } from "./Tools.svelte";

export function craftBestTool(toolType: ToolType) {
    const toolMaterials: Resource[] = possibleResources.toReversed();
    for (const material of toolMaterials) {
        if (canCraftTool(material)) {
            return craftTool(toolType, material);
        }
    }
}