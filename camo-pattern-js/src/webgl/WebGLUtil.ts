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

    static createAttribute2f(gl: WebGLRenderingContext, program: WebGLProgram,
                           attributeName: string, bufferSource: BufferSource): [GLint, WebGLBuffer] {
        const attrLocation = gl.getAttribLocation(program, attributeName);
        const glBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, glBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, bufferSource, gl.STATIC_DRAW);
        gl.enableVertexAttribArray(attrLocation);
        gl.vertexAttribPointer(
            attrLocation, 2, gl.FLOAT, false, 0, 0);
        return [attrLocation, glBuffer]
    }

    static createAttribute4f(gl: WebGLRenderingContext, program: WebGLProgram,
                             attributeName: string, bufferSource: BufferSource): [GLint, WebGLBuffer] {
        const attrLocation = gl.getAttribLocation(program, attributeName);
        const glBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, glBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, bufferSource, gl.STATIC_DRAW);
        gl.enableVertexAttribArray(attrLocation);
        gl.vertexAttribPointer(
            attrLocation, 4, gl.FLOAT, false, 0, 0);
        return [attrLocation, glBuffer]
    }


    static render(gl: WebGLRenderingContext, program: WebGLProgram, vertexAttributes: GLint[]) {}
}