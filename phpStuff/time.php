<?php
function intervaloCumpleaños($cumpleañosDia, $cumpleañosMes){
	$target_days =  mktime(0,0,0,$cumpleañosDia,$cumpleañosMes);
	$today = time();
	$diff_days = ($target_days - $today);
	$days = (int)($diff_days/86400);
	$horas = (int)($diff_days/3600);
	while($horas>=25){
		$horas=$horas-24;
		$days++;
	}
	print "Dias hasta el proximo cumpleaños: $days dias y $horas horas!"."\n";
}
intervaloCumpleaños(12,11);
?>