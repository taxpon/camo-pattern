import { State } from "./model/state";
import {StateKey, StateKeyType} from "./model/stateKey";
import {Color} from "./color";
import {BaseLogic} from "./drawing/baseLogic";
import {M90Pattern1} from "./drawing/m90Pattern1";
import {M90Pattern2} from "./drawing/m90Pattern2";
import {Point} from "./geometry/point";

export class Canvas {
    private canvas: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;
    private width: number;
    private height: number;
    private logics: {[name: string]: BaseLogic}

    constructor(private _baseCol: string = "#6C7C52") {
        // Init Variables
        this.canvas = document.getElementById("canvas") as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d');
        this.logics = {
            "m90p1": new M90Pattern1(this.ctx),
            "m90p2": new M90Pattern2(this.ctx)
        }
        // Register Handler
        window.onresize = this.redrawHandler.bind(this)
        State.registerCallback(this.redrawHandler.bind(this))
        // Initial Draw
        this.redrawHandler(null, null, null);
    }

    public reDraw() {
        this.ctx.fillStyle = Color.getBaseColorFromPalette(State.getState(StateKey.PALETTE));
        this.ctx.fillRect(0, 0, this.width, this.height);
        this.draw();
    }

    private redrawHandler(state: State, key: StateKeyType, value: any) {
        const renderer = this.logics[State.getState("pattern")]
        if (key === StateKey.ANIMATE) {
            if (value) {
                renderer.startAnimate();
            } else {
                renderer.stopAnimate();
            }
        }
        else if (key === StateKey.MOUSE_POS) {
            renderer.handleMouseMove(value as Point);
        }
        else if (key === StateKey.MOUSE_INTERACTION || key === StateKey.ENABLE_CONTROL_PANEL) {
        }
        else {
            this.width = document.documentElement.clientWidth;
            this.height = document.documentElement.clientHeight;
            this.canvas.setAttribute("width", this.width.toString());
            this.canvas.setAttribute("height", this.height.toString());
            this.ctx.fillStyle = Color.getBaseColorFromPalette(State.getState(StateKey.PALETTE));
            this.ctx.fillRect(0, 0, this.width, this.height);
            this.draw();
        }
    }

    public draw() {
        this.logics[State.getState("pattern")].draw(this.width, this.height)
    }
}
