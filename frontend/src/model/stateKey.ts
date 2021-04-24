export const StateKey = {
    PATTERN: "pattern",
    PALETTE: "palette",
    NUM_POINTS: "num-points",
    ANIMATE: "animate"
} as const

export type StateKeyType = typeof StateKey[keyof typeof StateKey];
