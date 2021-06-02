import type {Renderer} from "./Renderer";
import type {Polygon} from "../../geometry/polygon";

export class Canvas2DRenderer implements Renderer {
    constructor(private ctx: CanvasRenderingContext2D) {
    }

    drawPolygon(poly: Polygon, color: string = undefined, strokeColor: string = undefined) {
        if (color) {
            this.ctx.fillStyle = color;
            this.ctx.strokeStyle = strokeColor || color;
        } else {
            this.ctx.fillStyle = poly.color;
            this.ctx.strokeStyle = poly.strokeColor || poly.color;
        }
        this.ctx.beginPath();
        poly.points.forEach((val, index) => {
            if (index === 0) {
                this.ctx.moveTo(...val.coord)
            } else {
                this.ctx.lineTo(...val.coord)
            }
        })
        this.ctx.closePath();
        this.ctx.stroke();
        this.ctx.fill();
    }

    clearCanvas() {
    }
}
