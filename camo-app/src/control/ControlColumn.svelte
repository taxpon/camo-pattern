<div class="control-column">
    <slot></slot>
</div>

<style lang="scss">

  $space: 1rem;

  .control-column {
    margin: $space;
    padding: $space;
    border: 3px dashed gray;
    background: rgba(128,128,128,.7);
    z-index: 20;
    overflow-y: scroll;
    width: 300px;
    max-height: 100%;
    box-sizing: border-box;

    &::-webkit-scrollbar {
      display: none;
    }
  }
</style>
