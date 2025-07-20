import { Achievement } from "$lib/types/achievements";
import type { ResourceColor } from "$lib/types/resources";

export const achievementIcon = "/crown.svg";

export const achievementColors: Record<Achievement, ResourceColor> = {
    [Achievement.CollectTwig]: "is-success",
    [Achievement.CraftedFirstTool]: "is-success"
}

export const achievementDisplayNames: Record<Achievement, string> = {
    [Achievement.CollectTwig]: "Collect a Twig",
    [Achievement.CraftedFirstTool]: "Craft your first tool"
}