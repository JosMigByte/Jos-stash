<!DOCTYPE html>
<html>

<style>
.form{border-style: dashed;}
</style>
<body>
<div class="form">
<form action="sesion.php" method="post" enctype="multipart/form-data">
	Tu nombre: <input type="text" name="nombre" required><br>
	<?php
		sesion_id("nombre");
		session_start();
		$_SESSION["nombre"] = "nombre";
	?>
    <input type="submit" value="Upload" name="submit">
</form>
</div>
</body>
</html>
