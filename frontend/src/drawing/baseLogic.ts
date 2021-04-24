import {Polygon} from "../geometry/polygon";

export abstract class BaseLogic {
    constructor(private ctx) {}
    abstract draw(width: number, height: number)

    protected drawPolygon(poly: Polygon) {
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
}
