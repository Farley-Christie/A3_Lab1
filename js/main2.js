(function() {
	var httpRequest,
	thumbs = document.querySelector("#thumbInfo" img);

	httpRequest = new XMLHttpRequest(); //little app in the browser that handles ajax

			if (!httpRequest) {
				console.log('ajax not suported by browsers older than ie9');
				return false;
			}


	for(i=0, i<thumbs.length,i++) {
		img.addEventListener("click", makeRequest, false);
	}


})();