import { writable } from 'svelte/store';

export const numPoints = writable(100);
export const campDepth = writable(2);
export const redrawSwitch = writable(0);
export const downloadSwitch = writable(0);
export const mouseTrack = writable(false);
export const camoAnimate = writable(false);
