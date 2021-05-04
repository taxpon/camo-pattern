import { Canvas } from "./canvas";
import "./style.scss";
import {State} from "./model/state";
import {StateKey} from "./model/stateKey";
import {Point} from "./geometry/point";
import {ColorPaletteComponent} from "./component/colorPaletteComponent";
import {Color, ColorPalette} from "./color";

class App {

    private colorPaletteComponent = new ColorPaletteComponent();

    initialize() {
        // Insert Color Palette
        const paletteList = document.getElementById("color-palette-list")
        const palette = this.colorPaletteComponent.render();
        paletteList.appendChild(palette)

        const addButton = document.getElementById("add-color")
        addButton.onmousedown = _ => {
            Color.setUserPalette(new ColorPalette("test", "Test", [
                "#FF0000",
                "#00FF00",
                "#0000FF"
            ]))
        }

        const canvas = document.getElementById("canvas") as HTMLCanvasElement;
        let download = document.getElementById("download");
        download.onclick = () => {
            let link = document.createElement("a");
            document.body.appendChild(link)
            link.setAttribute('download', 'camo-pattern.png');
            link.setAttribute('href', canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"));
            link.click();
            document.body.removeChild(link);
        }

        let refresh = document.getElementById("refresh");
        refresh.onclick = () => {
            c.reDraw();
        }

        let form = document.getElementById("controls-values");
        State.setState(StateKey.PATTERN, form["camo-pattern"].value);
        State.setState(StateKey.PALETTE, form["color-palette"].value);
        State.setState(StateKey.NUM_POINTS, form["num-points"].value);
        State.setState(StateKey.CAMO_DEPTH, form["camo-depth"].value);
        State.setState(StateKey.ANIMATE, false);
        State.setState(StateKey.MOUSE_INTERACTION, false);
        State.setState(StateKey.ENABLE_CONTROL_PANEL, true);

        let camoSlider = document.querySelector("#camo-pattern input[name=num-points]") as HTMLInputElement;
        let camoSliderIndicator = document.getElementById("num-points-val");
        camoSlider.onchange = _ => {
            camoSliderIndicator.textContent = camoSlider.value
            if (State.getState(StateKey.NUM_POINTS) != camoSlider.value) {
                State.setState(StateKey.NUM_POINTS, camoSlider.value)
            }
        }

        let depthSlider = document.querySelector("#camo-pattern input[name=camo-depth]") as HTMLInputElement;
        let depthSliderIndicator = document.getElementById("camo-depth-val");
        depthSlider.onchange = _ => {
            depthSliderIndicator.textContent = depthSlider.value
            if (State.getState(StateKey.CAMO_DEPTH) != depthSlider.value) {
                State.setState(StateKey.CAMO_DEPTH, depthSlider.value)
            }
        }


        let startAnimate = document.getElementById("start-animate");
        startAnimate.onclick = _ => {
            if (State.getState(StateKey.ANIMATE) !== true) {
                State.setState(StateKey.ANIMATE, true)
            }
        }

        let stopAnimate = document.getElementById("stop-animate");
        stopAnimate.onclick = _ => {
            if (State.getState(StateKey.ANIMATE) !== false) {
                State.setState(StateKey.ANIMATE, false)
            }
        }

        let colorRadios = document.querySelectorAll("#color-palette input[type=radio]");
        colorRadios.forEach((elem: HTMLInputElement) => {
            elem.onclick = () => {
                if (State.getState(StateKey.PALETTE) != elem.value) {
                    State.setState(StateKey.PALETTE, elem.value);
                }
            }
        })

        window.onmousemove = (e) => {
            if (!State.getState(StateKey.MOUSE_POS) ||
                !(State.getState(StateKey.MOUSE_POS) as Point).equals(Point.of(e.clientX, e.clientY))) {
                State.setState(StateKey.MOUSE_POS, Point.of(e.clientX, e.clientY));
            }
        }

        const tapToRefresh = document.getElementById("tap-to-refresh")
        tapToRefresh.ontouchend = () => {
            c.reDraw()
            State.setState(StateKey.MOUSE_INTERACTION, false)
        }

        // Mobile UI interaction
        const camoControlPanel = document.getElementById("camo-control-panel")
        const openSettings = document.getElementById("open-settings")
        const openSettingsOn = document.getElementById("open-settings-on")
        const openSettingsOff = document.getElementById("open-settings-off")
        openSettings.ontouchend = () => {
            camoControlPanel.classList.toggle("activated")
            openSettingsOn.classList.toggle("fade-out")
            openSettingsOff.classList.toggle("fade-out")
        }

        // Keyboard
        window.onkeydown = (e) => {
            if (e.key === "m") {
                State.flipState(StateKey.MOUSE_INTERACTION)
            }
            else if (e.key === "c") {
                const enabled = State.flipState(StateKey.ENABLE_CONTROL_PANEL)
                const elem = document.getElementById("camo-control-panel")
                if (enabled) {
                    elem.style.display = "block"
                } else {
                    elem.style.display = "none"
                }
            }
            else if (e.key === "r") {
                c.reDraw()
            }
            else if (e.key === "a") {
                State.flipState(StateKey.ANIMATE)
            }
        }

        let c = new Canvas();
    }
}

window.onload = () => {
    (new App()).initialize();
};
