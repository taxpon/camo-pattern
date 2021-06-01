export default class RGBA {
    constructor(private _r: number, private _b: number, private _g: number, private _a: number = 1) {
    }

    get r() {return this._r;}
    get g() {return this._g;}
    get b() {return this._b;}
    get vec() {return [this._r, this._g, this._b, this._a];}
}