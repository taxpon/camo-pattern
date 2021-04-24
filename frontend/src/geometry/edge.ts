import {Point} from "./point"
import {Polygon} from "./polygon";

export class Edge {
    constructor(private _start: Point, private _end: Point) {}

    get start() {
        return this._start
    }

    get end() {
        return this._end
    }

    public equals(another: Edge): boolean {
        return (this._start.equals(another._start) && this._end.equals(another._end)) ||
            (this._start.equals(another._end) && this._end.equals(another._start))
    }
}
