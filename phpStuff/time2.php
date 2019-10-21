<?php 
    function calcularDiasTimeStamp($dia,$mes){
        $fecha=mktime(0, 0, 0, $mes, $dia);
        echo strftime("%A, %d de %B de %Y", $fecha);
        echo("<br><br>");
        $fecha2=mktime();
        echo strftime("%A, %d de %B de %Y", $fecha2);
        echo("<br><br>");
        $dias=$fecha-$fecha2;
        $sol=(int)($dias/86400);
        return $sol;
    }
    $diasHasta=calcularDiasTimeStamp(10,10);
    echo ("Quedan $diasHasta dias hasta tu cumpleaños.")
?>