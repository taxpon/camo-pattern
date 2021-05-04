import {Action} from "./model/action";
import {ActionKey} from "./model/actionKey";

export class ColorPalette {
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

    private static _defaultPalettes: Map<string, ColorPalette>
    private static _userPalettes: Map<string, ColorPalette>

    static ctor = (() => {
        Color.loadDefaultPalettes()
        Color.loadUserPalettes()
    })()

    private static loadDefaultPalettes() {
        Color._defaultPalettes = new Map();
        Color._defaultPalettes.set(
            "green",
            new ColorPalette("green", "Green", [
                "#6C7C52", // Light green
                "#4A4F44", // Deep green
                "#3B3845", // Dark Gray
                "#B2B096", // Ivory
            ]),)
        Color._defaultPalettes.set(
            "blue",
            new ColorPalette("blue", "Blue", [
                "#3770DB",
                "#172F5C",
                "#7B9FE0",
                "#32415C",
                "#2A56A8",
            ]),
        )
        Color._defaultPalettes.set(
            "desert",
            new ColorPalette("desert", "Desert", [
                "#B8A79B",
                "#72625D",
                "#A69887",
                "#6D4C2D"
            ]),
        )
        Color._defaultPalettes.set(
            "orange",
            new ColorPalette("orange", "Orange", [
                "#FF824D",
                "#782400",
                "#F74A00",
                "#7A442C",
                "#C73B00"
            ]),
        )
        Color._defaultPalettes.set(
            "uc1",
            new ColorPalette("uc1", "UC1", [
                // https://store.undercoverism.com/undercovermen/item/detail/1_1_UC1A4508-4_1/Q02
                "#C4B9B5",
                "#683A31",
                "#4A5F56"
            ]),
        )
        Color._defaultPalettes.set(
            "uc2",
            new ColorPalette("uc2", "UC2", [
                // https://store.undercoverism.com/undercovermen/item/detail/1_1_UC1A4508-4_1/Q02
                "#262527",
                "#513A3E",
                "#424B50"
            ]),
        )
        Color._defaultPalettes.set(
            "bw",
            new ColorPalette("bw", "BW", [
                // https://store.undercoverism.com/undercovermen/item/detail/1_1_UC1A4508-4_1/Q02
                "#FFFFFF",
                "#000000"
            ]),
        )
    }

    private static loadUserPalettes() {
        this._userPalettes = new Map<string, ColorPalette>()
        const rawUserPalettes: ColorPalette[] = JSON.parse(window.localStorage.getItem("userPalettes") || "[]")
        rawUserPalettes.forEach(val => {
            const palette = new ColorPalette(
                val["_id"], val["_name"], val["_colors"]
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
        Action.emit(ActionKey.COLOR_UPDATED)
    }

    public static deleteUserPalette(id: string) {
        this._userPalettes.delete(id)
        this.saveUserPalettes()
        Action.emit(ActionKey.COLOR_UPDATED)
    }

    private static range = (start: number, end: number) => Array.from({length: (end - start + 1)}, (v, k) => k + start);

    public static getDefaultPalettes() {
        return this._defaultPalettes
    }

    public static getUserPalettes() {
        return this._userPalettes
    }

    public static getBaseColorFromPalette(color: string): string {
        return (this._defaultPalettes.get(color) || this._userPalettes.get(color)).colors[0];
    }

    public static colorGeneratorFromPalette(color: string): IterableIterator<string> {
        return this.colorGenerator(
            (this._defaultPalettes.get(color) || this._userPalettes.get(color)).colors
        );
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
