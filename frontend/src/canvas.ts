import { Point } from "./geometry/point";
import { Polygon } from "./geometry/polygon";
import { State } from "./state";
import {Color} from "./color";

export class Canvas {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private width: number;
    private height: number;


    constructor(private _baseCol: string = "#6C7C52") {
        this.canvas = document.getElementById("canvas") as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d');
        this.redrawHandler();
        window.onresize = this.redrawHandler.bind(this)
        State.registerCallback(this.redrawHandler.bind(this))
    }

    public reDraw() {
        this.ctx.fillStyle = Color.getBaseColorFromPalette(State.getState("palette", "green"));
        this.ctx.fillRect(0, 0, this.width, this.height);
        this.draw();
    }

    private redrawHandler(state?: State) {
        this.width = document.documentElement.clientWidth;
        this.height = document.documentElement.clientHeight;
        this.canvas.setAttribute("width", this.width.toString());
        this.canvas.setAttribute("height", this.height.toString());
        this.ctx.fillStyle = Color.getBaseColorFromPalette(State.getState("palette", "green"));
        this.ctx.fillRect(0, 0, this.width, this.height);
        this.draw();
    }

    private drawPolygon(poly: Polygon) {
        this.ctx.fillStyle = poly.color;
        this.ctx.beginPath();
        poly.points.forEach((val, index) => {
            if (index === 0) {
                this.ctx.moveTo(...val.coord)
            } else {
                this.ctx.lineTo(...val.coord)
            }
        })
        this.ctx.closePath();
        this.ctx.fill();
    }

    public draw() {
        let colIter = Color.colorGeneratorFromPalette(State.getState("palette", "green"));
        const unit = 500;
        let xNum = Math.ceil(this.width / unit);
        let yNum = Math.ceil(this.height / unit);

        for (let i = 0; i < xNum; i++) {
            for (let j = 0; j < yNum; j++) {
                let x = unit * i;
                let y = unit * j;
                let curr = colIter.next()
                let num = 4;
                let rnd = Math.random();
                if (rnd > 0.66) {
                    num = 5
                } else if (rnd > 0.33) {
                    num = 6
                }
                let rnd2 = Math.random();
                if (rnd2 > 0.8) {
                    continue
                }
                let p2 = new Polygon(
                    Point.randomPoints2Of(x, y, unit, num)
                    , curr.value)
                this.drawPolygon(p2);
            }
        }

        const unit2 = 200;
        xNum = Math.ceil(this.width / unit2);
        yNum = Math.ceil(this.height / unit2);

        for (let i = 0; i < xNum; i++) {
            for (let j = 0; j < yNum; j++) {
                let x = unit2 * i;
                let y = unit2 * j;
                let curr = colIter.next()
                let num = 4;
                let rnd = Math.random();
                if (rnd > 0.66) {
                    num = 5
                } else if (rnd > 0.33) {
                    num = 6
                }
                let rnd2 = Math.random();
                if (rnd2 > 0.8) {
                    continue
                }
                let p2 = new Polygon(
                    Point.randomPoints2Of(x, y, unit2, num)
                    , curr.value)
                this.drawPolygon(p2);
            }
        }
    }
}
