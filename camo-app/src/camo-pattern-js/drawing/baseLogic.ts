
import type {Circle} from "../geometry/circle";
import type {Point} from "../geometry/point";
import type {Polygon} from "../geometry/polygon";

export abstract class BaseLogic {
    constructor(private ctx) {}
    abstract draw(width: number, height: number, colIter: IterableIterator<string>, options: Object)
    abstract startAnimate()
    abstract stopAnimate()
    abstract handleMouseMove(p: Point)

    protected drawCircle(circle: Circle) {
        this.ctx.fillStyle = circle.color;
        this.ctx.beginPath();
        this.ctx.arc(
            circle.center.x, circle.center.y, circle.radius,
            0, Math.PI * 2, true);
        this.ctx.closePath();
        this.ctx.fill();
    }

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