<?php  
	require '../funciones.php';
	$obj = new Acciones_Usuario();

	$ci = $_POST['cedula'];

	$usuario = $obj->verExistenciaUsuarioCedula($ci);
	//echo $usuario;
	if($usuario){
		$asistencia = $obj->asistencia_user($ci);
		echo $asistencia;
	}
?>