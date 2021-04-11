import { Canvas } from "./canvas";
import "./style.scss";
import {State} from "./state";

window.onload = () => {
    let c = new Canvas();
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

    let colorRadios = document.querySelectorAll("#color-palette input[type=radio]");
    colorRadios.forEach((elem: HTMLInputElement) => {
        elem.onclick = () => {
            if (State.getState("palette", "green") != elem.value) {
                State.setState("palette", elem.value);
            }

        }
    })
};
