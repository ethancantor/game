import { writable } from "svelte/store";
import type { Resource } from "../types/resources";

export const possibleResources = ["wood", "stone", "iron", "gold", "diamond"] as const;

export const resources = writable<Partial<Record<Resource, number>>>({});

export function addResource(resource: Resource, amount: number) {
    resources.update((currentResources) => {
        const currentAmount = currentResources[resource] || 0;
        return { ...currentResources, [resource]: currentAmount + amount };
    });
}

export function useResource(resource: Resource, amount: number) {
    resources.update((currentResources) => {
        const currentAmount = currentResources[resource] || 0;
        if (currentAmount < amount) {
            throw new Error(`Not enough ${resource} available`);
        }
        return { ...currentResources, [resource]: currentAmount - amount };
    });
}