import { writable } from "svelte/store";
import type { Resource } from "../types/resources";

export const resources = writable<Partial<Record<Resource, number>>>({});

export function addResource(resource: Resource, amount: number) {
    resources.update((currentResources) => {
        const currentAmount = currentResources[resource] || 0;
        return { ...currentResources, [resource]: currentAmount + amount };
    });
}