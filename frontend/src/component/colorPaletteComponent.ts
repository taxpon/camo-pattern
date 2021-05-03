import {Component} from "./_baseComponent";
import {Color, ColorPalette} from "../color";

export class ColorPaletteComponent extends Component {

    protected templateSrc = `
<label class="radio">
    <input name="color-palette" type="radio" value="">
    <span class="outside"><span class="inside"></span></span>
    <span class="palette-name"></span>
</label>`
    protected template = document.createElement("template")

    constructor() {
        super();
        this.template.innerHTML = this.templateSrc.trim()
        this.setState("default-palette", Color.getPalettes())
    }

    render(): Node {
        const root = document.createElement("div")
        const palettes = this.getState("default-palette") as Map<string, ColorPalette>
        let isFirstPalette = true

        if (!palettes) {
            throw Error("Failed to get color palette properly")
        }

        palettes.forEach(palette => {
            const clone = this.template.content.cloneNode(true) as HTMLElement
            const radio = (clone.querySelector("input[type=radio]") as HTMLInputElement)
            radio.value = palette.id
            if (isFirstPalette) {
                radio.checked = isFirstPalette
                isFirstPalette = false
            }
            clone.querySelector(".palette-name").textContent = palette.name
            root.appendChild(clone)
        });
        return root
    }
}
