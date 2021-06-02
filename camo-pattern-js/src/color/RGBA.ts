export default class RGBA {
    constructor(private _r: number, private _g: number, private _b: number, private _a: number = 1) {
    }

    get r() {return this._r;}
    get g() {return this._g;}
    get b() {return this._b;}
    get vec() {return [this._r, this._g, this._b, this._a];}

    static fromHex(hex: string): RGBA {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        if (result === null) {
            console.log("#@@@@@", hex);
        }
        return new RGBA(
            parseInt(result[1], 16),
            parseInt(result[2], 16),
            parseInt(result[3], 16)
        );
    }
}
