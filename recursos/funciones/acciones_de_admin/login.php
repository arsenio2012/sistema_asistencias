<?php  
	// Requerimos nuestra clase de funciones
	require '../main.php';

	// Creamos un objeto
	$obj = new Acciones_Usuario();
	
	// Obtenemos los datos del formulario
	/*if(!empty($_POST['username'])){
		$usuario = $_POST['username'];
	}else{
		$error = "El campo de username está vacio";
	}
	
	if(!empty($_POST['password'])){
		$password = $_POST['password'];
	}else{
		$error = "El campo de username está vacio";
	}*/

	$usuario = $_POST['username'];
	$password = $_POST['password'];

	// Logeamos
	$login = $obj->login($usuario, $password);

	if($login){
		// Defenimos la sesion
		$_SESSION['usuario'] = $usuario;
		echo "true";
	}else{
		echo "false";
	}
?>

