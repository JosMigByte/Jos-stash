<!DOCTYPE html>
<html>
<style>
.form{border-style: dashed;}
</style>
<body>
<div class="form">
<form action="uploads2.php" method="post" enctype="multipart/form-data">
	Tipo de vivienda: <select name="tipoCasa">
  			<option value="piso">Piso</option>
  			<option value="casa">Casa</option>
  			<option value="chabola">Chabola</option>
		</select><br>
	Zona: <select name="tipoZona">
  			<option value="centro">Centro</option>
  			<option value="exterior">Exterior</option>
  			<option value="rural">Rural</option>
		</select><br>
	Dirección: <input type="text" name="direccion" required><br>
  	Numero de dormitorios: <input type="radio" name="ndormi" value="1"> 1
  	<input type="radio" name="ndormi" value="2"> 2
  	<input type="radio" name="ndormi" value="3"> 3
  	<input type="radio" name="ndormi" value="4"> 4<br>
  	Precio: <input type="text" name="precio"> 	€<br>
  	Tamaño: <input type="text" name="tamano"><br>
  	<input type="checkbox" name="extra1" value="piscina"> Piscina
	<input type="checkbox" name="extra2" value="jardin"> Jardin
	<input type="checkbox" name="extra3" value="garage" checked> Garage<br> 
    Foto:
    <input type="file" name="fileToUpload" id="fileToUpload"><br>
    Observaciones: <textarea></textarea><br>
    <input type="submit" value="Upload" name="submit">
</form>
</div>
</body>
</html>
