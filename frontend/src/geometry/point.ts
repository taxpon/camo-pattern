import Dict = NodeJS.Dict;

export class Point {

    private static _cache: {[id: string]: Point} = {}

    constructor(private _x: number, private _y: number) {
    }

    get coord(): [number, number] {
        return [this._x, this._y]
    }

    get x(): number {
        return this._x;
    }

    set x(val) {
        this._x = val
    }

    get y(): number {
        return this._y;
    }

    set y(val) {
        this._y = val
    }

    public dist(another: Point): number {
        return Math.sqrt(Math.pow(this.x - another.x, 2) + Math.pow(this.y - another.y, 2))
    }

    public equals(another: Point): boolean {
        return this.x === another.x && this.y === another.y
    }

    public static of(x: number, y: number): Point {
        let key = `${x},${y}`;
        if (this._cache[key] === undefined) {
            this._cache[key] = new Point(x, y);
        }
        return this._cache[key]
    }

    public static randomOf(x: number = 0, y: number = 0, width: number, height: number, ) {
        return Point.of(
            x + Math.random() * width,
            y + Math.random() * height,
        )
    }

    public static randomPointsOf(x: number, y: number, r: number, num: number): Point[] {
        let rads = []
        for (let i = 0; i < num; i++) {
            rads.push(Math.PI * 2 * Math.random())
        }
        rads.sort()
        return rads.map((val) => {
            return Point.of(
                x + r * Math.cos(val),
                y + r * Math.sin(val),
            )
        })
    }

    public static randomPoints2Of(x: number, y: number, r: number, num: number): Point[] {
        let rads = []
        let shift = Math.PI * 2 * Math.random();
        for (let i = 0; i < num; i++) {
            let rnd = Math.random() * 1.5 - 0.75;
            let rad = (Math.PI * 2 / num) * i + rnd
            rads.push(rad + shift)
        }
        rads.sort()
        return rads.map((val) => {
            return Point.of(
                x + r * Math.cos(val),
                y + r * Math.sin(val),
            )
        })
    }
}
