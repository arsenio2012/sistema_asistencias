<?php  
	// nuestro objeto
	require '../funciones.php';
	$obj = new Acciones_Usuario();

	// Traemos los datos del formulario
	$id_user = $_POST['id_user'];
	$nombres = $_POST['nombres'];
	$apellidos = $_POST['apellidos'];
	$cedula = $_POST['cedula'];
	$usuario = $_POST['usuario'];
	$correo = $_POST['correo'];
	$rol = $_POST['rol'];

	// Ejecutamos nuestra funcion de editar el usuario
	$editar = $obj->editar_usuario($id_user, $cedula, $nombres, $apellidos, $usuario, $correo, $rol);
	echo $editar;
?>