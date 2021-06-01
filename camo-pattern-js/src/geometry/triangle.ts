import {Point} from "./point"
import {Polygon} from "./polygon";
import {Circle} from "./circle";
import {Edge} from "./edge";
import RGBA from "../color/RGBA";

export class Triangle extends Polygon{

    private _area: number
    private _edges: Array<Edge>
    private _circumcircle: Circle;

    constructor(_points: Array<Point>, _color: string, _colors: Array<RGBA> = []) {
        if (_points.length != 3) {
            throw Error("Triangle must have 3 points");
        }
        super(_points, _color, undefined, _colors);
    }

    get area(): number {
        if (!this._area) {
            this._area = Math.abs(
                0.5 *
                (
                    this.points[0].x * (this.points[1].y - this.points[2].y)
                    + this.points[1].x * (this.points[2].y - this.points[0].y)
                    + this.points[2].x * (this.points[0].y - this.points[1].y))
            )
        }
        return this._area
    }

    get edges(): Array<Edge> {
        if(!this._edges){
            this._edges = [];
            this._edges.push(new Edge(this.points[0],this.points[1]));
            this._edges.push(new Edge(this.points[1],this.points[2]));
            this._edges.push(new Edge(this.points[2],this.points[0]));
        }
        return this._edges;
    }

    public getCircumcircle(): Circle {
        if (!this._circumcircle) {
            const x1 = this.points[0].x;
            const y1 = this.points[0].y;
            const x2 = this.points[1].x;
            const y2 = this.points[1].y;
            const x3 = this.points[2].x;
            const y3 = this.points[2].y;

            const x1pow2 = Math.pow(x1,2);
            const x2pow2 = Math.pow(x2,2);
            const x3pow2 = Math.pow(x3,2);
            const y1pow2 = Math.pow(y1,2);
            const y2pow2 = Math.pow(y2,2);
            const y3pow2 = Math.pow(y3,2);

            const c = 2 * ((x2 - x1) * (y3 - y1) - (y2 - y1) * (x3 - x1));
            const x = ((y3 - y1) * (x2pow2 - x1pow2 + y2pow2 - y1pow2) + (y1 - y2) * (x3pow2 - x1pow2 + y3pow2 - y1pow2)) / c;
            const y = ((x1 - x3) * (x2pow2 - x1pow2 + y2pow2 - y1pow2) + (x2 - x1) * (x3pow2 - x1pow2 + y3pow2 - y1pow2)) / c;

            const r = Math.sqrt(Math.pow(x1 - x,2) + Math.pow(y1 - y,2));
            this._circumcircle =  new Circle(new Point(x,y), r, "white");
        }
        return this._circumcircle;
    }
}
