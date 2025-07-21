import { Achievement } from "$lib/types/achievements";
import type { ResourceColor } from "$lib/types/resources";

export const achievementIcon = "/crown.svg";

export const achievementColors: Record<Achievement, ResourceColor> = {
    [Achievement.CollectTwig]: "is-success",
    [Achievement.CraftedFirstAxe]: "is-success",
    [Achievement.ChoppedFirstTree]: "is-success",
    [Achievement.Collect100Wood]: "is-success",
    [Achievement.Collect100Stone]: "is-primary",
}

export const achievementDisplayNames: Record<Achievement, string> = {
    [Achievement.CollectTwig]: "Collect a Twig",
    [Achievement.CraftedFirstAxe]: "Craft your first axe",
    [Achievement.ChoppedFirstTree]: "Chop down your first tree",
    [Achievement.Collect100Wood]: "Collect 100 Wood",
    [Achievement.Collect100Stone]: "Collect 100 Stone",
}