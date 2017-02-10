(function(){
	var carImages = document.querySelectorAll(".thumbInfo img"),
	F55 = document.querySelector("#F55"),
	F56 = document.querySelector("#F56"),
	R58 = document.querySelector("#R58"),
	carHeader = document.querySelector(".modelName"),
	carPrice = document.querySelector(".priceInfo"),
	carDesc =document.querySelector(".modelDetails"),
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
			carPrice.firstChild.nodeValue ="$"+carData.pricing;
			carDesc.firstChild.nodeValue =carData.modelDetails;
			//habHeader.firstChild.nodeValue = carData.pokeName + " lives here!";
			//critterHab.src = "images/" + carData.bgImage + ".jpg";
		}
	}

	function hideOthers(e){
		//e.target.classList.remove ("nonActive");
		F55.classList.remove ("focusMini");
		F56.classList.remove ("focusMini");
		R58.classList.remove ("focusMini");
		e.target.className += " focusMini";
		console.log(e.target.classList);
	}
			
	[].forEach.call(carImages, function(img) {
		img.addEventListener("click", makeRequest, false);
		img.addEventListener("click", hideOthers, false);
	});

})();