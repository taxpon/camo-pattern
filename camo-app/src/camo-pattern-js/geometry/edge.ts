import type {Point} from "./point"

export class Edge {
    private readonly _start: Point
    private readonly _end: Point

    constructor(p1: Point, p2: Point) {
        if (p1.hasIndex && p2.hasIndex) {
            if (p1.keyIndex < p2.keyIndex) {
                this._start = p1
                this._end = p2
            } else {
                this._start = p2
                this._end = p1
            }
        }
        else {
            if (p1.x <= p2.x) {
                this._start = p1
                this._end = p2
            } else {
                this._start = p2
                this._end = p1
            }
        }
    }

    get start() {
        return this._start
    }

    get end() {
        return this._end
    }

    get key() {
        return `${this.start.key}/${this.end.key}`
    }

    get keyIndex(): string {
        return `${this.start.keyIndex}-${this.end.keyIndex}`
    }


    public equals(another: Edge): boolean {
        return (this._start.equals(another._start) && this._end.equals(another._end)) ||
            (this._start.equals(another._end) && this._end.equals(another._start))
    }
}
