<?php
function openMySQL(){ 
	$conexion = new mysqli('localhost', 'phpmyadmin', 'patata', 'phpmyadmin');
	if ($conexion->connect_errno){
		die('Connect error: '.$conexion->connect_errno);
	}else{
		//connected
		return $conexion;
	}
}

function insert(){
	$conexion = openMySQL();
	$nombre=$_POST['nombre'];
	$apellido=$_POST['apellido'];
	$telefono=$_POST['tlf'];
	$telefono=intval($telefono); 
	$curso=$_POST['curso'];
	$curso=intval($curso); 
	$insertnew="INSERT INTO alumno(nombre,apellidos,tlf,curso) VALUES (\"$nombre\",\"$apellido\",$telefono,$curso);";
	$conexion->query($insertnew);
	$conexion->close();
}

function showTableAlumno(){
	$conexion = openMySQL();
	$sql = "SELECT * FROM alumno ORDER BY num_matricula desc";
	$sqlTableName = "SHOW columns FROM alumno";
	$result = $conexion->query($sql);
	$resultName = $conexion->query($sqlTableName);

	$row_cnt = $result->num_rows;
	$col_cnt=mysqli_num_fields($result);

	$fullTable="<table border='1'>\n";
	if ($result->num_rows > 0) {
		$fullTable="$fullTable <tr>\n";
		for ($i=0;$i<$col_cnt;$i++){
			$row = mysqli_fetch_array($resultName);
			$fullTable="$fullTable <td>$row[0]</td>\n";
		}
		$fullTable="$fullTable </tr>\n";
		while ($row=mysqli_fetch_row($result)){
			$fullTable="$fullTable <tr>\n";
			for ($i=0;$i<$col_cnt;$i++){
				$fullTable="$fullTable <td>$row[$i]</td>\n";
			}
			$fullTable="$fullTable </tr>\n";
		}
		$fullTable="$fullTable </table>";
		echo ("$fullTable");
	} else {
	    echo "0 results";
	}
	$conexion->close();
}
if (isset($_POST['submit2'])){ 
		$iddel=$_POST['iddel'];
		$iddel=intval($iddel); 
		$conexion = openMySQL();
		$insertnew="DELETE FROM alumno WHERE num_matricula=$iddel;";
		$conexion->query($insertnew);
		$conexion->close();
}
if (isset($_POST['submit'])){ 
	insert();
}
showTableAlumno();
?>
