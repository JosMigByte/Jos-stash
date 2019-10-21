<?php 
$columnaArray=array(
true, 
false,
0,
-1,
"1",
"0",
"-1",
null,
array(),
"php",
"");
$rowArray=array(
true, 
false,
0,
-1,
"1",
"0",
"-1",
null,
array(),
"php",
"");
for($i;$i<$rowArray;$i++){
	for($j;$j<$columnaArray;$j++){
		if (rowArray[$i]==columnArray[$j]){
			echo "True";
		}else{
			echo "False";
		}
	}
	echo "<br>";
}
?>