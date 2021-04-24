import {Point} from "./point"

export class Circle {
    constructor(private _center: Point, private _radius: number, private _color: string) {
    }
    get center() {
        return this._center;
    }
    get radius() {
        return this._radius;
    }
    get color() {
        return this._color;
    }
    public isIncluding(p: Point): boolean {
        return this.center.dist(p) < this.radius
    }
}
