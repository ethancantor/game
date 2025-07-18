import type { Resource } from "./resources";

export type ToolType = "axe" | "pickaxe";

export type Tool = {
    type: ToolType;
    durability: number;
    material: Resource;
}

export const possibleTools: ToolType[] = ["axe", "pickaxe"];


// images found at https://www.svgrepo.com/collection/memory-pixel-interface-icons