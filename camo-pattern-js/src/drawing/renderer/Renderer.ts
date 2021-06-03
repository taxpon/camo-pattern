import type {Polygon} from "../../geometry/polygon";

export interface Renderer {
    drawPolygon(poly: Polygon, color?: string, strokeColor?: string);
    clearCanvas();
}
