import {Polygon} from "../geometry/polygon";
import {Circle} from "../geometry/circle";

export abstract class BaseLogic {
    constructor(private ctx) {}
    abstract draw(width: number, height: number)

    protected drawCircle(circle: Circle) {
        this.ctx.fillStyle = circle.color;
        this.ctx.beginPath();
        this.ctx.arc(
            circle.center.x, circle.center.y, circle.radius,
            0, Math.PI * 2, true);
        this.ctx.closePath();
        this.ctx.fill();
    }

    protected drawPolygon(poly: Polygon) {
        this.ctx.fillStyle = poly.color;
        this.ctx.strokeStyle = poly.color;
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
