import { writable } from "svelte/store";
import type { PlayerClass } from "./classes";

export const mainClass = writable<PlayerClass | undefined>(undefined);
export const subClass = writable<PlayerClass | undefined>(undefined);