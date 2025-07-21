import { Achievement } from "$lib/types/achievements";
import type { ToolType } from "$lib/types/tools";

export const possibleTools = ["axe", "pickaxe"] as const;

export const toolIcons = {
    axe: "/axe.svg",
    pickaxe: "/pickaxe.svg",
    battleaxe: "/battleaxe.svg",
    hand: ''
}

export const toolCollectionAmount: Record<ToolType, number> = {
    axe: 2,
    pickaxe: 1,
    hand: 1,
}


export const achievementsNeededToUnlock: Record<ToolType, Achievement[]> = {
    axe: [Achievement.CollectTwig],
    pickaxe: [Achievement.CraftedFirstAxe, Achievement.ChoppedFirstTree, Achievement.Collect100Wood],
    hand: []
}