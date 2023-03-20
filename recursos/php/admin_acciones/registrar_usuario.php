<?php  
	// Nuestras clases
	require '../funciones.php';
	$obj = new Acciones_Usuario();

	if (!empty($_POST['nombres'])) {
		$nombres = $_POST['nombres'];
	}else{
		$mensaje = "Falta_campo_nombres";
	}

	if (!empty($_POST['apellidos'])) {
		$apellidos = $_POST['apellidos'];
	}else{
		$mensaje = "Falta_campo_apellidos";
	}

	if (!empty($_POST['email'])) {
		$email = $_POST['email'];
	}else{
		$mensaje = "Falta_campo_email";
	}

	if (!empty($_POST['cedula'])) {
		$cedula = $_POST['cedula'];
	}else{
		$mensaje = "Falta_campo_cedula";
	}

	if (!empty($_POST['telefono'])) {
		$telf = $_POST['telefono'];
	}else{
		$mensaje = "Falta_campo_telefono";
	}

	if (!empty($_POST['rol'])) {
		$rol = $_POST['rol'];
	}else{
		$mensaje = "Falta_campo_rol";
	}

	if (!empty($_POST['inicio_ministerio'])) {
		$inicio_ministerio = $_POST['inicio_ministerio'];
	}else{
		$mensaje = "Falta_campo_inicio_ministerio";
	}

	if(isset($nombres) && isset($apellidos) && isset($email) && isset($cedula) && isset($telf) && isset($rol) && isset($inicio_ministerio)){
		$registrar = $obj->registrar_usuario($nombres, $apellidos, $cedula, $telf, $rol, $email, $inicio_ministerio);
		if($registrar){
	    	$mensaje = "user_registrado";
	    	
	  	}else{
			$mensaje = "error_registro";
		}
	}
	

	echo $mensaje;
?>