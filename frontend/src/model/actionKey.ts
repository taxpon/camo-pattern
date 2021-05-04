export const ActionKey = {
    COLOR_UPDATED: "color_updated",
} as const

export type ActionKeyType = typeof ActionKey[keyof typeof ActionKey];
