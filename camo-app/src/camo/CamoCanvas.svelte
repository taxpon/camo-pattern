<script lang="ts">
    import {beforeUpdate, onDestroy, onMount} from "svelte";
    import {M90Pattern1} from "../camo-pattern-js/drawing/m90Pattern1";
    import {Color} from "../camo-pattern-js/util/color";
    import {M90Pattern2} from "../camo-pattern-js/drawing/m90Pattern2";
    import {
        numPoints,
        campDepth,
        redrawSwitch,
        mouseTrack,
        camoAnimate,
        downloadSwitch,
        editingColors
    } from "../state/stores";
    import {Point} from "../camo-pattern-js/geometry/point";

    export let pattern: string = "m90p2"
    export let color: string

    let canvas: HTMLCanvasElement;
    let m90p1: M90Pattern1;
    let m90p2: M90Pattern2;
    let ctx;
    let mouseTrackEnabled: boolean = false;

    onMount(() => {
        ctx = canvas.getContext('2d');
        m90p1 = new M90Pattern1(ctx)
        m90p2 = new M90Pattern2(ctx)
        redraw()
    })

    // Redraw Triggers
    const unsubscribe = redrawSwitch.subscribe(v => redraw())
    const unsubscribe1 = mouseTrack.subscribe(v => mouseTrackEnabled = v)
    const unsubscribe2 = camoAnimate.subscribe(v => {
        if (!m90p2) return;
        if (v) {
            m90p2.startAnimate();
        } else {
            m90p2.stopAnimate();
        }
    })
    const unsubscribe3 = downloadSwitch.subscribe(download)
    const unsubscribe4 = editingColors.subscribe(v => {
        console.log("Updated color", v)
        const colorIter = Color.colorGenerator(v);
        redraw(colorIter, true);
    })

    beforeUpdate(() => redraw())

    onDestroy(() => {
        unsubscribe();
        unsubscribe1();
        unsubscribe2();
        unsubscribe3();
        unsubscribe4();
    })

    function redraw(colorIter = undefined, skipPointGeneration = false) {
        if (!ctx) {
            return
        }
        let width = document.documentElement.clientWidth;
        let height = document.documentElement.clientHeight;
        clearCanvas(width, height, colorIter);
        draw(width, height, colorIter, skipPointGeneration)
    }

    function draw(width, height, colorIter = undefined, skipPointGeneration = false) {
        colorIter = colorIter || Color.colorGeneratorFromPalette(color);
        if (pattern === "m90p1") {
            m90p1.draw(width, height, colorIter)
        } else if (pattern === "m90p2") {
            const options = {
                "num_points": $numPoints,
                "camo_depth": $campDepth,
                "skipPointGeneration": skipPointGeneration
            }
            m90p2.draw(width, height, colorIter, options);
        } else {
            throw Error(`Unsupported pattern type: ${pattern}`)
        }
    }

    function clearCanvas(width, height, colorIter = undefined) {
        canvas.setAttribute("width", width.toString());
        canvas.setAttribute("height", height.toString());
        ctx.fillStyle = colorIter ?  colorIter.next().value : Color.getBaseColorFromPalette(color);
        ctx.fillRect(0, 0, width, height);
    }

    function handleMouseMove(e: MouseEvent) {
        if (mouseTrackEnabled && pattern === "m90p2") {
            m90p2.handleMouseMove(new Point(e.clientX, e.clientY))
        }
    }

    function download() {
        if (!canvas) return;
        let link = document.createElement("a");
        document.body.appendChild(link)
        link.setAttribute('download', 'camo-pattern.png');
        link.setAttribute('href', canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"));
        link.click();
        document.body.removeChild(link);
    }


</script>

<div class="canvas-wrapper">
    <canvas bind:this={canvas} on:mousemove={handleMouseMove}></canvas>
</div>
<svelte:window on:resize={() => redraw()}/>


<style lang="scss">
    div.canvas-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #CCCCCC;
    }
</style>
