<script lang="ts">
    import ControlColumn from "./ControlColumn.svelte";
    import {
        numPoints, campDepth,
        redrawSwitch, mouseTrack, camoAnimate, downloadSwitch, editingColors
    } from "../state/stores";
    import {createEventDispatcher, onMount} from "svelte";
    import {Color, ColorItem, ColorPalette} from "../../../camo-pattern-js/src/util/color"

    export let camoPattern = "m90p2";
    export let colorPalette = "green";
    let defaultPalettes = [...Color.getDefaultPalettes()];
    let userPalettes = [...Color.getUserPalettes()];
    let showColorPicker = false;

    let n1 = 500;
    let n2 = 2;
    let editingPaletteId = undefined;
    let newColors = [{color: "#000000"}];
    let newPaletteName;

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

    function showNewColorPanel() {
        showColorPicker = true;
        newColors = [];
        newPaletteName = undefined;
        editingPaletteId = undefined;
        addNewColor(false);
    }

    function addNewColor(propagate = true) {
        // TODO: May have a bug
        newColors = newColors.concat({color: "#" + Math.floor(Math.random() * 16777215).toString(16)});
        if (propagate) {
            updateEditingColors();
        }
    }

    function updateEditingColors() {
        $editingColors = newColors.map(c => c.color);
    }

    function handleDeleteColor(i) {
        console.log(i);
        newColors.splice(i, 1)
        newColors = [...newColors]
        updateEditingColors();
    }

    function saveColorPalette() {
        showColorPicker = false
        let id = editingPaletteId || getUniqueStr()
        let palette = new ColorPalette(id, newPaletteName, newColors.map(c => new ColorItem(c.color)));
        Color.setUserPalette(palette);
        userPalettes = [...Color.getUserPalettes()]
    }

    function editColorPalette(value) {
        showColorPicker = true;
        colorPalette = editingPaletteId = value.id
        newColors = value.colors.map((c: ColorItem) => {
            return {color: c.value}
        })
        newPaletteName = value.name
    }

    function deleteColorPalette(value) {
        if (window.confirm(`Delete ${value.name}?`)) {
            Color.deleteUserPalette(value.id);
            userPalettes = [...Color.getUserPalettes()];
        }
    }

    function getUniqueStr(){
        let strong = 1000;
        return new Date().getTime().toString(16)  + Math.floor(strong*Math.random()).toString(16)
    }

</script>
<div class="control-panel">
    <div class="control-columns">
        <ControlColumn>
            <div class="control-section">
                <div class="control-section-title">Camo Pattern</div>
<!--                <div class="control-section-sub">-->
<!--                    <div>-->
<!--                        <label class="radio">-->
<!--                            <input type="radio" bind:group={camoPattern} value="m90p1">-->
<!--                            <span class="outside"><span class="inside"></span></span>-->
<!--                            <span class="radio-name">M90(1)</span>-->
<!--                        </label>-->
<!--                    </div>-->
<!--                    <div>-->
<!--                        <label class="radio">-->
<!--                            <input type="radio" bind:group={camoPattern} value="m90p2">-->
<!--                            <span class="outside"><span class="inside"></span></span>-->
<!--                            <span class="radio-name">M90(2)</span>-->
<!--                        </label>-->
<!--                        <div style="clear: both;"></div>-->
<!--                    </div>-->
<!--                </div>-->
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
                        <input type="range" name="num-points" min="1" max="1000" bind:value={n1}>
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
                <div class="control-section-title">Color Palette
                    <span class="button small" on:mousedown={() => showNewColorPanel()}>+Add</span>
                </div>
                <div class="control-section-sub">
                    {#each [...defaultPalettes] as [key, value] (key)}
                        <div style="width: 100%; display: flex;">
                            <label class="radio">
                                <input type="radio" bind:group={colorPalette} value="{key}">
                                <span class="outside"><span class="inside"></span></span>
                                <span class="radio-name">{value.name}</span>
                            </label>
                        </div>
                    {/each}
                    {#each [...userPalettes] as [key, value] (key)}
                        <div style="width: 100%; display: flex; align-items: center;">
                            <label class="radio">
                                <input type="radio" bind:group={colorPalette} value="{key}">
                                <span class="outside"><span class="inside"></span></span>
                                <span class="radio-name">{value.name}</span>
                            </label>
                            <span class="icon-button" on:click={editColorPalette(value)}>
                                <i class="fas fa-edit"></i>
                            </span>
                            <span class="icon-button" on:click={deleteColorPalette(value)}>
                                <i class="far fa-trash-alt"></i>
                            </span>
                        </div>
                    {/each}
                </div>
            </div>
        </ControlColumn>
        {#if showColorPicker}
            <ControlColumn>
                <div class="control-section">
                    <div class="control-section-title" style="float: left;">Edit Color Palette</div>
                    <span class="button small" style="float: right;" on:mousedown={() => showColorPicker = false}>X Close</span>
                    <div style="clear: both;"></div>

                    <div class="control-section-sub">
                        <div class="control-section-sub-title">Colors</div>
                        <span class="button full small" on:click={addNewColor}>Add Color</span>
                        {#each newColors as newColor, i (i) }
                            <div style="position: relative;">
                                <label>
                                    <input type="color" bind:value={newColor.color} on:input={updateEditingColors}>
                                    <span class="icon-button" on:click={handleDeleteColor(i)}>
                                        <i class="far fa-trash-alt"></i>
                                    </span>
                                </label>
                            </div>
                        {/each}
                    </div>
                    <div class="control-section-sub">
                        <div class="control-section-sub-title">Palette Name</div>
                        <input type="text" bind:value={newPaletteName}>
                    </div>
                    <div class="control-section-sub" style="margin-top: 1rem;">
                        <button class="button full"
                                disabled="{newColors.length < 2 || (newPaletteName && newPaletteName.length === 0)}"
                                on:click={saveColorPalette}>Save Color Palette</button>
                    </div>
                </div>
            </ControlColumn>
        {/if}
    </div>
</div>
<style lang="scss">
  @import "../style/input";
  $section-margin: 0.5rem;

  .control-panel {
    position: absolute;
    top: 0;
    left: 0;
    text-align: left;
    height: 96%;
  }
  .control-columns {
    display: flex;
    height: 100%;
    align-items: flex-start;
  }
  .control-section {
    margin-bottom: 2.0rem;

    input[type=range] {
      width: 100%;
      margin: 0;
      padding: 0;
    }

    input[type=color] {
      width: 80%;
      margin-bottom: $section-margin;
      max-width: 250px;
    }

    input[type=text] {
      width: 100%;
      box-sizing: border-box;
      padding: 0.5rem;
    }

    &-title {
      font-size: 1.1rem;
      margin-bottom: 10px;
      font-weight: bold;
    }

    &-sub {
      margin-left: $section-margin;
      margin-right: $section-margin;
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

    &.small {
      padding: 0.1rem;
      font-size: 0.8rem;
      font-weight: normal;
    }

    &.full {
      width: 100%;
      box-sizing: border-box;
      margin-bottom: $section-margin;
    }
  }

  .icon-button {
    cursor: pointer;
    margin-left: 0.5rem;

    &:hover {
      color: #3c3c3c;
    }
  }
</style>
