import type { ToolType } from "$lib/types/tools";

export const toolIcons = {
    axe: "/tools/axe.svg",
    pickaxe: "/tools/pickaxe.svg",
    battleaxe: "/tools/battleaxe.svg",
    hand: ''
}


export const toolCollectionAmount: Record<ToolType, number> = {
    axe: 2,
    pickaxe: 1,
    hand: 1,
}

export const possibleTools = ["axe", "pickaxe"] as const;