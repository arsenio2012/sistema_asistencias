<?php  
	require '../funciones.php';
	$obj = new Acciones_Usuario();

	if(!empty($_POST['asistencia'])){
		$status = $_POST['asistencia'];
	}else{
		$mensaje = "campo_status_vacio";
	}

	if(!empty($_POST['cedula'])){
		$ci = $_POST['cedula'];
	}else{
		$mensaje = "campo_cedula_vacio";
	}

	if(isset($ci) && isset($status)){
		$observacion = $_POST['observacion'];

		// Verificamos que el usuario o la cedula existe
		$usuario = $obj->verExistenciaUsuarioCedula($ci);
		if($usuario){
			// Vemos si el usuario existente ya tiene una asistencia el dia de hoy
			$asiste_dia = $obj->asistencia_del_dia($ci);
			if(!$asiste_dia){
				// Ahora sí, firmamos la asistencia
				$asistencia = $obj->asistencia_user($ci, $status, $observacion);
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
	}

	echo $mensaje;
?>