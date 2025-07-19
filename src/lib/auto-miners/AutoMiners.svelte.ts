import { Resources } from "$lib/resources/Resources.svelte";
import type { AutoMiner } from "$lib/types/autominer";
import { autoMinerResources } from "./AutoMinerProperties";

class AutoMinerStorage {
    #miners: Partial<Record<AutoMiner, number>> = $state({});

    hireMiner(miner: AutoMiner, amount: number) {
        const currentAmount = this.#miners[miner] || 0;
        this.#miners[miner] = currentAmount + amount;
    }

    getMinerCount(miner: AutoMiner): number {
        return this.#miners[miner] || 0;
    }

    handleMine() {
        for (const miner in this.#miners) {
            const minerCount = this.#miners[miner as AutoMiner] || 0;
            if (minerCount > 0) {
                Resources.addResource(autoMinerResources[miner as AutoMiner], minerCount);
            }
        }
    }
}

export const AutoMiners = new AutoMinerStorage();