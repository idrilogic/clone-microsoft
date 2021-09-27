function dropDown() {
	var card = document.querySelector('.block');

	if (card.style.display === "block") {
		card.style.display = "none";
	} else {
		card.style.display = "block" ;
	}
}



// when you click on anything except the drop button display none 

window.onclick = function(event) {
	if (!event.target.matches(".dropDown")) {
		var dropContent = document.getElementsByClassName('block');
		var i; 
		for (i = 0; i < dropContent.length; i++) {
			if (dropContent[i].style.display === "block") {
				dropContent[i].style.display = "none";
			}
		}
	}
}

