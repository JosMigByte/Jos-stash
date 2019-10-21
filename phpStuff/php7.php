<?php

$unoArray=array(
	array("x","y","z",),
	array("a","b","c",),
	array("d","e","f",),
);

$dosArray=array(
	"0",
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"10",
);

/*echo "<table>\n";

echo "<br>";
for($i=0;$i<sizeof($unoArray);$i++){
	for($j=0;$j<sizeof($dosArray);$j++){
		echo "$i $j\n";
	}
}


foreach ($unoArray as $key) {;
	foreach ($dosArray as $key) {
		echo "$key\n";
	};
}*/
for($fil=0;$fil<3;$fil++){
	for($col=0;$col<5;$col++){
		echo $unoArray[$fil][$col];
	}
	echo "\n";
}

?> 