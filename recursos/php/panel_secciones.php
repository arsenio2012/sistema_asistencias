<?php  
	if(isset($_SESSION['usuario'])) {
		// Si hay una session de usuario dependiendo de la seccion nos dará una vista
		require '../vistas/panel/navbar.php';
		if(isset($_GET['section']) && $_GET['section'] == "panel_administrador"){
			require '../vistas/panel/home.php';
		}elseif(isset($_GET['section']) && $_GET['section'] == "administradores"){
			require '../vistas/panel/registros/usuarios.php';
		}elseif(isset($_GET['section']) && $_GET['section'] == "secretarios"){
			require '../vistas/panel/registros/usuarios.php';
		}elseif(isset($_GET['section']) && $_GET['section'] == "docentes"){
			require '../vistas/panel/registros/usuarios.php';
		}elseif(isset($_GET['section']) && $_GET['section'] == "suplentes"){
			require '../vistas/panel/registros/usuarios.php';
		}elseif(isset($_GET['section']) && $_GET['section'] == "registrar_usuarios"){
			require '../vistas/panel/registros/formulario_registro.php';
		}elseif(isset($_GET['section']) && $_GET['section'] == "asistencias"){
			require '../vistas/panel/asistencias/asistencias.php';
		}
	}else{
		// Si no lo lleva al inicio
		header("location: ../index.php");
	}
?>