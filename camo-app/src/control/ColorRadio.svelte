<script lang="ts">
    export let id: String
    export let name: String
    export let group: String
</script>

<label>
    <input type="radio" bind:group={group} value={id}>
    <span class="outside"><span class="inside"></span></span>
    <span class="radio-name">{name}</span>
</label>
