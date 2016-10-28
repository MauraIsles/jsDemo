var beatals = Array();
beatals[0] = "John";
beatals[1] = "Paul";
beatals[2] = "Geroge";
beatals[3] = "Ringo";
alert(beatals[4]);
var beatals2 = Array("John", "Paul", "Geroge", "Ringo");
alert(beatals[3]);


function createPElement() {
	var para = document.createElement("p");
	var txt1 = document.createTextNode("This is ");
	var emE = document.createElement("em");
	var txt2 = document.createTextNode("my");
	var txt3 = document.createTextNode(" content.");
	para.appendChild(txt1);
	emE.appendChild(txt2);
	para.appendChild(emE);
	para.appendChild(txt3);
	var testdiv = document.getElementById("testdiv");
	testdiv.appendChild(para);
}
window.onload = createPElement;