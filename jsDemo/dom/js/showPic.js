function showPic(whichpic) {
	if(!document.getElementById("placeholder")) {
		return false;
	}
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src", source);
	if(document.getElementById("discription")) {
		var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "";
		var discription = document.getElementById("discription");
		discription.firstChild.nodeValue = text;
	}
	return true;
}
function countBodyChidren() {
	var body_element = document.getElementsByTagName("ul")[0];
	//alert(body_element.nodeType);
}
window.onload = countBodyChidren;

function prepareGallery() {
	if(!document.getElementsByTagName) {
		return false;
	}
	if(!document.getElementById) {
		return false;
	}
	if(!document.getElementById("imagegallery")) {
		return false;
	}
	var gallery = document.getElementById("imagegallery");
	var links = gallery.getElementsByTagName("a");
	for(var i=0; i<links.length; i++) {
		links[i].onclick = function() {
			return !showPic(this);
		}
	}
}

function addLoadEvent(func) {
	var oldonload = window.onload;
	if(typeof window.onload != "function") {
		window.onload = func;
	} else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}

addLoadEvent(createPElement);
addLoadEvent(prepareGallery);

function createPElement() {
	var img = document.createElement("img");
	img.setAttribute("id", "placeholder");
	img.setAttribute("src", "images/4.jpg");
	img.setAttribute("alt", "placeholder");
	var p = document.createElement("p");
	p.setAttribute("id", "description");
	var txt1 = document.createTextNode("Change an image");
	p.appendChild(txt1);
	//document.body.appendChild(img);
	//document.body.appendChild(p);
	var gallery = document.getElementById("imagegallery");
	insertAfter(img, gallery);
	insertAfter(p,img);
}

function insertAfter(newElement, targetElement) {
	var parent = targetElement.parentNode;
	if(targetElement == parent.lastChild) {
		parent.appendChild(newElement);
	} else {
		parent.insertBefore(newElement, targetElement.nextSibling);
	}
}