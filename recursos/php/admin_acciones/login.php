<?php  
	// Nuestras clases y funciones
	require '../funciones.php';
	// Creamos un objeto
	$obj = new Acciones_Usuario(); 

	// Obtenemos los datos del formulario
	$usuario = $_POST['usuario'];
	$password = $_POST['password'];

	$login = $obj->login($usuario, $password);

	// Si la sentencia es verdadera hacemos lo siguiente
	if($login){
		// Iniciamos la sesion
		$_SESSION['usuario'] = $usuario;
		echo "true";
	}else{
		echo "false";
	}
?>