<script lang="ts">
	import ControlPanel from "./control/ControlPanel.svelte";
	import CamoCanvas from "./camo/CamoCanvas.svelte";

	export let name: string;
	let camoPattern
	let colorPalette = "green"
</script>

<main>
	<ControlPanel bind:camoPattern bind:colorPalette/>
	<CamoCanvas pattern="{camoPattern}" color="{colorPalette}"/>
</main>

<style lang="scss">
	:global(body) {
		margin: 0;
		padding: 0;
		color: #111;
	}

	main {
		text-align: center;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
		margin: 0;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
