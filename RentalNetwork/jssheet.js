/*Header images*/
setInterval(function() {

	var elem1 = document.getElementById("bilde1");
	var elem2 = document.getElementById("bilde2");
	var elem3 = document.getElementById("bilde3");
	var elem4 = document.getElementById("bilde4");
	var elem5 = document.getElementById("bilde5");
	
	if(elem5.style.opacity == "1") {
		elem1.style.WebkitTransition = "opacity 1.5s linear 0s";
			elem1.style.MozTransition = "opacity 1.5s linear 0s";
				elem1.style.OTransition = "opacity 1.5s linear 0s";
					elem1.style.MsTransition = "opacity 1.5s linear 0s";
						elem1.style.transition = "opacity 1.5s linear 0s";
		elem1.style.opacity = "1";
		elem5.style.WebkitTransition = "opacity 1.5s linear 0s";
			elem5.style.MozTransition = "opacity 1.5s linear 0s";
				elem5.style.OTransition = "opacity 1.5s linear 0s";
					elem5.style.MsTransition = "opacity 1.5s linear 0s";
						elem5.style.transition = "opacity 1.5s linear 0s";
		elem5.style.opacity = "0";
	} else if(elem4.style.opacity == "1") {
		elem5.style.WebkitTransition = "opacity 1.5s linear 0s";
			elem5.style.MozTransition = "opacity 1.5s linear 0s";
				elem5.style.OTransition = "opacity 1.5s linear 0s";
					elem5.style.MsTransition = "opacity 1.5s linear 0s";
						elem5.style.transition = "opacity 1.5s linear 0s";
		elem5.style.opacity = "1";
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
},4500);

/*Menu*/
var subnav = ["subnav1", "subnav2"];
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

/*Lock header*/
function lockHeader() {
	var elem = document.getElementById("navbar");
	var elem1 = document.getElementById("lockHeader");
	
	if (elem.style.position == "absolute") {
		elem.style.position = "fixed";
		elem1.innerHTML = "Lock header";
	} else {
		elem.style.position = "absolute";
		elem1.innerHTML = "Unlock header";
	}		
}


/*News*/
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