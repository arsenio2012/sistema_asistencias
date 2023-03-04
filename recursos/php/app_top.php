<?php  
	// Nuestra clase y funciones
	require 'funciones.php';
	$obj = new Acciones_Usuario();

	if(isset($_SESSION['usuario'])){
		// Obtenemos datos del usuario
		if(isset($_GET['section']) && $_GET['section'] == "administradores"){
			$usuarios = $obj->usuarios("1");
			$titulo_tabla = "administradores";
			/*echo "<pre>",print_r($usuarios),"</pre>";
			exit();*/
		}elseif (isset($_GET['section']) && $_GET['section'] == "secretarios") {
			$usuarios = $obj->usuarios("2");
			$titulo_tabla = "secretarios";
		}elseif (isset($_GET['section']) && $_GET['section'] == "docentes") {
			$usuarios = $obj->usuarios("3");
			$titulo_tabla = "docentes";
		}elseif (isset($_GET['section']) && $_GET['section'] == "suplentes") {
			$usuarios = $obj->usuarios("4");
			$titulo_tabla = "suplentes";
		}elseif (isset($_GET['section']) && $_GET['section'] == "asistencias") {
			$asistencias = $obj->asistencias_usuarios();
		}		
	}
?>