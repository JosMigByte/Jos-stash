<?php
$testo="";
$testo2=null;
$testo3="a";
$nuli=null;
settype ($testo, "integer");
echo(gettype ($testo));
$array1 = array(
	$testo,
	$testo2,
	$testo3,
);
foreach($array1 as $key){
	var_dump(empty($key));
}
define("CONSTANTE", "PI");
function foo ($variable){
	echo(gettype ($variable));
	if (empty($variable)==false){
		echo ($variable);
		var_dump(empty($variable));
	}
}
foo($testo3);

$incre=5;
function increment0(&$arg_1){
	$arg_1=$arg_1+1;
}
increment0($incre);
echo $incre;
function recursividad($arg_1) {
	if ($arg_1<100){
		echo "$arg_1 \n";
		recursividad($arg_1 + 1);
	}
}
recursividad(11);
?>