export class Color {

    private static _palettes = {
        "green": [
            "#6C7C52", // Light green
            "#4A4F44", // Deep green
            "#3B3845", // Dark Gray
            "#B2B096", // Ivory
        ],
        "blue": [
            "#3770DB",
            "#172F5C",
            "#7B9FE0",
            "#32415C",
            "#2A56A8",
        ],
        "desert": [
            "#B8A79B",
            "#72625D",
            "#A69887",
            "#6D4C2D"
        ],
        "orange": [
            "#FF824D",
            "#782400",
            "#F74A00",
            "#7A442C",
            "#C73B00"
        ],
        "uc1": [
            // https://store.undercoverism.com/undercovermen/item/detail/1_1_UC1A4508-4_1/Q02
            "#C4B9B5",
            "#683A31",
            "#4A5F56"
        ],
        "uc2": [
            "#262527",
            "#513A3E",
            "#424B50"
        ],
        "bw": [
            "#FFFFFF",
            "#000000",
        ]
    }

    private static range = (start: number, end: number) => Array.from({length: (end - start + 1)}, (v, k) => k + start);

    public static getBaseColorFromPalette(color: string): string {
        return this._palettes[color][0];
    }

    public static colorGeneratorFromPalette(color: string): IterableIterator<string> {
        return this.colorGenerator(this._palettes[color]);
    }

    public static * colorGenerator(colors: string[]): IterableIterator<string> {
        for (;;) {
            let indices = this.range(0, colors.length - 1)
            for (let i = indices.length; 1 < i; i--) {
                let k = Math.floor(Math.random() * i);
                [indices[k], indices[i - 1]] = [indices[i - 1], indices[k]];
            }
            for (let i = 0; i < indices.length; i++) {
                yield colors[indices[i]];
            }
        }
    }
}
