import {Point} from "./point"

export class Polygon {
    constructor(private _points: Array<Point>, private _color: string) {
    }
    get points() {
        return this._points;
    }
    get color() {
        return this._color;
    }
}
