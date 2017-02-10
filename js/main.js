(function(){
	var carImages = document.querySelectorAll("#thumbInfo li"),
	carHeader = document.querySelector(".madelName"),
	carPrice = document.querySelector(".priceInfo"),
	carDesc =document.querySelector(".madelDetails"),
	/*
	var pokeImages = document.querySelectorAll("nav li"),
	critterHeader = document.querySelector(".click-header"),
	criterImage = document.querySelector(".pokemon-large"),
	critterDesc =document.querySelector(".content-section p"),
	habHeader = document.querySelector(".habitat-header"),
	critterHab =document.querySelector(".habitat"),
	*/
	httpRequest;

	function makeRequest(){
		httpRequest = new XMLHttpRequest();

		if(!httpRequest){
			console.log('please update browser');
			return false;
		}
		httpRequest.onreadystatechange = showCarInfo;
		httpRequest.open('GET', 'includes/ajaxQuery.php' + '?model=' + this.id);
		httpRequest.send();
	}

	function showCarInfo(){
		if(httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 200){
			var carData = JSON.parse(httpRequest.responseText);

			carHeader.firstChild.nodeValue = carData.modelName;

			[].forEach.call(document.querySelectorAll('.hidden'), function(item){
				item.classList.remove('hidden');
			});

			//criterImage.src = 'images/' + carData.pokeImage + '.png';
			carprice.firstChild.nodeValue =carData.pricing;
			carDesc.firstChild.nodeValue =carData.modelDetails;
			//habHeader.firstChild.nodeValue = carData.pokeName + " lives here!";
			//critterHab.src = "images/" + carData.bgImage + ".jpg";
		}
	}
			
	[].forEach.call(carImages, function(img) {
		img.addEventListener("click", makeRequest, false);
	});

})();