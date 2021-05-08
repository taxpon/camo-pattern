<script lang="ts">
    import ControlColumn from "./ControlColumn.svelte";
    import {
        numPoints, campDepth,
        redrawSwitch, mouseTrack, camoAnimate, downloadSwitch
    } from "../state/stores";
    import {createEventDispatcher, onMount} from "svelte";
    import {Color, ColorPalette} from "../camo-pattern-js/util/color"

    export let camoPattern = "m90p2";
    export let colorPalette = "green";
    let defaultPalettes = [...Color.getDefaultPalettes()]
    let map = new Map();
    map.set("green", "foo")
    // map.set("blue", "bar")

    let n1 = 100;
    let n2 = 2;

    onMount(() => {
        console.log(defaultPalettes)
        console.log([...defaultPalettes])
    })
    $: {
        numPoints.set(n1);
        campDepth.set(n2);
    }

    function handleRefresh() {
        redrawSwitch.update(n => (n + 1) % 2)
    }

    function handleDownload() {
        downloadSwitch.update(n =>  (n + 1) % 2)
    }

    function toggleAnimate() {
        camoAnimate.update(n => !n)
    }

    function toggleMouseTrack() {
        mouseTrack.update(n => !n)
    }
</script>
<div class="control-panel">
    <div class="control-columns">
        <ControlColumn>
            <div class="control-section">
                <div class="control-section-title">Camo Pattern</div>
                <div class="control-section-sub">
                    <div>
                        <label>
                            <input type="radio" bind:group={camoPattern} value="m90p1">
                            <span class="outside"><span class="inside"></span></span>
                            <span class="radio-name">M90(1)</span>
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="radio" bind:group={camoPattern} value="m90p2">
                            <span class="outside"><span class="inside"></span></span>
                            <span class="radio-name">M90(2)</span>
                        </label>
                        <div style="clear: both;"></div>
                    </div>
                </div>
                <div class="control-section-sub">
                    <span class="button" on:mousedown={handleRefresh}>Refresh</span>
                    <span class="button" on:mousedown={handleDownload}>Download</span>
                </div>
            </div>
            {#if camoPattern === "m90p2"}
            <div class="control-section">
                <div class="control-section-title">Pattern Parameter</div>
                <div class="control-section-sub">
                    <div class="control-section-sub-title">
                        Number of Points (<span id="num-points-val">{n1}</span>)
                    </div>
                    <div>
                        <input type="range" name="num-points" min="1" max="500" bind:value={n1}>
                    </div>
                </div>
                <div class="control-section-sub">
                    <div class="control-section-sub-title">
                        Camo Depth (<span id="camo-depth-val">{n2}</span>)
                    </div>
                    <div>
                        <input type="range" name="camo-depth" min="1" max="20" bind:value={n2}>
                    </div>
                </div>
                <div class="control-section-sub">
                    <div class="control-section-sub-title">Control</div>
                    <span class="button" on:mousedown={toggleAnimate}>Animate</span>
                    <span class="button" on:mousedown={toggleMouseTrack}>Mouse Track</span>
                </div>
            </div>
            {/if}
            <div class="control-section">
                <div class="control-section-title">Color Palette</div>
                <div class="control-section-sub">
                    {#each [...defaultPalettes] as [key, value] (key)}
                        <div>
                            <label>
                                <input type="radio" bind:group={colorPalette} value="{key}">
                                <span class="outside"><span class="inside"></span></span>
                                <span class="radio-name">{value.name}</span>
                            </label>
                        </div>
                    {/each}
                </div>
            </div>
        </ControlColumn>
<!--        <ControlColumn>-->
<!--            bbb-->
<!--        </ControlColumn>-->
    </div>
</div>
<style lang="scss">
  //@import "../style/input";
  $section-margin: 0.5rem;

  .control-panel {
    position: absolute;
    top: 0;
    left: 0;
    text-align: left;
  }
  .control-columns {
    display: flex;
  }
  .control-section {
    margin-bottom: 2.0rem;

    input[type=range] {
      width: 100%;
      margin: 0;
      padding: 0;
    }

    &-title {
      font-size: 1.1rem;
      margin-bottom: 10px;
      font-weight: bold;
    }

    &-sub {
      margin-left: $section-margin;
      margin-bottom: $section-margin;

      label {
        cursor: pointer;
      }

      &-title {
        margin-bottom: $section-margin;
      }
    }
  }
  .button {
    padding: 0.5rem;
    background: gray;
    border: 3px #6f6f6f solid;
    display: inline-block;
    min-width: 4rem;
    text-align: center;
    border-radius: 8%;
    cursor: pointer;
    user-select: none;

    &:hover {
      background: #999999;
    }

    &:active {
      background: #aaaaaa;
    }
  }
</style>
