import type {BaseLogic} from "./drawing/baseLogic";
import {M90Pattern1} from "./drawing/m90Pattern1";
import {M90Pattern2} from "./drawing/m90Pattern2";
import {Point} from "./geometry/point";
import {WebGLUtil} from "./webgl/WebGLUtil";
import RGBA from "./color/RGBA";
import {Triangle} from "./geometry/triangle";

// @ts-ignore
import defaultVertexShaderSource from "./webgl/glsl/vshader.glsl";

// @ts-ignore
import defaultFragmentShaderSource from "./webgl/glsl/fshader.glsl";

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
    private _pattern: PatternType = Pattern.M90P2;
    private patterns: { [name: string]: BaseLogic } = {};
    private _mouseTrackEnabled = false;
    private _width: number;
    private _height: number;
    private _colors: string[];
    private readonly defaultM90P2Options = new CamoPatternM90P2Options(100, 2, false);

    // Constant
    private readonly ctx: CanvasRenderingContext2D
    private readonly gl: WebGLRenderingContext
    private readonly patternMap: { [name: string]: any} = {
        "m90p1": M90Pattern1,
        "m90p2": M90Pattern2
    }

    constructor(private canvas: HTMLCanvasElement, private isWebGL: boolean = false) {
        if (!isWebGL) {
            this.ctx = canvas.getContext("2d");
        } else {
            this.gl = canvas.getContext("webgl");
        }
        this._height = Number(canvas.getAttribute("width"));
        this._width = Number(canvas.getAttribute("height"));
        this._colors = [
            "#6C7C52", // Light green
            "#4A4F44", // Deep green
            "#3B3845", // Dark Gray
            "#B2B096", // Ivory
        ];
    }

    set pattern(value: PatternType) {
        this._pattern = value;
    }

    set mouseTrackEnabled(value: boolean) {
        this._mouseTrackEnabled = value;
    }

    set width(value: number) {
        this._width = value;
    }

    set height(value: number) {
        this._height = value;
    }

    set colors(value: string[]) {
        this._colors = value;
    }

    draw(width: number = undefined, height: number = undefined, colors: string[] = undefined, option: CamoPatternOptions = undefined) {
        if (!this.ctx) return;

        const _width = width || this._width;
        const _height = height || this._height;
        const _colors = colors || this._colors;
        const _option = option || this.defaultM90P2Options;

        this.clearCanvas(_width, _height, _colors);
        this.drawPattern(_width, _height, _colors, _option);
    }

    handleMouseMove(e: MouseEvent) {
        if (this._mouseTrackEnabled && this._pattern === Pattern.M90P2) {
            const logic = this.getPatternLogic(this._pattern);
            logic.handleMouseMove(new Point(e.clientX, e.clientY))
        }
    }

    startAnimate() {
        if (this._pattern !== Pattern.M90P2) {
            console.error(`${this._pattern} doesn't support animation`);
            return;
        }
        this.getPatternLogic(this._pattern).startAnimate();
    }

    stopAnimate() {
        if (this._pattern !== Pattern.M90P2) {
            console.error(`${this._pattern} doesn't support animation`);
            return;
        }
        this.getPatternLogic(this._pattern).stopAnimate();
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

    webGLConfigure(vertexShaderSource: string = undefined, fragmentShaderSource: string = undefined): WebGLProgram {
        if (vertexShaderSource === undefined) {
            vertexShaderSource = defaultVertexShaderSource;
        }
        if (fragmentShaderSource === undefined) {
            fragmentShaderSource = defaultFragmentShaderSource;
        }
        const vertexShader = WebGLUtil.createShader(this.gl, this.gl.VERTEX_SHADER, vertexShaderSource);
        const fragmentShader = WebGLUtil.createShader(this.gl, this.gl.FRAGMENT_SHADER, fragmentShaderSource);
        const program = this.wenGLCreateProgram(this.gl, vertexShader, fragmentShader);
        this.gl.useProgram(program);

        let colorUniformLocation = this.gl.getUniformLocation(program, "u_color");
        this.gl.uniform4f(colorUniformLocation, 1, 0, 0, 1);

        let resolutionUniformLocation = this.gl.getUniformLocation(program, "u_resolution");
        this.gl.uniform2f(resolutionUniformLocation, this.gl.canvas.width, this.gl.canvas.height);

        let t = new Triangle([
            new Point(0, 0),
            new Point(400, 200),
            new Point(200, 400)
        ], undefined, [
            new RGBA(1, 0, 0),
            new RGBA(0, 1, 0),
            new RGBA(0, 0, 1)
        ]);

        const [positionAttributeLocation, positionBuffer] = WebGLUtil.createAttribute2f(
            this.gl, program, "a_position", new Float32Array([]));
        const [vertexColorAttributeLocation, vertexColorBuffer] = WebGLUtil.createAttribute4f(this.gl, program, "a_vertex_color", new Float32Array([]));


        // Rendering
        // Clear canvas
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clearColor(0, 0, 0, 0);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);

        this.drawTriangle2(t, positionBuffer, vertexColorBuffer);

        return program;
    }

    private drawTriangle2(triangle: Triangle, positionBuffer, vertexColorBuffer) {
        // Put vertexColor
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, vertexColorBuffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER,
            new Float32Array(triangle.colors.flatMap(c => c.vec)), this.gl.STATIC_DRAW);

        // Put position
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, positionBuffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER,
            new Float32Array(triangle.points.flatMap(p => p.vec)), this.gl.STATIC_DRAW);

        // Draw
        this.gl.drawArrays(this.gl.TRIANGLES, 0, 3);
    }

    private wenGLCreateProgram(gl: WebGLRenderingContext, vertexShader: WebGLShader, fragmentShader: WebGLShader) {
        const program = gl.createProgram();
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);
        const success = gl.getProgramParameter(program, gl.LINK_STATUS);
        if (success) {
            return program;
        }

        console.log(gl.getProgramInfoLog(program));
        gl.deleteProgram(program);
    }

    private webGLRender(gl: WebGLRenderingContext) {

    }

    private drawPattern(width: number, height: number, colors = undefined, option: CamoPatternOptions) {
        const logic = this.getPatternLogic(this._pattern);
        const _option = option ? option.asDict() : {};
        logic.draw(width, height, colors, _option);
    }

    private clearCanvas(width, height, colors) {
        this.canvas.setAttribute("width", width.toString());
        this.canvas.setAttribute("height", height.toString());
        // this.ctx.fillStyle = colors ?  colors.next().value : Color.getBaseColorFromPalette(color);
        this.ctx.fillStyle = colors[0];
        this.ctx.fillRect(0, 0, width, height);
    }

    private getPatternLogic(pattern: string) {
        if (this.patterns[pattern] === undefined) {
            this.patterns[pattern] = new this.patternMap[pattern](this.ctx);
        }
        return this.patterns[pattern];
    }
}
