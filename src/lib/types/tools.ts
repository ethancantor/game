import type { possibleTools } from "$lib/tools/Tools.svelte";
import type { Resource } from "./resources";

export type ToolType = typeof possibleTools[number] | 'hand';

export type Tool = {
    type: ToolType;
    durability: number;
    material: Resource;
}

// images found at https://www.svgrepo.com/collection/memory-pixel-interface-icons