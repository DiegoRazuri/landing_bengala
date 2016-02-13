
<?php
 
	$con = mysqli_connect("localhost","bengalap_creator","bengala123@@","bengalap_landing") or die("Some error occurred during connection " . mysqli_error($con));  
	//$con = mysqli_connect("localhost","root","theone888","bengala") or die("Some error occurred during connection " . mysqli_error($con));  


 	$nombre = utf8_decode($_POST['nombre']);
	$correo = $_POST['correo'];
	$campo1 = utf8_decode($_POST['campo1']);
	$campo2 = utf8_decode($_POST['campo2']);
	$mensaje = utf8_decode($_POST['mensaje']);
	$fecha_registro = date("Y-m-d H:i:s"); 



/*function limpiarString($texto)
{
    $textoLimpio = preg_replace('([^A-Za-z0-9])', '', $texto);	     					
    return $textoLimpio;
}
*/
function limpiarCaracteresEspeciales($string ){
	$string = htmlentities($string);
	$string = preg_replace(array('/[^a-zA-Z0-9 -]/', '/[ -]+/', '/^-|-$/'), '\\1', $string);
	return $string;
}


$nombre = limpiarCaracteresEspeciales($nombre);
$campo1 = limpiarCaracteresEspeciales($campo1);
$campo2 = limpiarCaracteresEspeciales($campo2);
$mensaje = limpiarCaracteresEspeciales($mensaje);


		$sql = "INSERT INTO usuarios( nombre, correo, mensaje, industria, cargo, fecha_registro ) VALUES ('$nombre',  '$correo', '$mensaje', '$campo1',  '$campo2', '$fecha_registro')";

		$resultado = mysqli_query($con, $sql);
		if( $resultado == True){
			echo 1;
		}else{
			echo 0;
		}



?>
