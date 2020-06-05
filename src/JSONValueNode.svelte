<script>
  import { getContext } from 'svelte';
  import contextKey from './context';
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  import JSONKey from './JSONKey.svelte';
  import JSONModifyNode from './JSONModifyNode.svelte';
  import JSONAddNode from './JSONAddNode.svelte';
  import JSONDeleteNode from './JSONDeleteNode.svelte';

  export let key, value, valueGetter = null, isParentExpanded, isParentArray, nodeType;
  const { colon } = getContext(contextKey);
  let nodeVar = "";
  let showMenu = false;
  function menu(){
    showMenu = !showMenu;
  }
  function addNode() {
    nodeVar = JSONAddNode;
  }
  function deleteNode() {
    nodeVar = JSONDeleteNode;
  }
  function modifyNode() {
    nodeVar = JSONModifyNode;
  }
</script>
<style>
  li {
    user-select: text;
    word-wrap: break-word;
    word-break: break-all;
  }
  .indent {
    padding-left: var(--li-identation);
  }
  .String {
    color: var(--string-color);
  }
  .Date {
    color: var(--date-color);
  }
  .Number {
    color: var(--number-color);
  }
  .Boolean {
    color: var(--boolean-color);
  }
  .Null {
    color: var(--null-color);
  }
  .Undefined {
    color: var(--undefined-color);
  }
  .Function {
    color: var(--function-color);
    font-style: italic;
  }
  .Symbol {
    color: var(--symbol-color);
  }
</style>
<li class:indent={isParentExpanded}>
  <JSONKey {key} {colon} {isParentExpanded} {isParentArray} />
  <span class={nodeType}>
    
    {#if nodeVar == JSONModifyNode}
      <svelte:component this={nodeVar} {key} {value}/>
    {:else}
      {valueGetter ? valueGetter(value) : value}
    {/if}

    <!-- <JSONModifyValue {valueGetter} {value} /> -->
    {#if showMenu}
      <button class="arrow container" on:click={modifyNode}>{'\u0045'}</button>
      <button class="arrow container" on:click={addNode}>{'\u0041'}</button>
      <button class="arrow container" on:click={deleteNode}>{'\u0044'}</button>
    {:else}
      <button class="arrow container" on:click={menu}>{'\u0022'}</button>
    {/if}
    {#if nodeVar==JSONAddNode || nodeVar==JSONDeleteNode}
      <svelte:component this={nodeVar} {key} {value}/>
    {/if}
    <!-- {#if modifyNodeVar}
      <JSONModifyNode/>
    {/if}
    {#if deleteNodeVar}
      <JSONDeleteNode/>
    {/if} -->
  </span>
</li>