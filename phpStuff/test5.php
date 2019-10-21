<?php
$array1 = array(
         "a",
         "b",
    6 => "c",
         "d",
);
$a = array();
$a[0][0]="a";
$a[0][1]="ab";
$a[0][2]="ac";
$a[1][0]="aa";
$a[2][0]="z";
foreach ($a as $key) {
	foreach ($key as $key2){
		echo "$key2\n";
	}
}

foreach ($array1 as $key => $value) {
	echo $key;
	echo $value;
}
$a[6]="coo";
$a[0][2]="acO";
echo $a[6];
echo $a[0][2];
$array6=array(
	"1",
	"1",
	"2",
	"1",
	"1",
	"1",
	"1",
	"1",
	"1",
);
$array3 = array_fill(0, 1000000, $array6);
$a=5;
if ($a == 5):
	echo "A es igual a 5";
endif;

echo $array3[2][2];

//crear array primera positicon otra array con los diaS DE LA SEMANA y segunda pos un array bi con las horas de cada modulo de mi horario

$arraySemana=array(
	"Lunes",
	"Martes",
	"Miercoles",
	"Jueves",
	"Viernes",
);
$asigSemana = array(
	"Lunes" => array(
		1 => "HLC",
		2 => "WDES",
		3 => "WDES",
		4 => "WDEC",
		5 => "WDEC",
		6 => "DESPLI",
	),
	"Martes" => array(
		1 => "WDES",
		2 => "WDES",
		3 => "Despl",
		4 => "Despl",
		5 => "EINEM",
		6 => "EINEM",
	),
	"Miercoles" => array(
		1 => "DIW",
		2 => "DIW",
		3 => "WDES",
		4 => "WDES",
		5 => "HLC",
		6 => "HLC",
	),
	"JUEVES" => array(
		1 => "DIW",
		2 => "DIW",
		3 => "DWEC",
		4 => "DWES",
		5 => "EINEM",
		6 => "EINEM",
	),
	"Lunes" => array(
		1 => "HLC",
		2 => "WDES",
		3 => "WDES",
		4 => "WDEC",
		5 => "WDEC",
		6 => "DESPLI",
	),
);
echo("<table>");
foreach ($arraySemana as $dia){
	echo("<th>$dia</th>");
	}
for ($i=0;$i<6;$i++){
	echo("<tr>");
	foreach($asigSemana[i] as $asignatura){ 
		echo($asignatura);	}
}
define("CONSTANTE", "PI");
?>