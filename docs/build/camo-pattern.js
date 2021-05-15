var app = (function (exports) {
    'use strict';

    class BaseLogic {
        constructor(ctx) {
            this.ctx = ctx;
        }
        drawCircle(circle) {
            this.ctx.fillStyle = circle.color;
            this.ctx.beginPath();
            this.ctx.arc(circle.center.x, circle.center.y, circle.radius, 0, Math.PI * 2, true);
            this.ctx.closePath();
            this.ctx.fill();
        }
        drawPolygon(poly, color = undefined, strokeColor = undefined) {
            if (color) {
                this.ctx.fillStyle = color;
                this.ctx.strokeStyle = strokeColor || color;
            }
            else {
                this.ctx.fillStyle = poly.color;
                this.ctx.strokeStyle = poly.strokeColor || poly.color;
            }
            this.ctx.beginPath();
            poly.points.forEach((val, index) => {
                if (index === 0) {
                    this.ctx.moveTo(...val.coord);
                }
                else {
                    this.ctx.lineTo(...val.coord);
                }
            });
            this.ctx.closePath();
            this.ctx.stroke();
            this.ctx.fill();
        }
    }

    class Point {
        constructor(_x, _y, _index = null) {
            this._x = _x;
            this._y = _y;
            this._index = _index;
        }
        get coord() {
            return [this._x, this._y];
        }
        get x() {
            return this._x;
        }
        set x(val) {
            this._x = val;
        }
        get y() {
            return this._y;
        }
        set y(val) {
            this._y = val;
        }
        get key() {
            return `${this.x},${this.y}`;
        }
        get hasIndex() {
            return !!this._index;
        }
        get keyIndex() {
            return this._index;
        }
        dist(another) {
            return Math.sqrt(Math.pow(this.x - another.x, 2) + Math.pow(this.y - another.y, 2));
        }
        equals(another) {
            return this.x === another.x && this.y === another.y;
        }
        div(a) {
            this.x /= a;
            this.y /= a;
            return this;
        }
        static of(x, y) {
            let key = `${x},${y}`;
            if (this._cache[key] === undefined) {
                this._cache[key] = new Point(x, y);
            }
            return this._cache[key];
        }
        static randomOf(x = 0, y = 0, width, height) {
            return Point.of(x + Math.random() * width, y + Math.random() * height);
        }
        static randomPointsOf(x, y, r, num) {
            let rads = [];
            for (let i = 0; i < num; i++) {
                rads.push(Math.PI * 2 * Math.random());
            }
            rads.sort();
            return rads.map((val) => {
                return Point.of(x + r * Math.cos(val), y + r * Math.sin(val));
            });
        }
        static randomPoints2Of(x, y, r, num) {
            let rads = [];
            let shift = Math.PI * 2 * Math.random();
            for (let i = 0; i < num; i++) {
                let rnd = Math.random() * 1.5 - 0.75;
                let rad = (Math.PI * 2 / num) * i + rnd;
                rads.push(rad + shift);
            }
            rads.sort();
            return rads.map((val) => {
                return Point.of(x + r * Math.cos(val), y + r * Math.sin(val));
            });
        }
    }
    Point._cache = {};

    class Polygon {
        constructor(_points, _color, _strokeColor = undefined) {
            this._points = _points;
            this._color = _color;
            this._strokeColor = _strokeColor;
            this._center = this._points.reduce((prev, cur, i, arr) => {
                return new Point(prev.x + cur.x, prev.y + cur.y);
            }).div(this._points.length);
            this._points.sort(this.comparePoints.bind(this));
            this.setMinMax();
        }
        get points() {
            return this._points;
        }
        get color() {
            return this._color;
        }
        set color(val) {
            this._color = val;
        }
        get strokeColor() {
            return this._strokeColor;
        }
        set strokeColor(val) {
            this._strokeColor = val;
        }
        get key() {
            return this.points.map(p => p.key).join("/");
        }
        get keyIndex() {
            return this.points.map(p => p.keyIndex.toString()).join("/");
        }
        equals(another) {
            if (this.points.length != another.points.length) {
                return false;
            }
            for (let i = 0; i < this.points.length; i++) {
                if (!this.points[i].equals(another.points[i])) {
                    return false;
                }
            }
            return true;
        }
        /**
         * These codes are from https://stackoverflow.com/a/17490923/2267825
         * @param p
         */
        isContaining(p) {
            let isInside = false;
            if (p.x < this.minX || p.x > this.maxX || p.y < this.minY || p.y > this.maxY) {
                return false;
            }
            for (let i = 0, j = this.points.length - 1; i < this.points.length; j = i++) {
                if ((this.points[i].y > p.y) != (this.points[j].y > p.y) &&
                    p.x < (this.points[j].x - this.points[i].x) * (p.y - this.points[i].y) / (this.points[j].y - this.points[i].y) + this.points[i].x) {
                    isInside = !isInside;
                }
            }
            return isInside;
        }
        setMinMax() {
            this.minX = this.points[0].x;
            this.maxX = this.points[0].x;
            this.minY = this.points[0].y;
            this.maxY = this.points[0].y;
            for (let n = 1; n < this.points.length; n++) {
                let q = this.points[n];
                this.minX = Math.min(q.x, this.minX);
                this.maxX = Math.max(q.x, this.maxX);
                this.minY = Math.min(q.y, this.minY);
                this.maxY = Math.max(q.y, this.maxY);
            }
        }
        /**
         * These codes are from https://stackoverflow.com/a/6989383/2267825
         * @param a
         * @param b
         * @private
         */
        comparePoints(a, b) {
            if (a.equals(b)) {
                return 0;
            }
            const internal = () => {
                if (a.x - this._center.x >= 0 && b.x - this._center.x < 0)
                    return true;
                if (a.x - this._center.x < 0 && b.x - this._center.x >= 0)
                    return false;
                if (a.x - this._center.x == 0 && b.x - this._center.x == 0) {
                    if (a.y - this._center.y >= 0 || b.y - this._center.y >= 0)
                        return a.y > b.y;
                    return b.y > a.y;
                }
                // compute the cross product of vectors (this._center -> a) x (this._center -> b)
                let det = (a.x - this._center.x) * (b.y - this._center.y) - (b.x - this._center.x) * (a.y - this._center.y);
                if (det < 0)
                    return true;
                if (det > 0)
                    return false;
                // points a and b are on the same line from the this._center
                // check which point is closer to the this._center
                let d1 = (a.x - this._center.x) * (a.x - this._center.x) + (a.y - this._center.y) * (a.y - this._center.y);
                let d2 = (b.x - this._center.x) * (b.x - this._center.x) + (b.y - this._center.y) * (b.y - this._center.y);
                return d1 > d2;
            };
            return internal() ? 1 : -1;
        }
    }

    class M90Pattern1 extends BaseLogic {
        startAnimate() {
        }
        stopAnimate() {
        }
        handleMouseMove(p) {
        }
        draw(width, height, colIter) {
            // let colIter = Color.colorGeneratorFromPalette(State.getState("palette", "green"));
            const unit = 500;
            let xNum = Math.ceil(width / unit);
            let yNum = Math.ceil(height / unit);
            for (let i = 0; i < xNum; i++) {
                for (let j = 0; j < yNum; j++) {
                    let x = unit * i;
                    let y = unit * j;
                    let curr = colIter.next();
                    let num = 4;
                    let rnd = Math.random();
                    if (rnd > 0.66) {
                        num = 5;
                    }
                    else if (rnd > 0.33) {
                        num = 6;
                    }
                    let rnd2 = Math.random();
                    if (rnd2 > 0.8) {
                        continue;
                    }
                    let p2 = new Polygon(Point.randomPoints2Of(x, y, unit, num), curr.value);
                    this.drawPolygon(p2);
                }
            }
            const unit2 = 200;
            xNum = Math.ceil(width / unit2);
            yNum = Math.ceil(height / unit2);
            for (let i = 0; i < xNum; i++) {
                for (let j = 0; j < yNum; j++) {
                    let x = unit2 * i;
                    let y = unit2 * j;
                    let curr = colIter.next();
                    let num = 4;
                    let rnd = Math.random();
                    if (rnd > 0.66) {
                        num = 5;
                    }
                    else if (rnd > 0.33) {
                        num = 6;
                    }
                    let rnd2 = Math.random();
                    if (rnd2 > 0.8) {
                        continue;
                    }
                    let p2 = new Polygon(Point.randomPoints2Of(x, y, unit2, num), curr.value);
                    this.drawPolygon(p2);
                }
            }
        }
    }

    class Circle {
        constructor(_center, _radius, _color) {
            this._center = _center;
            this._radius = _radius;
            this._color = _color;
        }
        get center() {
            return this._center;
        }
        get radius() {
            return this._radius;
        }
        get color() {
            return this._color;
        }
        isContaining(p) {
            return this.center.dist(p) < this.radius;
        }
    }

    class Util {
    }
    Util.range = (start, end) => Array.from({ length: (end - start + 1) }, (v, k) => k + start);

    class Edge {
        constructor(p1, p2) {
            if (p1.hasIndex && p2.hasIndex) {
                if (p1.keyIndex < p2.keyIndex) {
                    this._start = p1;
                    this._end = p2;
                }
                else {
                    this._start = p2;
                    this._end = p1;
                }
            }
            else {
                if (p1.x <= p2.x) {
                    this._start = p1;
                    this._end = p2;
                }
                else {
                    this._start = p2;
                    this._end = p1;
                }
            }
        }
        get start() {
            return this._start;
        }
        get end() {
            return this._end;
        }
        get key() {
            return `${this.start.key}/${this.end.key}`;
        }
        get keyIndex() {
            return `${this.start.keyIndex}-${this.end.keyIndex}`;
        }
        equals(another) {
            return (this._start.equals(another._start) && this._end.equals(another._end)) ||
                (this._start.equals(another._end) && this._end.equals(another._start));
        }
    }

    class Triangle extends Polygon {
        constructor(_points, _color) {
            if (_points.length != 3) {
                throw Error("Triangle must have 3 points");
            }
            super(_points, _color);
        }
        get area() {
            if (!this._area) {
                this._area = Math.abs(0.5 *
                    (this.points[0].x * (this.points[1].y - this.points[2].y)
                        + this.points[1].x * (this.points[2].y - this.points[0].y)
                        + this.points[2].x * (this.points[0].y - this.points[1].y)));
            }
            return this._area;
        }
        get edges() {
            if (!this._edges) {
                this._edges = [];
                this._edges.push(new Edge(this.points[0], this.points[1]));
                this._edges.push(new Edge(this.points[1], this.points[2]));
                this._edges.push(new Edge(this.points[2], this.points[0]));
            }
            return this._edges;
        }
        getCircumcircle() {
            if (!this._circumcircle) {
                const x1 = this.points[0].x;
                const y1 = this.points[0].y;
                const x2 = this.points[1].x;
                const y2 = this.points[1].y;
                const x3 = this.points[2].x;
                const y3 = this.points[2].y;
                const x1pow2 = Math.pow(x1, 2);
                const x2pow2 = Math.pow(x2, 2);
                const x3pow2 = Math.pow(x3, 2);
                const y1pow2 = Math.pow(y1, 2);
                const y2pow2 = Math.pow(y2, 2);
                const y3pow2 = Math.pow(y3, 2);
                const c = 2 * ((x2 - x1) * (y3 - y1) - (y2 - y1) * (x3 - x1));
                const x = ((y3 - y1) * (x2pow2 - x1pow2 + y2pow2 - y1pow2) + (y1 - y2) * (x3pow2 - x1pow2 + y3pow2 - y1pow2)) / c;
                const y = ((x1 - x3) * (x2pow2 - x1pow2 + y2pow2 - y1pow2) + (x2 - x1) * (x3pow2 - x1pow2 + y3pow2 - y1pow2)) / c;
                const r = Math.sqrt(Math.pow(x1 - x, 2) + Math.pow(y1 - y, 2));
                this._circumcircle = new Circle(new Point(x, y), r, "white");
            }
            return this._circumcircle;
        }
    }

    class IndexGenerator {
        static incrementAndGet() {
            if (this._index === undefined) {
                this._index = 0;
            }
            return this._index++;
        }
        static reset() {
            this._index = 0;
        }
    }

    class ColorPalette {
        constructor(_id, _name, _colors) {
            this._id = _id;
            this._name = _name;
            this._colors = _colors;
        }
        get id() {
            return this._id;
        }
        get name() {
            return this._name;
        }
        get colors() {
            return this._colors;
        }
    }
    class Color {
        static loadDefaultPalettes() {
            Color._defaultPalettes = new Map();
            Color._defaultPalettes.set("green", new ColorPalette("green", "Green", [
                "#6C7C52",
                "#4A4F44",
                "#3B3845",
                "#B2B096", // Ivory
            ]));
            // Color._defaultPalettes.set(
            //     "blue",
            //     new ColorPalette("blue", "Blue", [
            //         "#3770DB",
            //         "#172F5C",
            //         "#7B9FE0",
            //         "#32415C",
            //         "#2A56A8",
            //     ]),
            // )
            Color._defaultPalettes.set("desert", new ColorPalette("desert", "Desert", [
                "#B8A79B",
                "#72625D",
                "#A69887",
                "#6D4C2D"
            ]));
            // Color._defaultPalettes.set(
            //     "orange",
            //     new ColorPalette("orange", "Orange", [
            //         "#FF824D",
            //         "#782400",
            //         "#F74A00",
            //         "#7A442C",
            //         "#C73B00"
            //     ]),
            // )
            Color._defaultPalettes.set("uc1", new ColorPalette("uc1", "UC1", [
                // https://store.undercoverism.com/undercovermen/item/detail/1_1_UC1A4508-4_1/Q02
                "#C4B9B5",
                "#683A31",
                "#4A5F56"
            ]));
            Color._defaultPalettes.set("uc2", new ColorPalette("uc2", "UC2", [
                // https://store.undercoverism.com/undercovermen/item/detail/1_1_UC1A4508-4_1/Q02
                "#262527",
                "#513A3E",
                "#424B50"
            ]));
            // Color._defaultPalettes.set(
            //     "bw",
            //     new ColorPalette("bw", "BW", [
            //         // https://store.undercoverism.com/undercovermen/item/detail/1_1_UC1A4508-4_1/Q02
            //         "#FFFFFF",
            //         "#000000"
            //     ]),
            // )
        }
        static loadUserPalettes() {
            this._userPalettes = new Map();
            const rawUserPalettes = JSON.parse(window.localStorage.getItem("userPalettes") || "[]");
            rawUserPalettes.forEach(val => {
                const palette = new ColorPalette(val["_id"], val["_name"], val["_colors"]);
                this._userPalettes.set(palette.id, palette);
            });
        }
        static saveUserPalettes() {
            let serializableUserPalette = [];
            this._userPalettes.forEach(value => {
                serializableUserPalette.push(value);
            });
            window.localStorage.setItem("userPalettes", JSON.stringify(serializableUserPalette));
        }
        static setUserPalette(palette) {
            this._userPalettes.set(palette.id, palette);
            this.saveUserPalettes();
        }
        static deleteUserPalette(id) {
            this._userPalettes.delete(id);
            this.saveUserPalettes();
        }
        static getDefaultPalettes() {
            return this._defaultPalettes;
        }
        static getUserPalettes() {
            return this._userPalettes;
        }
        static getBaseColorFromPalette(color) {
            return (this._defaultPalettes.get(color) || this._userPalettes.get(color)).colors[0];
        }
        static colorGeneratorFromPalette(color) {
            return this.colorGenerator((this._defaultPalettes.get(color) || this._userPalettes.get(color)).colors);
        }
        static *colorGenerator(colors) {
            for (;;) {
                let indices = this.range(0, colors.length - 1);
                for (let i = indices.length; 1 < i; i--) {
                    let k = Math.floor(Math.random() * i);
                    [indices[k], indices[i - 1]] = [indices[i - 1], indices[k]];
                }
                for (let i = 0; i < indices.length; i++) {
                    yield colors[indices[i]];
                }
            }
        }
        static *colorGenerator2(colors) {
            for (;;) {
                let indices = this.range(0, colors.length - 1);
                for (let i = indices.length; 1 < i; i--) {
                    let k = Math.floor(Math.random() * i);
                    [indices[k], indices[i - 1]] = [indices[i - 1], indices[k]];
                }
                for (let i = 0; i < indices.length; i++) {
                    yield [colors[indices[i]], i];
                }
            }
        }
    }
    Color.ctor = (() => {
        Color.loadDefaultPalettes();
        Color.loadUserPalettes();
    })();
    Color.range = (start, end) => Array.from({ length: (end - start + 1) }, (v, k) => k + start);

    class M90Pattern2 extends BaseLogic {
        constructor(ctx) {
            super(ctx);
            // For mouse interaction
            this.activeTriangle = new Array(2); // Current, Prev
        }
        draw(width, height, colors, options) {
            let colIter;
            if (Array.isArray(colors)) {
                colIter = Color.colorGenerator(colors);
            }
            else {
                colIter = colors;
            }
            this.points = [];
            const unit = 500;
            const xGrid = Math.ceil(width / unit);
            const yGrid = Math.ceil(height / unit);
            if (options['skipPointGeneration'] && this.triangles) {
                this.visitMap = {};
                for (let i = 0; i < this.triangles.length; i++) {
                    const triangle = this.triangles[i];
                    if (this.visitMap[triangle.keyIndex]) {
                        continue;
                    }
                    this.makeCamouflage(triangle, colIter.next().value, options["camo_depth"]);
                }
                return;
            }
            IndexGenerator.reset();
            for (let i = 0; i < xGrid + 1; i++) {
                for (let j = 0; j < yGrid + 1; j++) {
                    this.points.push(new Point((width / xGrid) * i, (height / yGrid) * j, IndexGenerator.incrementAndGet()));
                }
            }
            // let numPoints = State.getState(StateKey.NUM_POINTS) - 1
            let numPoints = options["num_points"] - 1;
            Util.range(0, numPoints).forEach((_, i) => {
                this.points.push(new Point(Math.random() * width, Math.random() * height, IndexGenerator.incrementAndGet()));
            });
            // Circumcircle
            const r = Math.sqrt((width * width + height * height)) / 2;
            const center = new Point(width / 2, height / 2);
            this.drawCircle(new Circle(center, r, "rgba(1, 1, 1, 0)"));
            // Circumtriangle
            const p1 = new Point(center.x - Math.sqrt(3) * r, center.y - r, IndexGenerator.incrementAndGet());
            const p2 = new Point(center.x + Math.sqrt(3) * r, center.y - r, IndexGenerator.incrementAndGet());
            const p3 = new Point(center.x, center.y + r * 2, IndexGenerator.incrementAndGet());
            const baseTriangle = new Triangle([p1, p2, p3], "pink");
            colIter.next();
            let triangles = [baseTriangle];
            this.points.forEach((p, k) => {
                let edges = [];
                // this.drawCircle(new Circle(p, 10, "red"))
                triangles.forEach((triangle, i) => {
                    if (triangle.getCircumcircle().isContaining(p)) {
                        edges = edges.concat(triangle.edges);
                        delete triangles[i]; // TODO: Optimization
                    }
                });
                edges
                    .map((edge, i) => {
                    for (let j = 0; j < edges.length; j++) {
                        if (i != j && edge.equals(edges[j])) {
                            return null;
                        }
                    }
                    return edge;
                })
                    .filter(x => x)
                    .forEach(edge => {
                    triangles.push(new Triangle([edge.start, edge.end, p], colIter.next().value));
                });
            });
            this.triangles = triangles.filter(x => x);
            this.triangleAreas = this.triangles.map(t => t.area).sort((a, b) => a - b);
            this.triangleAreaMedian = this.triangleAreas[Math.floor(this.triangleAreas.length / 2)];
            this.buildEdgeMap();
            this.visitMap = {};
            for (let i = 0; i < this.triangles.length; i++) {
                const triangle = this.triangles[i];
                if (this.visitMap[triangle.keyIndex]) {
                    continue;
                }
                this.makeCamouflage(triangle, colIter.next().value, options["camo_depth"]);
            }
        }
        makeCamouflage(triangle, color, depth, originalDepth = null) {
            originalDepth = originalDepth || depth;
            triangle.color = color;
            this.visitMap[triangle.keyIndex] = color;
            if (depth == 0) {
                this.drawPolygon(triangle, color);
                return;
            }
            let alone = depth === originalDepth;
            let adjacentTriangles = [];
            triangle.edges.forEach((edge, j) => {
                const adjacent = this.edgeMap[edge.keyIndex]
                    .filter(ep => !ep.equals(triangle))[0];
                if (adjacent) {
                    adjacentTriangles.push(adjacent);
                }
                if (adjacent && !this.visitMap[adjacent.keyIndex]) {
                    alone = false;
                    {
                        if (adjacent.area < 5000) { // this.triangleAreaMedian) {
                            this.makeCamouflage(adjacent, color, depth - 1, originalDepth);
                        }
                        else {
                            if (Math.random() < (depth / originalDepth)) {
                                this.makeCamouflage(adjacent, color, depth - 1, originalDepth);
                            }
                        }
                    }
                }
            });
            if (alone) {
                if (adjacentTriangles.length == 0) {
                    console.error("Failed to find adjacentTriangle");
                }
                else {
                    // Copy color from one of adjacent triangles
                    triangle.color = this.visitMap[adjacentTriangles[0].keyIndex];
                    this.drawPolygon(triangle, triangle.color, triangle.color);
                }
            }
            else {
                this.drawPolygon(triangle, color);
            }
        }
        startAnimate() {
            this.interval = setInterval(this.animate.bind(this), 50);
        }
        stopAnimate() {
            clearInterval(this.interval);
        }
        animate() {
            const factor = 4;
            this.points.forEach((point, i) => {
                this.points[i].x += (Math.random() - 0.5) * factor;
                this.points[i].y += (Math.random() - 0.5) * factor;
            });
            this.triangles.forEach(triangle => {
                if (this.isActiveTriangle(triangle)) {
                    this.drawPolygon(triangle, "red");
                }
                else if (this.adjacentPolygons && this.adjacentPolygons[triangle.keyIndex]) {
                    this.drawPolygon(triangle, "blue");
                }
                else {
                    this.drawPolygon(triangle);
                }
            });
        }
        handleMouseMove(p) {
            this.triangles.forEach(triangle => {
                if (triangle.isContaining(p)) {
                    this.updateActiveTriangle(triangle);
                    this.drawPolygon(triangle, "red");
                }
                else {
                    this.drawPolygon(triangle);
                }
            });
            // Overwrite adjacent polygons
            Object.keys(this.adjacentPolygons).forEach(k => {
                this.drawPolygon(this.adjacentPolygons[k], "blue");
            });
        }
        buildEdgeMap() {
            this.edgeMap = {};
            this.triangles.forEach(triangle => {
                triangle.edges.forEach(e => {
                    if (this.edgeMap[e.keyIndex] === undefined) {
                        this.edgeMap[e.keyIndex] = [];
                    }
                    this.edgeMap[e.keyIndex].push(triangle);
                });
                this.drawPolygon(triangle);
            });
        }
        updateActiveTriangle(triangle) {
            if (this.isActiveTriangle(triangle)) {
                // The same triangle, skip updating
                return;
            }
            this.activeTriangle[1] = this.activeTriangle[0];
            this.activeTriangle[0] = triangle;
            this.adjacentPolygons = {};
            // Update adjacent polygons
            for (let i = 0; i < triangle.edges.length; i++) {
                const edgePolygons = this.edgeMap[triangle.edges[i].keyIndex];
                if (edgePolygons && edgePolygons.length > 1) {
                    edgePolygons.forEach(ep => {
                        if (!ep.equals(triangle)) {
                            this.adjacentPolygons[ep.keyIndex] = ep;
                        }
                    });
                }
            }
        }
        isActiveTriangle(triangle) {
            return this.activeTriangle[0] && this.activeTriangle[0].equals(triangle);
        }
    }

    const Pattern = {
        M90P1: "m90p1",
        M90P2: "m90p2"
    };
    class CamoPatternM90P2Options {
        constructor(numPoints, camoDepth, skipPointGeneration) {
            this.numPoints = numPoints;
            this.camoDepth = camoDepth;
            this.skipPointGeneration = skipPointGeneration;
        }
        asDict() {
            return {
                "num_points": this.numPoints,
                "camo_depth": this.camoDepth,
                "skipPointGeneration": this.skipPointGeneration
            };
        }
    }
    class CamoPattern {
        constructor(canvas) {
            this.canvas = canvas;
            this._mouseTrackEnabled = false;
            this.patternMap = {
                "m90p1": M90Pattern1,
                "m90p2": M90Pattern2
            };
            this.ctx = canvas.getContext("2d");
        }
        set pattern(value) {
            this._pattern = value;
        }
        set mouseTrackEnabled(value) {
            this._mouseTrackEnabled = value;
        }
        redraw(colors, option) {
            if (!this.ctx)
                return;
            let width = document.documentElement.clientWidth;
            let height = document.documentElement.clientHeight;
            this.clearCanvas(width, height, colors);
            this.draw(width, height, colors, option);
        }
        draw(width, height, colors = undefined, option) {
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
        handleMouseMove(e) {
            if (this.mouseTrackEnabled && this._pattern === Pattern.M90P2) {
                const logic = this.getPatternLogic(this._pattern);
                logic.handleMouseMove(new Point(e.clientX, e.clientY));
            }
        }
        download() {
            if (!this.canvas)
                return;
            let link = document.createElement("a");
            document.body.appendChild(link);
            link.setAttribute('download', 'camo-pattern.png');
            link.setAttribute('href', this.canvas.toDataURL("image/png")
                .replace("image/png", "image/octet-stream"));
            link.click();
            document.body.removeChild(link);
        }
        getPatternLogic(pattern) {
            if (this.patterns[pattern] === undefined) {
                this.patterns[pattern] = new this.patternMap[pattern](this.ctx);
            }
            return this.patterns[pattern];
        }
    }

    exports.CamoPattern = CamoPattern;
    exports.CamoPatternM90P2Options = CamoPatternM90P2Options;
    exports.Pattern = Pattern;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}));
