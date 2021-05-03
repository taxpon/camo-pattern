import {Component} from "./_baseComponent";
import {Color, ColorPalette} from "../color";

export class ColorPaletteComponent extends Component {

    static _template = `
<label class="radio">
    <input name="color-palette" type="radio" value="">
    <span class="outside"><span class="inside"></span></span>
    <span class="palette-name"></span>
</label>`

    protected initialize() {
        this.setState("default-palette", Color.getPalettes())
    }

    render(): Node {
        const root = document.createElement("div")
        const palettes = this.getState("default-palette") as Map<string, ColorPalette>
        let isFirstPalette = true

        palettes.forEach(palette => {
            const template = document.createElement("template");
            template.innerHTML = ColorPaletteComponent._template.trim()
            const clone = template.content.cloneNode(true) as HTMLElement
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
