export class ColorPalette {
    constructor(private _id: string, private _name: string, private _colors: ColorItem[]) {
    }
    get id(): string {
        return this._id;
    }
    get name(): string {
        return this._name;
    }
    get colors(): ColorItem[] {
        return this._colors;
    }
}

export class ColorItem {
    constructor(private _value: string, private _ratio: number = 1, private _sizeFactor: number = 1) {}

    get value(): string {
        return this._value;
    }

    get ratio(): number {
        return this._ratio;
    }

    get sizeFactor(): number {
        return this._sizeFactor;
    }
}

export class Color {

    private static _defaultPalettes: Map<string, ColorPalette>
    private static _userPalettes: Map<string, ColorPalette>

    static ctor = (() => {
        Color.loadDefaultPalettes()
        Color.loadUserPalettes()
        return null;
    })()

    private static loadDefaultPalettes() {
        Color._defaultPalettes = new Map();
        Color._defaultPalettes.set(
            "green",
            new ColorPalette("green", "Green", [
                new ColorItem("#6C7C52"), // Light green
                new ColorItem("#4A4F44"), // Deep green
                new ColorItem("#3B3845"), // Dark Gray
                new ColorItem("#B2B096"), // Ivory
            ]),)
        Color._defaultPalettes.set(
            "green2",
            new ColorPalette("green2", "Green2", [
                new ColorItem("#6C7C52"), // Light green
                new ColorItem("#4A4F44"), // Deep green
                new ColorItem("#3B3845"), // Dark Gray
                new ColorItem("#B2B096"), // Ivory
                new ColorItem("#a53434", 0.2, 1.0),
                new ColorItem("#c2c248", 0.2, 0.5),
            ]),)
        Color._defaultPalettes.set(
            "desert",
            new ColorPalette("desert", "Desert", [
                new ColorItem("#B8A79B"),
                new ColorItem("#72625D"),
                new ColorItem("#A69887"),
                new ColorItem("#6D4C2D")
            ]),
        )
        Color._defaultPalettes.set(
            "uc1",
            new ColorPalette("uc1", "UC1", [
                // https://store.undercoverism.com/undercovermen/item/detail/1_1_UC1A4508-4_1/Q02
                new ColorItem("#C4B9B5"),
                new ColorItem("#683A31"),
                new ColorItem("#4A5F56")
            ]),
        )
        Color._defaultPalettes.set(
            "uc2",
            new ColorPalette("uc2", "UC2", [
                // https://store.undercoverism.com/undercovermen/item/detail/1_1_UC1A4508-4_1/Q02
                new ColorItem("#262527"),
                new ColorItem("#513A3E"),
                new ColorItem("#424B50")
            ]),
        )
    }

    private static loadUserPalettes() {
        this._userPalettes = new Map<string, ColorPalette>()
        const rawUserPalettes: ColorPalette[] = JSON.parse(window.localStorage.getItem("userPalettes") || "[]")
        rawUserPalettes.forEach(val => {
            let _colors: Array<string|ColorItem> = val["_colors"];
            if (_colors.length > 0 && _colors[0]["_ratio"] === undefined) {
                _colors = _colors.map(c => new ColorItem(c as string))
            } else {
                _colors = _colors.map(c => new ColorItem(c['_value'], c['_ratio'], c['_sizeFactor']))
            }
            const palette = new ColorPalette(
                val["_id"], val["_name"], _colors as ColorItem[]
            )
            this._userPalettes.set(palette.id, palette)
        })
    }

    private static saveUserPalettes() {
        let serializableUserPalette: ColorPalette[] = []
        this._userPalettes.forEach(value => {
            serializableUserPalette.push(value)
        })
        window.localStorage.setItem("userPalettes", JSON.stringify(serializableUserPalette))
    }

    public static setUserPalette(palette: ColorPalette) {
        this._userPalettes.set(palette.id, palette)
        this.saveUserPalettes()
    }

    public static deleteUserPalette(id: string) {
        this._userPalettes.delete(id)
        this.saveUserPalettes()
    }

    private static range = (start: number, end: number) => Array.from({length: (end - start + 1)}, (v, k) => k + start);

    public static getDefaultPalettes(): Map<string, ColorPalette> {
        return this._defaultPalettes
    }

    public static getUserPalettes() {
        return this._userPalettes
    }

    public static getBaseColorFromPalette(color: string): string {
        return (this._defaultPalettes.get(color) || this._userPalettes.get(color)).colors[0].value;
    }

    public static colorGeneratorFromPalette(color: string): IterableIterator<ColorItem> {
        return this.colorGenerator(
            (this._defaultPalettes.get(color) || this._userPalettes.get(color)).colors
        );
    }

    public static * colorGenerator(colors: Array<string|ColorItem>): IterableIterator<ColorItem> {
        let convertedColors = colors;
        if (colors.length > 0 && typeof colors[0] === "string") {
            convertedColors = convertedColors.map(c => new ColorItem(c as string));
        }

        for (;;) {
            let indices = this.range(0, convertedColors.length - 1)
            for (let i = indices.length; 1 < i; i--) {
                let k = Math.floor(Math.random() * i);
                [indices[k], indices[i - 1]] = [indices[i - 1], indices[k]];
            }
            for (let i = 0; i < indices.length; i++) {
                const currentColor = convertedColors[indices[i]] as ColorItem;
                if (currentColor.ratio > Math.random()) {
                    yield (convertedColors[indices[i]] as ColorItem);
                }
            }
        }
    }
}
