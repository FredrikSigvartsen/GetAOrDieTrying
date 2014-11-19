/*Header images*/
setInterval(function() {

	var elem1 = document.getElementById("bilde1");
	var elem2 = document.getElementById("bilde2");
	var elem3 = document.getElementById("bilde3");
	var elem4 = document.getElementById("bilde4");
	
	if(elem4.style.opacity == "1") {
		elem1.style.WebkitTransition = "opacity 1.5s linear 0s";
			elem1.style.MozTransition = "opacity 1.5s linear 0s";
				elem1.style.OTransition = "opacity 1.5s linear 0s";
					elem1.style.MsTransition = "opacity 1.5s linear 0s";
						elem1.style.transition = "opacity 1.5s linear 0s";
		elem1.style.opacity = "1";
		elem4.style.WebkitTransition = "opacity 1.5s linear 0s";
			elem4.style.MozTransition = "opacity 1.5s linear 0s";
				elem4.style.OTransition = "opacity 1.5s linear 0s";
					elem4.style.MsTransition = "opacity 1.5s linear 0s";
						elem4.style.transition = "opacity 1.5s linear 0s";
		elem4.style.opacity = "0";
	} else if(elem3.style.opacity == "1") {
		elem4.style.WebkitTransition = "opacity 1.5s linear 0s";
			elem4.style.MozTransition = "opacity 1.5s linear 0s";
				elem4.style.OTransition = "opacity 1.5s linear 0s";
					elem4.style.MsTransition = "opacity 1.5s linear 0s";
						elem4.style.transition = "opacity 1.5s linear 0s";
		elem4.style.opacity = "1";
		elem3.style.WebkitTransition = "opacity 1.5s linear 0s";
			elem3.style.MozTransition = "opacity 1.5s linear 0s";
				elem3.style.OTransition = "opacity 1.5s linear 0s";
					elem3.style.MsTransition = "opacity 1.5s linear 0s";
						elem3.style.transition = "opacity 1.5s linear 0s";
		elem3.style.opacity = "0";
	} else if(elem2.style.opacity == "1") {
		elem3.style.WebkitTransition = "opacity 1.5s linear 0s";
			elem3.style.MozTransition = "opacity 1.5s linear 0s";
				elem3.style.OTransition = "opacity 1.5s linear 0s";
					elem3.style.MsTransition = "opacity 1.5s linear 0s";
						elem3.style.transition = "opacity 1.5s linear 0s";
		elem3.style.opacity = "1";
		elem2.style.WebkitTransition = "opacity 1.5s linear 0s";
			elem2.style.MozTransition = "opacity 1.5s linear 0s";
				elem2.style.OTransition = "opacity 1.5s linear 0s";
					elem2.style.MsTransition = "opacity 1.5s linear 0s";
						elem2.style.transition = "opacity 1.5s linear 0s";
		elem2.style.opacity = "0";
	} else {
		elem2.style.WebkitTransition = "opacity 1.5s linear 0s";
			elem2.style.MozTransition = "opacity 1.5s linear 0s";
				elem2.style.OTransition = "opacity 1.5s linear 0s";
					elem2.style.MsTransition = "opacity 1.5s linear 0s";
						elem2.style.transition = "opacity 1.5s linear 0s";
		elem2.style.opacity = "1";
		elem1.style.WebkitTransition = "opacity 1.5s linear 0s";
			elem1.style.MozTransition = "opacity 1.5s linear 0s";
				elem1.style.OTransition = "opacity 1.5s linear 0s";
					elem1.style.MsTransition = "opacity 1.5s linear 0s";
						elem1.style.transition = "opacity 1.5s linear 0s";
		elem1.style.opacity = "0";
	}
},4000);

/*Menu*/
var subnav = ["subnav1", "subnav2", "subnav3", "subnav4"];
	function dropMenu(x) {
		for (var i in subnav) {
			if(subnav[i] != x) {
				document.getElementById(subnav[i]).style.display ="none";
			}
		}
		if(document.getElementById(x).style.display == 'block') {
			document.getElementById(x).style.display = "none";
		} else {
			document.getElementById(x).style.display = "block";
		}
	}

/*Nyheter*/
var nyhetSide = ["nyhetSide1", "nyhetSide2"];
function byttNyhet(el) {
	for (var i in nyhetSide) {
		if(nyhetSide[i] == el) {
			document.getElementById(nyhetSide[i]).style.display = "none";
			if ( i == 0 )
				document.getElementById(nyhetSide[++i]).style.display = "block";
			else
				document.getElementById(nyhetSide[--i]).style.display = "block";
		}
	}
}