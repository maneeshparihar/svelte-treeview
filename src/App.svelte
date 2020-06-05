<script>
	import JSONEditor from 'jsoneditor';
	import {onMount} from 'svelte';
	import '../node_modules/jsoneditor/dist/jsoneditor.min.css';
	// import '../node_modules/jsoneditor/dist/img/jsoneditor-icons.svg'
    // import {JSONEditor} from '../node_modules/jsoneditor/dist/jsoneditor.min.css';
	let container, options, editor, updatedJson;
	let modes= ['code', 'form', 'text', 'tree', 'view'];
	export let json;
	container = document.getElementById('jsoneditor');

	options = {
		mode: 'tree',
		modes: ['code', 'form', 'text', 'tree', 'view'], // allowed modes			
		indentation: 4,
		escapeUnicode: true,

		onChange: function () {
			updatedJson = editor.get();
			console.log("UJ",updatedJson);
			},

		onModeChange: function (mode) {
			let treeMode = document.getElementById('treeModeSelection');
			let textMode = document.getElementById('textModeSelection');
			treeMode.style.display = textMode.style.display = 'none';
			if (mode === 'code' || mode === 'text') {
				textMode.style.display = 'inline';
			} else {
				treeMode.style.display = 'inline';
			}
			},
			
		onTextSelectionChange: function(start, end, text) {
			let rangeEl = document.getElementById('textRange');
			rangeEl.innerHTML = 'start: ' + JSON.stringify(start) + ', end: ' + JSON.stringify(end);
			let textEl = document.getElementById('selectedText');
			textEl.innerHTML = text;
			},

		onSelectionChange: function(start, end) {      
			let nodesEl = document.getElementById('selectedNodes');
			nodesEl.innerHTML = '';
			if (start) {
				nodesEl.innerHTML = ('start: '  + JSON.stringify(start));
				if (end) {
				nodesEl.innerHTML += ('<br/>end: '  + JSON.stringify(end));
				}
				console.log(nodesEl.innerHTML);
			}
		}
		};
	
	onMount( () => {	 

		window.onunhandledrejection = (e) => {
			alert(e.toString());
		}

		container = document.getElementById("jsoneditor")
		editor = new JSONEditor(container, options)
		editor.set(json);

	});
</script>

<style type="text/css">
	body {
		font: 10.5pt arial;
		color: #4d4d4d;
		line-height: 150%;
		width: 500px;
		padding-left: 40px;
	}
	#jsoneditor {
		width: 500px;
		height: 500px;
}
</style>

<main>
<div id="jsoneditor" style="width: 900px; height: 900px;"></div>
	<body>
		<form>
			
			<div id="textModeSelection" style="display:none;">
				<b>Selection:</b><div id="textRange"></div>
				<b>Text:</b><div id="selectedText"></div>
			</div>
			<div id="treeModeSelection">
				<b>Selection:</b>
				<div id="selectedNodes"></div>
			</div>
		</form>
	</body>
</main>