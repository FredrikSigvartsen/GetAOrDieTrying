setInterval(function() {

	var elem1 = document.getElementById("bilde1");
	var elem2 = document.getElementById("bilde2");
	
	if(elem2.style.opacity == "1") {
		elem1.style.transition = "opacity 1.5s linear 0s";
		elem1.style.opacity = "1";
		elem2.style.transition = "opacity 1.5s linear 0s";
		elem2.style.opacity = "0";
	} else {
		elem1.style.transition = "opacity 1.5s linear 0s";
		elem1.style.opacity = "0";
		elem2.style.transition = "opacity 1.5s linear 0s";
		elem2.style.opacity = "1";
	}
	
},3500);

/*Menu*/
var ma = ["subnav1", "subnav2", "subnav3", "subnav4"];
	function dropMenu(x) {
		for (var m in ma) {
			if(ma[m] != x) {
				document.getElementById(ma[m]).style.display ="none";
			}
		}
		if(document.getElementById(x).style.display == 'block') {
			document.getElementById(x).style.display = "none";
		} else {
			document.getElementById(x).style.display = "block";
		}
	}