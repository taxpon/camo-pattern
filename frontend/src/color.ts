
class ColorPalette {
    constructor(private _id: string, private _name: string, private _colors: string[]) {
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get colors() {
        return this._colors;
    }
}

export class Color {

    private static _palettes: Map<string, ColorPalette>

    static ctor = (() => {
        Color._palettes = new Map();
        Color._palettes.set(
            "green",
            new ColorPalette("green", "Green", [
                "#6C7C52", // Light green
                "#4A4F44", // Deep green
                "#3B3845", // Dark Gray
                "#B2B096", // Ivory
            ]),)
        Color._palettes.set(
            "blue",
            new ColorPalette("blue", "Blue", [
                "#3770DB",
                "#172F5C",
                "#7B9FE0",
                "#32415C",
                "#2A56A8",
            ]),
        )
        Color._palettes.set(
            "desert",
            new ColorPalette("desert", "Desert", [
                "#B8A79B",
                "#72625D",
                "#A69887",
                "#6D4C2D"
            ]),
        )
        Color._palettes.set(
            "orange",
            new ColorPalette("orange", "Orange", [
                "#FF824D",
                "#782400",
                "#F74A00",
                "#7A442C",
                "#C73B00"
            ]),
        )
        Color._palettes.set(
            "uc1",
            new ColorPalette("uc1", "UC1", [
                // https://store.undercoverism.com/undercovermen/item/detail/1_1_UC1A4508-4_1/Q02
                "#C4B9B5",
                "#683A31",
                "#4A5F56"
            ]),
        )
        Color._palettes.set(
            "uc2",
            new ColorPalette("uc2", "UC2", [
                // https://store.undercoverism.com/undercovermen/item/detail/1_1_UC1A4508-4_1/Q02
                "#262527",
                "#513A3E",
                "#424B50"
            ]),
        )
        Color._palettes.set(
            "bw",
            new ColorPalette("bw", "BW", [
                // https://store.undercoverism.com/undercovermen/item/detail/1_1_UC1A4508-4_1/Q02
                "#FFFFFF",
                "#000000"
            ]),
        )
    })()

    private static range = (start: number, end: number) => Array.from({length: (end - start + 1)}, (v, k) => k + start);

    public static getPalettes() {
        return this._palettes
    }

    public static getBaseColorFromPalette(color: string): string {
        return this._palettes.get(color).colors[0];
    }

    public static colorGeneratorFromPalette(color: string): IterableIterator<string> {
        return this.colorGenerator(this._palettes.get(color).colors);
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
