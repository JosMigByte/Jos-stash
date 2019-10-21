<?php
function saludo($arg1, $arg2 = NULL){
	if (is_null($arg2)){
		echo $arg1;
	}
	else{
		echo "$arg1, $arg2";
	}
}
saludo("Buenas","Jos\n");

function ivaCalc($arg1, $arg2 = NULL){
	if (is_null($arg2)){
		$precio=$arg1*0.21;
		echo $precio+$arg1;
	}
	else{
		$precio=$arg1*($arg2/100);
		echo $precio+$arg1;
	}
}
ivaCalc(220, 220);

function findMin(...$arg1){
	$arrayArg=array();
	for($i=0;$i<func_num_args();$i++) {
    	$arrayArg[$i]=func_get_arg($i);
    }
    $arrayMinMax=array(
    	0 => min ($arrayArg),
    	1 => max ($arrayArg),
    );
    echo "$arrayMinMax[0] es el minimo y $arrayMinMax[1] es el maximo.";
}
findMin(1,2,3,4,5);
$arrayFindNum=array(
	"1",
	"4",
	"8",
	"1",
	"13",
	"12",
	"1",
);
function arrayFind($array){
	while current($array)!="13"{
		next($array);
		if current($array)=="13"{
			echo "Encontrado!";
		}
	}
}
arrayFind($arrayFindNum);
?>

