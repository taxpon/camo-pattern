import { Canvas } from "./canvas";
import "./style.scss";
import {State} from "./model/state";
import {StateKey} from "./model/stateKey";

window.onload = () => {
    let download = document.getElementById("download");
    download.onclick = (e) => {
        let canvas = document.getElementById("canvas") as HTMLCanvasElement;
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
    State.setState(StateKey.ANIMATE, false);

    let camoRadios = document.querySelectorAll("#camo-pattern input[type=radio]");
    camoRadios.forEach((elem: HTMLInputElement) => {
        elem.onclick = () => {
            if (State.getState(StateKey.PATTERN) != elem.value) {
                State.setState(StateKey.PATTERN, elem.value);
            }
        }
    })

    let camoSlider = document.querySelector("#camo-pattern input[name=num-points]") as HTMLInputElement;
    let camoSliderIndicator = document.getElementById("num-points-val");
    camoSlider.onchange = _ => {
        camoSliderIndicator.textContent = camoSlider.value
        if (State.getState(StateKey.NUM_POINTS) != camoSlider.value) {
            State.setState(StateKey.NUM_POINTS, camoSlider.value)
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

    let c = new Canvas();
};
