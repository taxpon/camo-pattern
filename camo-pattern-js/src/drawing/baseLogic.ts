
import type {Circle} from "../geometry/circle";
import type {Point} from "../geometry/point";
import type {Polygon} from "../geometry/polygon";
import type {ColorItem} from "../util/color";

export abstract class BaseLogic {
    constructor(private ctx) {}
    abstract draw(width: number, height: number, colIter: IterableIterator<ColorItem>, options: Object)
    abstract startAnimate()
    abstract stopAnimate()
    abstract handleMouseMove(p: Point)

    protected drawPolygon(poly: Polygon, color: string = undefined, strokeColor: string = undefined) {
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
}
