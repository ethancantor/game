import type { possibleResources } from "$lib/resources/Resources.svelte";

export type Resource = typeof possibleResources[number];
export type ResourceColor = "is-primary" | "is-success" | "is-warning" | "is-error" | "is-disabled";