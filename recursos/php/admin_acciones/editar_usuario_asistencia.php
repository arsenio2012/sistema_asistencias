<?php  
	// nuestro objeto
	require '../funciones.php';
	$obj = new Acciones_Usuario();

	// Traemos los datos del formulario
	$id_user = $_POST['id_user'];
	$status = $_POST['status'];
	$observacion = $_POST['observacion'];

	// Ejecutamos nuestra funcion de editar el usuario
	$editar = $obj->editar_asistencia($id_user, $observacion, $status);
	echo $editar;
?>