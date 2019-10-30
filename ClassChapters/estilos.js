//esto es el tema inicial que tiene la pagina.
function norTheme(){
	document.getElementById("stylebar").style.border="thick solid #000000"; 
	document.getElementById("stylebar").style.backgroundColor="#EEEEFC";
	document.getElementById("body").style.backgroundColor="#FFFECD";
	document.getElementById("nortext").style.visibility="initial"; // si el texto esta escondido, lo pone invisible
	document.getElementById("marctext").style.border="thick solid #000000"; 
	document.getElementById("marctext").style.backgroundColor="#FDFF3D";
}
//este es el secundario, que es el minimalista
function minTheme(){
	document.getElementById("stylebar").style.border=""; //Si no tiene nada, simplemente es como si no se le hubiese puesto estilo.
	document.getElementById("stylebar").style.backgroundColor="";
	document.getElementById("body").style.backgroundColor="";
	document.getElementById("nortext").style.visibility="hidden"; //esconde el texto del modo minimalista
	document.getElementById("marctext").style.border=""; 
	document.getElementById("marctext").style.backgroundColor="";
}

textSize=16;
//incrementar texto
function increText(){
	textSize++;
	document.getElementById("textToModi").style.fontSize=textSize;
}
//decrementar text
function decreText(){
	textSize--;
	document.getElementById("textToModi").style.fontSize=textSize;
}
//tamaño normal text
function defauText(){
	document.getElementById("textToModi").style.fontSize="16";
}

//poner texto a la derecha
function dereText(){
	document.getElementById("textToModi").style.textAlign="right"
}
//poner texto al centro
function centText(){
	document.getElementById("textToModi").style.textAlign="center"
}
//poner texto al izquierda
function izquText(){
	document.getElementById("textToModi").style.textAlign="left"
}
//poner texto al justificada
function justText(){
	document.getElementById("textToModi").style.textAlign="justify"
}