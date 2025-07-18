import type { Resource } from "$lib/types/resources";
import type { Tool } from "$lib/types/tools";

const toolHeadResourceRequirements: Record<Resource, number> = {
    wood: 5,
    stone: 10,
    iron: 20,
    gold: 30,
    diamond: 50,
}

export function getToolRequirements(tool: Tool) {
    const toolHeadRequirements = { [tool.material]: toolHeadResourceRequirements[tool.material] };
    const toolRodRequirement = { wood: tool.material === "wood" ? 2 : 5 };
    return { ...toolHeadRequirements, ...toolRodRequirement };
}

