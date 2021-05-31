export class WebGLUtil {
    static createShader(gl: WebGLRenderingContext, type: GLenum, source: string) {
        let shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        let success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
        if (success) {
            return shader;
        }

        console.log(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
    }

    static createAttribute(gl: WebGLRenderingContext, program: WebGLProgram, attributeName: String, bufferSource: BufferSource): [GLint, WebGLBuffer] {
        const positionAttributeLocation = gl.getAttribLocation(program, "a_position");
        const positionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, bufferSource, gl.STATIC_DRAW);
        return [positionAttributeLocation, positionBuffer]
    }

    static render(gl: WebGLRenderingContext, program: WebGLProgram, vertexAttributes: GLint[]) {}
}