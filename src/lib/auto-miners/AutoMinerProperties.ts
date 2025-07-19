import type { AutoMiner, AutoMinerCost } from "$lib/types/autominer";
import type { Resource, ResourceColor } from "$lib/types/resources";

export const autoMinerCosts: AutoMinerCost = {
    woodcutter: {
        wood: 100
    },
    stonemason: {
        stone: 200
    },
    ironminer: {
        iron: 300
    },
    goldminer: {
        gold: 400
    },
    diamondminer: {
        diamond: 500
    }
}

export const autoMinerColors: Record<AutoMiner, ResourceColor> = {
    woodcutter: "is-success",
    stonemason: "is-primary",
    ironminer: "is-warning",
    goldminer: "is-error",
    diamondminer: "is-primary"
}

export const autoMinerLabels: Record<AutoMiner, string> = {
    woodcutter: "Wood Cutter",
    stonemason: "Stone Mason",
    ironminer: "Iron Miner",
    goldminer: "Gold Miner",
    diamondminer: "Diamond Miner"
}

export const autoMinerResources: Record<AutoMiner, Resource> = {
    woodcutter: "wood",
    stonemason: "stone",
    ironminer: "iron",
    goldminer: "gold",
    diamondminer: "diamond"
}
