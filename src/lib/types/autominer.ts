import type { Resource } from "./resources";

export type AutoMiner = "woodcutter" | "stonemason" | "ironminer" | "goldminer" | "diamondminer";

export type AutoMinerCost = Record<AutoMiner, Partial<Record<Resource, number>>>;