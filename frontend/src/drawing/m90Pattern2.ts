import {BaseLogic} from "./baseLogic";
import {Color} from "../color";
import {State} from "../model/state";
import {Polygon} from "../geometry/polygon";
import {Point} from "../geometry/point";
import {Circle} from "../geometry/circle";
import {Util} from "../util";
import {Triangle} from "../geometry/triangle";
import {StateKey} from "../model/stateKey";

export class M90Pattern2 extends BaseLogic {



    public draw(width: number, height: number) {
        let points = [
            new Point(0, 0),
            new Point(width, 0),
            new Point(0, height),
            new Point(width, height)
        ]

        let numPoints = State.getState(StateKey.NUM_POINTS) - 1
        Util.range(0, numPoints).forEach(_ => {
            points.push(new Point(Math.random() * width, Math.random() * height))
        })

        // Circumcircle
        const r = Math.sqrt((width * width + height * height)) / 2
        const center = new Point(width / 2, height/2)
        this.drawCircle(new Circle(center, r, "rgba(1, 1, 1, 0)"))

        // Circumtriangle
        const p1 = new Point(center.x - Math.sqrt(3) * r,center.y - r)
        const p2 = new Point(center.x + Math.sqrt(3) * r,center.y - r)
        const p3 = new Point(center.x,center.y + r * 2)
        const baseTriangle = new Triangle([p1, p2, p3], "pink")

        let colIter = Color.colorGeneratorFromPalette(State.getState(StateKey.PALETTE, "green"));
        let triangles = [baseTriangle]
        points.forEach((p, k) => {
            let edges = []
            // this.drawCircle(new Circle(p, 10, "red"))
            triangles.forEach((triangle, i) => {
                if (triangle.getCircumcircle().isIncluding(p)) {
                    edges = edges.concat(triangle.edges)
                    delete triangles[i]  // TODO: Optimization
                }
            })

            edges
                .map((edge, i) => {
                    for (let j = 0; j < edges.length; j++ ){
                        if (i != j && edge.equals(edges[j])) {
                            return null
                        }
                    }
                    return edge
                })
                .filter(x => x)
                .forEach(edge => {
                    triangles.push(new Triangle([edge.start, edge.end, p], colIter.next().value))
                })
        })

        triangles.forEach(triangle => {
            this.drawPolygon(triangle)
        })
    }
}
