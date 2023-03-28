<?php  
	if(isset($_SESSION['usuario'])) {
		if($id_rol <= 2){
			// Si hay una session de usuario dependiendo de la seccion nos dará una vista
			require '../vistas/panel/navbar.php';
			if(isset($_GET['section']) && $_GET['section'] == "panel_administrador"){
				require '../vistas/panel/home.php';
			}elseif(isset($_GET['section']) && $_GET['section'] == "administradores"){
				require '../vistas/panel/registros/usuarios.php';
			}elseif(isset($_GET['section']) && $_GET['section'] == "cambiar_pw"){
				require '../vistas/panel/cambiar_pw.php';
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
			}elseif(isset($_GET['section']) && $_GET['section'] == "registrar_asistencia"){
				require '../vistas/panel/asistencias/registro.php';
			}elseif(isset($_GET['section']) && $_GET['section'] == "manual_usuario"){
				require '../vistas/panel/manual_usuario.php';
			}
		}else{
			echo "<script>
				alert('El panel es solo para administradores');
				window.location.href = 'home';
				</script>";
		}
	}else{
		// Si no lo lleva al inicio
		header("location: ../index.php");
	}
?>