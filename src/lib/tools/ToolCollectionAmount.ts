import type { ToolType } from "$lib/types/tools";

export const toolCollectionAmount: Record<ToolType | 'hand', number> = {
    axe: 2,
    pickaxe: 1,
    hand: 1,
}