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
            let indices = this.range(0, colors.length)
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
