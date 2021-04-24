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

    let camoRadios = document.querySelectorAll("#camo-pattern input[type=radio]");
    camoRadios.forEach((elem: HTMLInputElement) => {
        elem.onclick = () => {
            if (State.getState(StateKey.PATTERN) != elem.value) {
                State.setState(StateKey.PATTERN, elem.value);
            }
        }
    })

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
