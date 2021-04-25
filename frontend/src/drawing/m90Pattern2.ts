import {BaseLogic} from "./baseLogic";
import {Color} from "../color";
import {State} from "../model/state";
import {Point} from "../geometry/point";
import {Circle} from "../geometry/circle";
import {Util} from "../util";
import {Triangle} from "../geometry/triangle";
import {StateKey} from "../model/stateKey";
import Timeout = NodeJS.Timeout;

export class M90Pattern2 extends BaseLogic {

    private points: Array<Point>
    private triangles: Array<Triangle>
    private activeTriangle = new Array<Triangle>(2)  // Current, Prev
    private interval: Timeout

    public draw(width: number, height: number) {
        this.points = []
        this.points.concat([
            new Point(0, 0),
            new Point(width, 0),
            new Point(0, height),
            new Point(width, height)
        ])
        let numPoints = State.getState(StateKey.NUM_POINTS) - 1
        Util.range(0, numPoints).forEach(_ => {
            this.points.push(new Point(Math.random() * width, Math.random() * height))
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
        colIter.next()

        let triangles = [baseTriangle]
        this.points.forEach((p, k) => {
            let edges = []
            // this.drawCircle(new Circle(p, 10, "red"))
            triangles.forEach((triangle, i) => {
                if (triangle.getCircumcircle().isContaining(p)) {
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

        this.triangles = triangles
        this.triangles.forEach(triangle => {
            this.drawPolygon(triangle)
        })
    }

    public startAnimate() {
        this.interval = setInterval(this.animate.bind(this), 50)
    }

    public stopAnimate() {
        clearInterval(this.interval)
    }

    public animate() {
        const factor = 2
        this.points.forEach((point, i) => {
            this.points[i].x += (Math.random() - 0.5) * factor;
            this.points[i].y += (Math.random() - 0.5) * factor;
        })
        this.triangles.forEach(triangle => {
            if (this.isActiveTriangle(triangle)) {
                this.drawPolygon(triangle, "red")
            } else {
                this.drawPolygon(triangle)
            }
        })
    }

    public handleMouseMove(p: Point) {
        this.triangles.forEach(triangle => {
            if (triangle.isContaining(p)) {
                this.updateActiveTriangle(triangle)
                this.drawPolygon(triangle, "red")
            } else {
                this.drawPolygon(triangle)
            }
        })
    }

    private updateActiveTriangle(triangle: Triangle) {
        if (this.isActiveTriangle(triangle)) {
            // The same triangle, skip updating
            return
        }
        this.activeTriangle[1] = this.activeTriangle[0]
        this.activeTriangle[0] = triangle
    }

    private isActiveTriangle(triangle: Triangle) {
        return this.activeTriangle[0] && this.activeTriangle[0].equals(triangle)
    }


}
