export const StateKey = {
    PATTERN: "pattern",
    PALETTE: "palette",
    NUM_POINTS: "num-points",
    ANIMATE: "animate",
    MOUSE_POS: "mouse-pos",
    CAMO_DEPTH: "camo-depth"
} as const

export type StateKeyType = typeof StateKey[keyof typeof StateKey];
