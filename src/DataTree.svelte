
<script>
import {onMount} from 'svelte';
let jsonData;

onMount(()=>{
    console.log("new component mounted");

    fetch('http://localhost:3000/users')
    .then(resp=>resp.json())
    .then(data=>{
        console.log("data", data);
        jsonData = data;
    })
    .catch(()=>console.log("Check json-server - use json-server --watch db.json"))
    

});

</script>

<style></style>

<div>

<!-- {#each jsonData as jd}
jd
{/each} -->

</div>

