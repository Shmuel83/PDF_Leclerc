global.$ = global.jQuery = require("jquery");

$(document).ready(function(){
	dom_action = `<a href="#hack_generate_doc_pdf" aria-current="page" id="hack_generate_doc_pdf"><div id="catalog-right-menu" class="right-menu-entry selected svelte-okusnj"><div class="right-menu-icon icon svelte-okusnj"><svg class="svg-inline--fa fa-book-open fa-w-18 fa-2x svelte-okusnj" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="book-open" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg="">
	<g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(6 6)" >
		<path d="M 11.58 54.882 v 31.965 c 0 1.741 1.412 3.153 3.153 3.153 h 60.534 c 1.741 0 3.153 -1.412 3.153 -3.153 V 54.882 C 56.073 47.881 33.792 47.838 11.58 54.882 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(184,53,53); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
		<path d="M 78.42 54.882 V 18.345 C 69.386 13.658 63.133 7.61 60.075 0 H 14.733 c -1.741 0 -3.153 1.412 -3.153 3.153 v 51.729 H 78.42 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(233,233,224); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
		<path d="M 78.42 18.345 H 62.948 c -1.587 0 -2.873 -1.286 -2.873 -2.873 V 0 L 78.42 18.345 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(217,215,202); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
		<path d="M 32.116 62.679 h -5.944 c -0.829 0 -1.5 0.672 -1.5 1.5 v 9.854 v 6.748 c 0 0.828 0.671 1.5 1.5 1.5 s 1.5 -0.672 1.5 -1.5 v -5.248 h 4.444 c 2.392 0 4.338 -1.946 4.338 -4.338 v -4.177 C 36.454 64.625 34.508 62.679 32.116 62.679 z M 33.454 71.194 c 0 0.737 -0.6 1.338 -1.338 1.338 h -4.444 v -6.854 h 4.444 c 0.738 0 1.338 0.601 1.338 1.339 V 71.194 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(249,249,249); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
		<path d="M 46.109 82.28 h -5.652 c -0.829 0 -1.5 -0.672 -1.5 -1.5 V 64.179 c 0 -0.828 0.671 -1.5 1.5 -1.5 h 5.652 c 2.553 0 4.63 2.077 4.63 4.63 V 77.65 C 50.739 80.203 48.662 82.28 46.109 82.28 z M 41.957 79.28 h 4.152 c 0.898 0 1.63 -0.731 1.63 -1.63 V 67.309 c 0 -0.898 -0.731 -1.63 -1.63 -1.63 h -4.152 V 79.28 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(249,249,249); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
		<path d="M 63.828 62.679 h -8.782 c -0.828 0 -1.5 0.672 -1.5 1.5 V 80.78 c 0 0.828 0.672 1.5 1.5 1.5 s 1.5 -0.672 1.5 -1.5 v -6.801 h 4.251 c 0.828 0 1.5 -0.672 1.5 -1.5 s -0.672 -1.5 -1.5 -1.5 h -4.251 v -5.301 h 7.282 c 0.828 0 1.5 -0.672 1.5 -1.5 S 64.656 62.679 63.828 62.679 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(249,249,249); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
	</g>
	</svg><!-- <i class="fas fa-2x fa-book-open svelte-okusnj"></i> Font Awesome fontawesome.com --></div> <div class="right-menu-label svelte-okusnj"><span>Télécharger</span></div></div></a>`;
	setTimeout(() => {  
		
		console.log("injection commencé");
		$("#right-menu").append(dom_action);
		$("#hack_generate_doc_pdf").on("click",function(){
			console.log( "Handler for .click() called." );
	  
			chrome.runtime.sendMessage('init', (response) => {
				// 3. Got an asynchronous response with the data from the service worker
				console.log('received user data', response.response);
				$("body").append(`<div id='PDF_LECLERC_overlay' style='position: fixed; width: 100%; height: 100%; top: 0; left: 0; right: 0; bottom: 0; background-color: rgba(0,0,0,0.5); z-index: 2; cursor: wait; text-align: center; color: red; size: 5em; padding-top: 50vh;'><h1 style="font-size: 4em; color:blue">Téléchargement en cours...</h1><h2 style="font-size: 3em; color:blue" id='PDF_LECLERC_timer'></h2></div>`);
				get_photo(response.response);
			})
		})
		
		
	}
	, 1000);



});

function get_photo(url) {
	const xhttp = new XMLHttpRequest();
	  xhttp.onload = function() {
		console.log(this.responseText);
		chrome.runtime.sendMessage({'end':this.responseText});
		var nbpage = JSON.parse(this.responseText).length;
		var timer = setInterval(function() {
			chrome.runtime.sendMessage({'timer':true},(result) => {
				
				if(parseInt(result.timer_response) >= nbpage) {
					clearInterval(timer);
					$("#PDF_LECLERC_overlay").remove();
				}
				else {
					$("#PDF_LECLERC_timer").text(result.timer_response+"/"+nbpage);
				}
				
			});
		},
		1000);
		}
	  xhttp.open("GET", url, true);
	  xhttp.send();
}