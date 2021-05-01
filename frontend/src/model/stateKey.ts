export const StateKey = {
    PATTERN: "pattern",
    PALETTE: "palette",
    NUM_POINTS: "num-points",
    ANIMATE: "animate",
    MOUSE_POS: "mouse-pos",
    CAMO_DEPTH: "camo-depth",
    MOUSE_INTERACTION: "mouse-interaction",
    ENABLE_CONTROL_PANEL: "enable-control-panel"
} as const

export type StateKeyType = typeof StateKey[keyof typeof StateKey];
