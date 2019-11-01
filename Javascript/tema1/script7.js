nGuess=prompt("Inseta el numero a adivinar");
triedNumber=-1;
while (triedNumber!=nGuess){
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
}