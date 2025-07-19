import { writable } from "svelte/store";
const fps = 5;
export const MAX_TICK = (2 ** 31) - 1;

export const running = writable(true);
export const tick = writable(0);
export const timestep = 1000 / fps;

export const accumulator = writable(0);
export const lastTime = writable(performance.now());


