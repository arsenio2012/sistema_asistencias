<?php  
	// Nuestra clase y funciones
	require 'funciones.php';
	$obj = new Acciones_Usuario();

	if(isset($_SESSION['usuario'])){
		// Obtenemos datos del usuario
		$usuario_datosS = $obj->ver_usuarioByUsername($_SESSION['usuario']);
		foreach ($usuario_datosS as $dato_user) {
			$id_user = $dato_user['id_user'];
			$nombres = $dato_user['nombres'];
			$apellidos = $dato_user['apellidos'];
			$rol = $dato_user['descripcion'];
			$id_rol = $dato_user['id_rol'];
		}
		if(isset($_GET['section']) && $_GET['section'] == "administradores"){
			$usuarios = $obj->usuarios("1");
			$titulo_tabla = "administradores";
			/*echo "<pre>",print_r($usuarios),"</pre>";
			exit();*/
			if($id_rol == 2){
				$boton_eliminar = 1; // Desactivamos el boton eliminar
			}
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
			// Obtenemos las asistencias e inasistencias
			$asistencias = $obj->asistencias_usuarios();	

			// Ejemplo para lo del grafico
			$asistencias_grafico = [
				'asistente' => $obj->contar_asistencias(1),
				'inasistente' => $obj->contar_asistencias(2),
				'justificado' => $obj->contar_asistencias(3),
			];

			// Precesarmos los datos
			$data = array(
				['Asistencia', 'Asistentes', 'Inasistente', 'Justificado'],
  				['Cantidad', $asistencias_grafico['asistente'], $asistencias_grafico['inasistente'], $asistencias_grafico['justificado']]
			);
		}		
	}
?>