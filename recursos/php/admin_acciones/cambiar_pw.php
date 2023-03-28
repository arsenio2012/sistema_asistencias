<?php  
	// nuestro objeto
	require '../funciones.php';
	$obj = new Acciones_Usuario();

	// Traemos los datos del formulario
	if(!empty($_POST['new_pw'])){
		$pw = $_POST['new_pw'];
	}else{
		$mensaje = "cedula_vacio";
	}
	
	if(!empty($_POST['confirmacion'])){
		$confirmacion = $_POST['confirmacion'];
	}else{
		$mensaje = "cedula_confirmacion_vacio";
	}

	if(isset($pw) && isset($confirmacion)){
		// Si ya hay datos definidos obtenemos la id del usuario
		$id_user = $_POST['id_user'];
		$pw = $_POST['new_pw'];
		if($pw == $confirmacion){
			// Si ya todo bien, procesamos la informacion
			$update_pw = $obj->update_pw($id_user, $pw);
			if($update_pw){
				$mensaje = "true";
			}else{
				$mensaje = "false";
			}
		}else{
			$mensaje = "pw_incoinciden";
		}
	}

	echo $mensaje;
?>