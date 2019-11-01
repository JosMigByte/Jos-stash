nGuess=prompt("Inseta el numero a adivinar");
nGuess=parseInt(nGuess);
triedNumber=-1;
do{
	triedNumber=prompt("Inserta el numero que crees que es:");
	if (triedNumber>nGuess){
		alert("El numero que buscas es menor");
	}
	if (triedNumber<nGuess){
		alert("El numero que buscas es mayor");
	}
	if (triedNumber==nGuess){
		alert("Has ganado! El numero es el "+nGuess);
	}
}while (triedNumber!=nGuess)