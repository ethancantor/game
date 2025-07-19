import type { possibleResources } from "$lib/resources/ResourceProperties";

export type Resource = typeof possibleResources[number];
export type ResourceColor = "is-primary" | "is-success" | "is-warning" | "is-error" | "is-disabled";

export type FullResourceStore = Record<Resource, number>;
export type ResourceStore = Partial<FullResourceStore>;