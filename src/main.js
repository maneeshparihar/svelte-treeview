import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
	    json : {
			"array": [1, 2, [3,4,5]],
			"boolean": true,
			"htmlcode": '&quot;',
			"escaped_unicode": '\\u20b9',
			"unicode": '\u20b9,\uD83D\uDCA9',
			"return": '\n',
			"null": null,
			"number": 123,
			"object": {"a": "b", "c": "d"},
			"string": "Hello World",
			"url": "http://jsoneditoronline.org"
		}
	}
});

export default app;