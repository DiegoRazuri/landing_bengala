<?php
	$destino = "equipo@bengala.pe";
	$desde	 = "From:". "FormularioWeb";
	$nombre	 = $_POST['nombre'];
	$mensaje = $_POST['mensaje']."  -  ";
	$mensaje .= "Correo: ".$_POST['correo']."  -  ";

	mail($destino, $nombre, $mensaje, $desde);
	echo("1");

?>

