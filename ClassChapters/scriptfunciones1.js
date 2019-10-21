//prmero
document.write("<br>Numero mayor ");
function mayorValor(n1,n2,n3,n4){
	return Math.max.apply(null, arguments);
}
document.write(mayorValor(2,6,4,9));
//segundo
document.write("<br>Lanzamiento de un dado ");
function dice(){
	return Math.floor(Math.random() * 6)+1;
}
document.write(dice());
//tercero
document.write("<br>Lanzamiento de 6000 dados__");
function dice6000(){
	$throws=0;
	$results=[0,0,0,0,0,0]
	while ($throws!=6000){
		$result= Math.floor(Math.random() * 6);
		$results[$result]+=1;
		$throws++;
	}
	$resultFinal="El dado fue tirado 6000 veces y a dado: "+$results[0]+" veces 1, "+$results[1]+" veces 2, "+$results[2]+" veces 3, "+$results[3]+" veces 4, "+$results[4]+" veces 5 y "+$results[5]+" veces 6.";
	return $resultFinal;
}
document.write(dice6000());
//cuarto
document.write("<br>Calcular volumen esfera: ");
function calcSphere(rad){
  	$radius = arguments[0];
  	$radius = Math.abs($radius);
  	$volume = (4/3) * Math.PI * Math.pow($radius, 3);
  	$volume = $volume.toFixed(0 );
  	return $volume;
}
document.write(calcSphere(50));
//6 recursive
document.write("<br>Potencia: ");
function exponent(a,n) {
   if (n === 0) {
    	return 1;
    	}
    else {
    	return a * exponent(a, n-1);
  	}
};
document.write(exponent(4,4));
//7 recursive two
