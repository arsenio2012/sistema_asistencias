<?php  
	require '../funciones.php';
	$obj = new Acciones_Usuario();

	if(!empty($_POST['cedula'])){
		$ci = $_POST['cedula'];
		
		// Verificamos que el usuario o la cedula existe
		$usuario = $obj->verExistenciaUsuarioCedula($ci);
		if($usuario){
			// Vemos si el usuario existente ya tiene una asistencia el dia de hoy
			$asiste_dia = $obj->asistencia_del_dia($ci);
			if(!$asiste_dia){
				// Ahora sí, firmamos la asistencia
				$asistencia = $obj->asistencia_user($ci, "1", "");
				if($asistencia){
					$mensaje = "firmado";
				}else{
					$mensaje = "error_inesperado";
				}
			}else{
				$mensaje = "ya_firmo";
			}
		}else{
			$mensaje = "cedula_no_existe";
		}
	}else{
		$mensaje = "campo_vacio";
	}

	echo $mensaje;
?>