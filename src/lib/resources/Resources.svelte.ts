import type { Resource } from "../types/resources";

class ResourceStorage {
    #resources: Partial<Record<Resource, number>> = $state({})

    addResource(resource: Resource, amount: number) {
        const currentAmount = this.#resources[resource] || 0;
        this.#resources[resource] = currentAmount + amount;
    }

    useResource(resource: Resource, amount: number) {
        const currentAmount = this.#resources[resource] || 0;
        if (currentAmount < amount) {
            throw new Error(`Not enough ${resource} available`);
        }
        this.#resources[resource] = currentAmount - amount;
    }

    getResources() {
        return this.#resources;
    }

    getResource(resource: Resource): number {
        return this.#resources[resource] || 0;
    }
}

export const Resources = new ResourceStorage();