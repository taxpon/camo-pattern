import type {BaseLogic} from "./drawing/baseLogic";
import {M90Pattern1} from "./drawing/m90Pattern1";
import {M90Pattern2} from "./drawing/m90Pattern2";
import {Point} from "./geometry/point";

interface CamoPatternOptions {
    asDict(): {[key: string]: any}
}

export const Pattern = {
    M90P1: "m90p1",
    M90P2: "m90p2"
} as const

export type PatternType = typeof Pattern[keyof typeof Pattern];


export class CamoPatternM90P2Options implements CamoPatternOptions{
    constructor(private numPoints: number, private camoDepth: number, private skipPointGeneration: boolean) {}
    asDict(): {[key: string]: any} {
        return {
            "num_points": this.numPoints,
            "camo_depth": this.camoDepth,
            "skipPointGeneration": this.skipPointGeneration
        }
    }
}

export class CamoPattern {
    private _pattern: PatternType
    private patterns: { [name: string]: BaseLogic }
    private _mouseTrackEnabled = false;

    // Constant
    private readonly ctx: CanvasRenderingContext2D
    private readonly patternMap: { [name: string]: any} = {
        "m90p1": M90Pattern1,
        "m90p2": M90Pattern2
    }

    constructor(private canvas: HTMLCanvasElement) {
        this.ctx = canvas.getContext("2d");
    }

    set pattern(value: PatternType) {
        this._pattern = value
    }

    set mouseTrackEnabled(value: boolean) {
        this._mouseTrackEnabled = value
    }

    redraw(colors: string[], option: CamoPatternOptions) {
        if (!this.ctx) return;
        let width = document.documentElement.clientWidth;
        let height = document.documentElement.clientHeight;
        this.clearCanvas(width, height, colors);
        this.draw(width, height, colors, option)
    }

    draw(width: number, height: number, colors = undefined, option: CamoPatternOptions) {
        const logic = this.getPatternLogic(this._pattern);
        const _option = option ? option.asDict() : {};
        logic.draw(width, height, colors, _option);
    }

    clearCanvas(width, height, colors) {
        this.canvas.setAttribute("width", width.toString());
        this.canvas.setAttribute("height", height.toString());
        // this.ctx.fillStyle = colors ?  colors.next().value : Color.getBaseColorFromPalette(color);
        this.ctx.fillStyle = colors[0];
        this.ctx.fillRect(0, 0, width, height);
    }

    handleMouseMove(e: MouseEvent) {
        if (this.mouseTrackEnabled && this._pattern === Pattern.M90P2) {
            const logic = this.getPatternLogic(this._pattern);
            logic.handleMouseMove(new Point(e.clientX, e.clientY))
        }
    }

    download() {
        if (!this.canvas) return;
        let link = document.createElement("a");
        document.body.appendChild(link)
        link.setAttribute('download', 'camo-pattern.png');
        link.setAttribute('href',
            this.canvas.toDataURL("image/png")
                .replace("image/png", "image/octet-stream"));
        link.click();
        document.body.removeChild(link);
    }

    private getPatternLogic(pattern: string) {
        if (this.patterns[pattern] === undefined) {
            this.patterns[pattern] = new this.patternMap[pattern](this.ctx);
        }
        return this.patterns[pattern];
    }
}
