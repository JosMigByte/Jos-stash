<?php
   echo ("<h1> Inserción de vivienda</h1><br><p>Estos son los datos introducidos.</p>");
   $tipoCasa=$_POST['tipoCasa'];
   echo ("Tipo: $tipoCasa<br>");
   $tipoZona=$_POST['tipoZona'];
   echo ("Zona: $tipoZona<br>");
   $direccion=$_POST['direccion'];
   echo ("Direccion: $direccion<br>");
   if (isset($_POST['ndormi']))
      $ndormitorios= $_POST['ndormi'];
      echo ("Numero dormitorios: $ndormitorios<br>");
   $precio=$_POST['precio'];
   echo ("Precio: $precio<br>");
   $tamano=$_POST['tamano'];
   echo ("Tamaño: $tamano metros cuadrados<br>");
   $extras="";
   if (isset($_POST['extra1'])) 
      $extra1=$_POST['extra1'];
      $extras="$extras $extra1 ";
   if (isset($_POST['extra2']))
      $extra12=$_POST['extra1'];
      $extras="$extras $extra2 ";
   if (isset($_POST['extra3']))
      $extra3=$_POST['extra1'];
      $extras="$extras $extra3 ";
   echo ("Extras: $extras");

    $target_path = "./uploads/";  
    $target_path = $target_path.basename( $_FILES['fileToUpload']['name']);   
   
    if(!file_exists($_FILES['myfile']['tmp_name']) || !is_uploaded_file($_FILES['fileToUpload']['name'])) {
      if(move_uploaded_file($_FILES['fileToUpload']['tmp_name'], $target_path)) {  
         echo "File uploaded successfully!";  
   }else{  
        echo "Sorry, file not uploaded, please try again!";  
   }
}
?>  