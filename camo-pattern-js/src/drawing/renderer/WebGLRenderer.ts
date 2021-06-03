import type {Renderer} from "./Renderer";
import type {Polygon} from "../../geometry/polygon";

// @ts-ignore
import defaultVertexShaderSource from "../../webgl/glsl/vshader.glsl";

// @ts-ignore
import defaultFragmentShaderSource from "../..//webgl/glsl/fshader.glsl";
import {WebGLUtil} from "../../webgl/WebGLUtil";
import {RGBA} from "../../color/RGBA";

export class WebGLRenderer implements Renderer {

    private positionBuffer: WebGLBuffer;
    private vertexColorBuffer: WebGLBuffer;
    private defaultProgram: WebGLProgram;

    constructor(private gl: WebGLRenderingContext) {
        this.configureWebGL();
    }

    drawPolygon(poly: Polygon, color?: string, strokeColor?: string) {
        // Put vertexColor
        const _colors = poly.points.flatMap(_ => {
            if (color != undefined) {
                return RGBA.fromHex(color).vec;
            } else {
                return RGBA.fromHex(poly.color).vec;
            }
        })
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vertexColorBuffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER,
            new Float32Array(_colors), this.gl.STATIC_DRAW);

        // Put position
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER,
            new Float32Array(poly.points.flatMap(p => p.vec)), this.gl.STATIC_DRAW);

        // Draw
        this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, poly.points.length);
    }

    clearCanvas() {
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clearColor(0, 0, 0, 0);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
        this.configureUniform(this.defaultProgram);
    }

    private configureWebGL(vertexShaderSource: string = undefined, fragmentShaderSource: string = undefined) {
        if (vertexShaderSource === undefined) {
            vertexShaderSource = defaultVertexShaderSource;
        }
        if (fragmentShaderSource === undefined) {
            fragmentShaderSource = defaultFragmentShaderSource;
        }

        // Create Program
        const vertexShader = WebGLUtil.createShader(this.gl, this.gl.VERTEX_SHADER, vertexShaderSource);
        const fragmentShader = WebGLUtil.createShader(this.gl, this.gl.FRAGMENT_SHADER, fragmentShaderSource);
        this.defaultProgram = this.wenGLCreateProgram(vertexShader, fragmentShader);
        this.gl.useProgram(this.defaultProgram);

        // Configure variables;
        this.configureUniform(this.defaultProgram);
        this.configureAttribute(this.defaultProgram);

        // Clear canvas
        this.clearCanvas();
    }

    private wenGLCreateProgram(vertexShader: WebGLShader, fragmentShader: WebGLShader): WebGLProgram {
        const program = this.gl.createProgram();
        this.gl.attachShader(program, vertexShader);
        this.gl.attachShader(program, fragmentShader);
        this.gl.linkProgram(program);
        const success = this.gl.getProgramParameter(program, this.gl.LINK_STATUS);
        if (success) {
            return program;
        }
        this.gl.deleteProgram(program);
    }

    private configureUniform(program: WebGLProgram) {
        let resolutionUniformLocation = this.gl.getUniformLocation(program, "u_resolution");
        this.gl.uniform2f(resolutionUniformLocation, this.gl.canvas.width, this.gl.canvas.height);
    }

    private configureAttribute(program: WebGLProgram) {
        const [positionAttributeLocation, positionBuffer] = WebGLUtil.createAttribute2f(
            this.gl, program, "a_position", new Float32Array([]));
        const [vertexColorAttributeLocation, vertexColorBuffer] = WebGLUtil.createAttribute4f(
            this.gl, program, "a_vertex_color", new Float32Array([]));
        this.positionBuffer = positionBuffer;
        this.vertexColorBuffer = vertexColorBuffer;
    }
}
