<script>
  import { getContext } from 'svelte';
  import contextKey from './context';

  import JSONKey from './JSONKey.svelte';

  export let key, value , valueGetter;

  const { colon } = getContext(contextKey);
  $: mvalue = value;
  valueGetter ? valueGetter(value) : value;
    console.log("1",key);
  console.log("2",value);
//   console.log("3",isParentExpanded);
//   console.log("4",isParentArray);
//   console.log("5",nodeType);
  function handleSubmit(){
        console.log("Hi add node is called");
  }
     
</script>

<!-- <input value={valueGetter ? valueGetter(value) : value}/> -->
<form on:submit|preventDefault="{handleSubmit}">
    <input type="text" bind:value={key}/>
    <span>{colon}</span>
    <input type="text" bind:value={value}>
    <button type="submit">ADD</button>

</form>