<?php
$conversor=array(
	"Euro" => array(
		"Libra" => 0.89,
		"Dolares" => 1.10,
	),
	"Dolares" => array(
		"Libra" => 0.81,
		"Euro" => 0.91,
	),
	"Libra" => array(
		"Euro" => 1.12,
		"Dolares" => 1.23,
	),
);
$cantidad_val = $_POST['cantidad'];
$selected_val = $_POST['select1'];
$selected2_val = $_POST['select2'];
$converted = $cantidad_val*$conversor[$selected_val][$selected2_val];
document.write("$_POST['select2']");
?>
