import {Point} from "./point"

export class Polygon {
    private _center: Point
    private minX: number
    private minY: number
    private maxX: number
    private maxY: number

    constructor(private _points: Array<Point>, private _color: string) {
        this._center = this._points.reduce((prev, cur, i, arr) => {
            return new Point(prev.x + cur.x, prev.y + cur.y);
        }).div(this._points.length)
        this._points.sort(this.comparePoints.bind(this))
        this.setMinMax()
    }
    get points() {
        return this._points;
    }
    get color() {
        return this._color;
    }
    get key(): string {
        return this.points.map(p => p.key).join("/")
    }

    public equals(another: Polygon) {
        if (this.points.length != another.points.length) {
            return false
        }
        for(let i = 0; i < this.points.length; i++) {
            if (!this.points[i].equals(another.points[i])){
                return false
            }
        }
        return true
    }

    /**
     * These codes are from https://stackoverflow.com/a/17490923/2267825
     * @param p
     */
    public isContaining(p: Point): boolean {
        let isInside = false;
        if (p.x < this.minX || p.x > this.maxX || p.y < this.minY || p.y > this.maxY) {
            return false;
        }

        for (let i = 0, j = this.points.length - 1; i < this.points.length; j = i++) {
            if ( (this.points[i].y > p.y) != (this.points[j].y > p.y) &&
                p.x < (this.points[j].x - this.points[i].x) * (p.y - this.points[i].y) / (this.points[j].y - this.points[i].y) + this.points[i].x ) {
                isInside = !isInside;
            }
        }
        return isInside;
    }

    private setMinMax() {
        this.minX = this.points[0].x
        this.maxX = this.points[0].x
        this.minY = this.points[0].y
        this.maxY = this.points[0].y
        for (let n = 1; n < this.points.length; n++) {
            let q = this.points[n];
            this.minX = Math.min(q.x, this.minX);
            this.maxX = Math.max(q.x, this.maxX);
            this.minY = Math.min(q.y, this.minY);
            this.maxY = Math.max(q.y, this.maxY);
        }
    }

    /**
     * These codes are from https://stackoverflow.com/a/6989383/2267825
     * @param a
     * @param b
     * @private
     */
    private comparePoints(a: Point, b: Point): number {
        if (a.equals(b)) {
            return 0
        }
        const internal = () => {
            if (a.x - this._center.x >= 0 && b.x - this._center.x < 0)
                return true;
            if (a.x - this._center.x < 0 && b.x - this._center.x >= 0)
                return false;
            if (a.x - this._center.x == 0 && b.x - this._center.x == 0) {
                if (a.y - this._center.y >= 0 || b.y - this._center.y >= 0)
                    return a.y > b.y;
                return b.y > a.y;
            }

            // compute the cross product of vectors (this._center -> a) x (this._center -> b)
            let det = (a.x - this._center.x) * (b.y - this._center.y) - (b.x - this._center.x) * (a.y - this._center.y);
            if (det < 0)
                return true;
            if (det > 0)
                return false;

            // points a and b are on the same line from the this._center
            // check which point is closer to the this._center
            let d1 = (a.x - this._center.x) * (a.x - this._center.x) + (a.y - this._center.y) * (a.y - this._center.y);
            let d2 = (b.x - this._center.x) * (b.x - this._center.x) + (b.y - this._center.y) * (b.y - this._center.y);
            return d1 > d2;
        }
        return internal()? 1 : -1
    }
}
