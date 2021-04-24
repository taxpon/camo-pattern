export const StateKey = {
    PATTERN: "pattern",
    PALETTE: "palette"
} as const

export type StateKeyType = typeof StateKey[keyof typeof StateKey];
