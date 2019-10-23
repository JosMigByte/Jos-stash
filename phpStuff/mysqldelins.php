<!DOCTYPE html>
<html>

<style>
.form{border-style: dashed;}
</style>
<body>
<div class="form">
<form action="mysql.php" method="post" enctype="multipart/form-data">
	Tu nombre: <input type="text" name="nombre" required><br>
	Tu apellido: <input type="text" name="apellido" required><br>
	Tu tlf: <input type="text" name="tlf" required><br>
	Curso: <select name="curso">
  			<option value="1">Daw</option>
  			<option value="2">Smr</option>
		</select><br>
    <input type="submit" value="submit" name="submit">
</div>
<div class="form">
<form action="mysql.php" method="post" enctype="multipart/form-data">
	Numero matricula a borrar: <input type="text" name="iddel" required><br>
    <input type="submit" value="submit2" name="submit2">
</form>
</div>
</body>
</html>
