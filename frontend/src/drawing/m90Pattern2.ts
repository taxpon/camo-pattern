import {BaseLogic} from "./baseLogic";
import {Color} from "../color";
import {State} from "../model/state";
import {Point} from "../geometry/point";
import {Circle} from "../geometry/circle";
import {Util} from "../util";
import {Triangle} from "../geometry/triangle";
import {StateKey} from "../model/stateKey";
import Timeout = NodeJS.Timeout;
import {Polygon} from "../geometry/polygon";
import {IndexGenerator} from "../util/indexGenerator";

export class M90Pattern2 extends BaseLogic {

    private points: Array<Point>
    private triangles: Array<Triangle>
    private triangleAreas: Array<number>
    private triangleAreaMedian: number
    private edgeMap: {[key: string]: Array<Polygon>}
    private visitMap: {[key: string]: boolean}

    // For mouse interaction
    private activeTriangle = new Array<Triangle>(2)  // Current, Prev
    private adjacentPolygons: {[key: string]: Polygon}

    // For animation
    private interval: Timeout

    constructor(ctx) {
        super(ctx);
        window.onmousedown =  this.debugAdjacent.bind(this)
    }

    private debugAdjacent() {
        console.log(this.adjacentPolygons, this.activeTriangle[0].area)
    }

    public draw(width: number, height: number) {
        this.points = []
        const unit = 500
        const xGrid = Math.ceil(width / unit)
        const yGrid = Math.ceil(height / unit)

        IndexGenerator.reset()

        for(let i = 0; i < xGrid + 1; i++) {
            for(let j = 0; j < yGrid + 1; j++) {
                this.points.push(new Point(
                    (width / xGrid) * i, (height / yGrid) * j, IndexGenerator.incrementAndGet()
                ))
            }
        }

        let numPoints = State.getState(StateKey.NUM_POINTS) - 1
        Util.range(0, numPoints).forEach((_, i) => {
            this.points.push(new Point(Math.random() * width, Math.random() * height, IndexGenerator.incrementAndGet()))
        })

        // Circumcircle
        const r = Math.sqrt((width * width + height * height)) / 2
        const center = new Point(width / 2, height/2)
        this.drawCircle(new Circle(center, r, "rgba(1, 1, 1, 0)"))

        // Circumtriangle
        const p1 = new Point(center.x - Math.sqrt(3) * r,center.y - r, IndexGenerator.incrementAndGet())
        const p2 = new Point(center.x + Math.sqrt(3) * r,center.y - r, IndexGenerator.incrementAndGet())
        const p3 = new Point(center.x,center.y + r * 2, IndexGenerator.incrementAndGet())
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
                .filter(x   => x)
                .forEach(edge => {
                    triangles.push(new Triangle([edge.start, edge.end, p], colIter.next().value))
                })
        })

        this.triangles = triangles.filter(x => x)
        this.triangleAreas = this.triangles.map(t => t.area).sort((a, b) => a - b);
        this.triangleAreaMedian = this.triangleAreas[Math.floor(this.triangleAreas.length / 2)]

        this.buildEdgeMap()
        this.visitMap = {}

        for (let i = 0; i < this.triangles.length; i++) {
            const triangle = this.triangles[i]
            if (this.visitMap[triangle.keyIndex]) {
                continue
            }
            this.makeCamouflage(triangle, colIter.next().value, State.getState(StateKey.CAMO_DEPTH))
        }
    }

    private makeCamouflage(triangle: Triangle, color: string, depth: number, originalDepth: number = null) {
        originalDepth = originalDepth || depth
        triangle.color = color
        this.drawPolygon(triangle, color)
        this.visitMap[triangle.keyIndex] = true
        if (depth == 0) {
            return
        }
        let alone = depth === originalDepth
        let version = "v2"

        triangle.edges.forEach((edge, j) => {
            const adjacent = this.edgeMap[edge.keyIndex]
                .filter(ep => !ep.equals(triangle))[0] as Triangle

            if (adjacent && !this.visitMap[adjacent.keyIndex]) {
                alone = false
                if (version === "v1") {
                    if (Math.random() < (depth / originalDepth)) {
                        this.makeCamouflage(adjacent, color, depth - 1, originalDepth)
                    }
                } else if (version === "v2") {
                    if (adjacent.area < 5000) { // this.triangleAreaMedian) {
                        this.makeCamouflage(adjacent, color, depth - 1, originalDepth)
                    } else {
                        if (Math.random() < (depth / originalDepth)) {
                            this.makeCamouflage(adjacent, color, depth - 1, originalDepth)
                        }
                    }
                }
            }
        })
        if (alone) {
            console.log("I am alone", triangle, triangle.area)
        }

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
            } else if (this.adjacentPolygons[triangle.keyIndex]) {
               this.drawPolygon(triangle, "blue")
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

        // Overwrite adjacent polygons
        Object.keys(this.adjacentPolygons).forEach(k => {
            this.drawPolygon(this.adjacentPolygons[k], "blue")
        })
    }

    private buildEdgeMap() {
        this.edgeMap = {}
        this.triangles.forEach(triangle => {
            triangle.edges.forEach(e => {
                if (this.edgeMap[e.keyIndex] === undefined) {
                    this.edgeMap[e.keyIndex] = []
                }
                this.edgeMap[e.keyIndex].push(triangle)
            })
            this.drawPolygon(triangle)
        })
    }

    private updateActiveTriangle(triangle: Triangle) {
        if (this.isActiveTriangle(triangle)) {
            // The same triangle, skip updating
            return
        }
        this.activeTriangle[1] = this.activeTriangle[0]
        this.activeTriangle[0] = triangle
        this.adjacentPolygons = {}

        // Update adjacent polygons
        for(let i = 0; i < triangle.edges.length; i++) {
            const edgePolygons = this.edgeMap[triangle.edges[i].keyIndex]
            if (edgePolygons && edgePolygons.length > 1) {
                edgePolygons.forEach(ep => {
                    if (!ep.equals(triangle)) {
                        this.adjacentPolygons[ep.keyIndex] = ep
                    }
                })
            }
        }
    }

    private isActiveTriangle(triangle: Triangle) {
        return this.activeTriangle[0] && this.activeTriangle[0].equals(triangle)
    }


}
