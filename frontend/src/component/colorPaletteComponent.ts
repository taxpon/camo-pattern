import {Component} from "./_baseComponent";
import {Color, ColorPalette} from "../color";
import {Action} from "../model/action";
import {ActionKey} from "../model/actionKey";
import {State} from "../model/state";
import {StateKey} from "../model/stateKey";

export class ColorPaletteComponent extends Component {

    protected templateSrc = `
<div>
<label class="radio">
    <input name="color-palette" type="radio" value="">
    <span class="outside"><span class="inside"></span></span>
    <span class="palette-name"></span>
</label>
<div class="trash-button"><i class="far fa-trash-alt"></i></div>
<div style="clear: both;"></div>
</div>
`
    protected template = document.createElement("template")
    private paletteList = document.getElementById("color-palette-list")

    constructor() {
        super();
        this.template.innerHTML = this.templateSrc.trim()
        this.setState("default-palette", Color.getDefaultPalettes(), false)
        this.setState("user-palette", Color.getUserPalettes())
        Action.register(ActionKey.COLOR_UPDATED, this.reloadUserPalettes.bind(this))
    }

    reloadUserPalettes() {
        this.setState("user-palette", Color.getUserPalettes())
        const node = this.render() as HTMLElement
        this.paletteList.replaceChild(node, this.paletteList.firstChild)
    }

    renderTemplate(palette: ColorPalette, hasTrashButton: boolean = false): [HTMLElement, HTMLInputElement] {
        const clone = this.template.content.cloneNode(true) as HTMLElement
        const radio = (clone.querySelector("input[type=radio]") as HTMLInputElement)
        radio.value = palette.id
        radio.onclick = e => {
            const target = e.target as HTMLInputElement
            if (State.getState(StateKey.PALETTE) != target.value) {
                State.setState(StateKey.PALETTE, target.value);
            }
        }
        clone.querySelector(".palette-name").textContent = palette.name
        if (hasTrashButton) {
            clone.querySelector(".trash-button").setAttribute("key", palette.id);
            (clone.querySelector(".trash-button") as HTMLElement).onmousedown = e => {
                const parent = (e.target as HTMLElement).parentElement
                const paletteId = parent.getAttribute("key")
                if (window.confirm(`Delete ${paletteId}?`)) {
                    Color.deleteUserPalette(paletteId)
                }
            }
        } else {
            clone.querySelector(".trash-button").remove()
        }
        return [clone, radio]
    }

    render(): Node {
        const root = document.createElement("div")
        const defaultPalettes = this.getState("default-palette") as Map<string, ColorPalette>
        const currentPalette = State.getState(StateKey.PALETTE)
        console.log("CP:", currentPalette)
        let isFirstPalette = true

        if (!defaultPalettes) {
            throw Error("Failed to get color palette properly")
        }

        defaultPalettes.forEach(palette => {
            const [clone, radio] = this.renderTemplate(palette)
            if (isFirstPalette) {
                if (!currentPalette) {
                    radio.checked = isFirstPalette
                }
                isFirstPalette = false
            } else {
                radio.checked = radio.value === currentPalette
            }
            root.appendChild(clone)
        });

        const userPalettes = this.getState("user-palette") as Map<string, ColorPalette>
        userPalettes.forEach(palette => {
            const [clone, radio] = this.renderTemplate(palette, true)
            radio.checked = radio.value === currentPalette
            root.appendChild(clone)
        });

        return root
    }
}
