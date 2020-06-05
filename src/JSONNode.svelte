<script>
  import JSONObjectNode from './JSONObjectNode.svelte';
  import JSONArrayNode from './JSONArrayNode.svelte';
  import JSONIterableArrayNode from './JSONIterableArrayNode.svelte';
  import JSONIterableMapNode from './JSONIterableMapNode.svelte';
  import JSONMapEntryNode from './JSONMapEntryNode.svelte';
  import JSONValueNode from './JSONValueNode.svelte';
  import JSONAddNode from './JSONAddNode.svelte';
  import ErrorNode from './ErrorNode.svelte';
  import objType from './objType';

  export let key, value, isParentExpanded, isParentArray;
  $: nodeType = objType(value);
  $: componentType = getComponent(nodeType);
  $: valueGetter = getValueGetter(nodeType);
  // $: operationType = updateNode();
      
  function getComponent(nodeType) {
    switch (nodeType) {
      case 'Object':
        return JSONObjectNode;
      case 'Error':
        return ErrorNode;
      case 'Array':
        return JSONArrayNode;
      case 'Iterable':
      case 'Map':
      case 'Set':
        return typeof value.set === 'function' ? JSONIterableMapNode : JSONIterableArrayNode;
      case 'MapEntry':
        return JSONMapEntryNode;
      default:
        return JSONValueNode;
    }
  }

  function getValueGetter(nodeType) {
    switch (nodeType) {
      case 'Object':
      case 'Error':
      case 'Array':
      case 'Iterable':
      case 'Map':
      case 'Set':
      case 'MapEntry':
      case 'Number':
        return undefined;
      case 'String':
        return raw => `"${raw}"`;
      case 'Boolean':
        return raw => (raw ? 'true' : 'false');
      case 'Date':
        return raw => raw.toISOString();
      case 'Null':
        return () => 'null';
      case 'Undefined':
        return () => 'undefined';
      case 'Function':
      case 'Symbol':
        return raw => raw.toString();
      default:
        return () => `<${nodeType}>`;
    }
  }

  function updateNode () {
   let operation = 'add';
    
       console.log ("Hiiii",operation,);
    switch (operation) {
      case 'add':
        return () => `<JSONAddNode/>`
      case 'delete': 
      default:
        return

    }
  }
</script>
<style>
  .container {
    display: inline-block;
    cursor: pointer;
    position: absolute;
    top: 50%;
  }
  .arrow {
    transform-origin: 25% 50%;
    position: relative;
    line-height: 1.1em;
    font-size: 1.5em;
    margin-left: 0;
    margin-right: 1.5em;
    transition: 150ms;
    color: var(--arrow-sign);
    user-select: none;
    font-family: 'Courier New', Courier, monospace;
  }
</style>

<svelte:component this={componentType} {key} {value} {isParentExpanded} {isParentArray} {nodeType} {valueGetter} />
<!-- <svelte:component this={operationType} on:click={updateNode()}/> -->
<!-- <div class="arrow container" on:click={updateNode()}>{'\u00B1'}</div> -->

<!-- <form>
  Select the operation you want to perform:
  <input type="button" name="Add Node" value="Add Node" onclick=""/>
  <input type="submit" value="Go"
    onclick="return confirm('Are you sure you want to search Google?')"
  />
</form> -->