<script>
  import { getContext } from 'svelte';
  import contextKey from './context';

  import JSONKey from './JSONKey.svelte';

  export let value , valueGetter;

  const { colon } = getContext(contextKey);
  $: mvalue = value;
  valueGetter ? valueGetter(value) : value;
    //   console.log("value",value);
    // console.log("Mvalue",mvalue);
</script>

<!-- <input value={valueGetter ? valueGetter(value) : value}/> -->
<input bind:value={value}/>