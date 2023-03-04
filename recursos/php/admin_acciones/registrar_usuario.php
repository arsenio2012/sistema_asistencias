<?php  
	// Nuestras clases
	require '../funciones.php';
	$obj = new Acciones_Usuario();

	if (!empty($_POST['nombres'])) {
		$nombres = $_POST['nombres'];
	}else{
		$mensaje = "Falta el campo de nombres";
	}

	if (!empty($_POST['apellidos'])) {
		$apellidos = $_POST['apellidos'];
	}else{
		$mensaje = "Falta el campo de apellidos";
	}

	if (!empty($_POST['email'])) {
		$email = $_POST['email'];
	}else{
		$mensaje = "Falta el campo de email";
	}

	if (!empty($_POST['cedula'])) {
		$cedula = $_POST['cedula'];
	}else{
		$mensaje = "Falta el campo de cedula";
	}

	if (!empty($_POST['telefono'])) {
		$telf = $_POST['telefono'];
	}else{
		$mensaje = "Falta el campo de telefono";
	}

	if (!empty($_POST['rol'])) {
		$rol = $_POST['rol'];
	}else{
		$mensaje = "Falta el campo del rol";
	}

	$registrar = $obj->registrar_usuario($nombres, $apellidos, $cedula, $telf, $rol, $email);
	echo $registrar;
	if($registrar){
    	/*$mensaje = "<p>Se ha registrado el usuario $nombres $apellidos<p>";
    	require '../../../vistas/notificaciones/success/usuario_creado.php';*/
  	}else{
		/*$mensaje = "<p>Ha ocurrido un error al crear el usuario, intenta de nuevo mas tarde.</p>";
		require '../../../vistas/notificaciones/error/crear_usuario.php';*/
	}
?>