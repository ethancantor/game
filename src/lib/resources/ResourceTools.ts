import type { Resource } from "$lib/types/resources";
import type { ToolType } from "$lib/types/tools";


export const resourceTools: Record<Resource, ToolType> = {
    wood: "axe",
    stone: "pickaxe",
    iron: "pickaxe",
    gold: "pickaxe",
    diamond: "pickaxe",
}