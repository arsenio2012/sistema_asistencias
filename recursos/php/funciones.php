<?php  
	// Nuestra conexion a la base de datos
	require 'init.php';

	// Nuestra clase
	class Acciones_Usuario{
		// Funcion de iniciar sesión
		public function login($usuario, $password){
			global $database;

			$login = $database->select("users",[
				"password"
			],[
				"OR" => [
					"username" => $usuario,
					"password" => $password
				]
			]);

			$password_db = $login[0]["password"];

			if(password_verify($password, $password_db)){
				return true;
			}else{
				return false;
			}
		}
		
		// Funcion para ver si un usuario existe mediante el username
		public function verExistenciaUsuario($username){
			global $database;

			$user = $database->count("users",[
				"OR" => [
					"username" => $username
				]
			]);
			return $user;
		}

		// Funcion para ver si un usuario existe mediante la cedula
		public function verExistenciaUsuarioCedula($ci){
			global $database;

			$user = $database->count("users",[
				"OR" => [
					"ci" => $ci
				]
			]);
			return $user;
		}

		// Checkeo general antes del registro (no puede haber doble usuario con la misma cedula, correo o username)
		public function antiDatosDoble($ci, $username){
			global $database;

			$users = $database->count("users", [
				"OR" => [
					"ci" => $ci,
					"username" => $username
				]
			]);
			return $users;
		}

		// Traemos todos los roles
		public function roles(){
			global $database;

			$roles = $database->select("roles",[
				"id_rol",
				"descripcion"
			]);

			return $roles;
		}

		// Registrar usuario
		public function registrar_usuario($nombres, $apellidos, $ci, $telf, $rol, $email, $inicio_ministerio){
			global $database;

			if($this->antiDatosDoble($ci, $username) == 0){
				$registrar_usuario = $database->insert("users", [
					"ci" => $ci,
					"nombres" => $nombres,
					"apellidos" => $apellidos,
					"username" => $email,
					"password" => password_hash($ci, PASSWORD_BCRYPT),
					"id_rol" => $rol,
					"correo" => $email,
					"created_at" => date("Y-m-d"),
					"fecha_inicio_ministerio" => $inicio_ministerio
				]);
				return $database->id();
			}else{
				return false;
			}

			$registrar_usuario = $database->insert("users", [
				"ci" => $ci,
				"nombres" => $nombres,
				"apellidos" => $apellidos,
				"username" => $email,
				"password" => password_hash($ci, PASSWORD_BCRYPT),
				"id_rol" => $rol,
				"correo" => $email,
				"created_at" => date("Y-m-d"),
				"fecha_inicio_ministerio" => $inicio_ministerio
			]);
			return $database->id();
		}

		// Funcion para ver la exitencia del usuario
		public function asistencia_del_dia($ci){
			global $database;
			$asistencia_hoy = $database->select("asistencias", "ci", [
			    "AND" => [
			        "ci" => $ci,
			        "date[>=]" => date("Y-m-d 00:00:00"), // Hoy a las 00:00:00
			        "date[<=]" => date("Y-m-d 23:59:59"), // Hoy a las 23:59:59
			    ]
			]);

			return $asistencia_hoy;
		}

		// Funcion de asistencia
		public function asistencia_user($ci){
			global $database;

			$asitencia = $database->insert("asistencias",[
				"ci" => $ci,
				"date" => date("Y-m-d:H:s:i")
			]);
			return $database->id();
		}

		// Funcion para ver los usuarios registrados
		public function usuarios($rol){
			global $database; 

			$usuarios = $database->select("users", [
				"id_user",
				"ci",
				"nombres",
				"apellidos",
				"username",
				"id_rol",
				"correo",
				"created_at"
			],[
				"id_rol" => $rol
			]);
			return $usuarios;
		}

		// Funcion para ver datos del usuario
		public function ver_usuario($id_user){
			global $database; 

			$usuarios = $database->select("users",[
				"[>]roles" => ["id_rol" => "id_rol"]
			], [
				"users.ci",
				"users.nombres",
				"users.apellidos",
				"users.username",
				"users.id_rol",
				"users.correo",
				"users.created_at",
				"users.fecha_inicio_ministerio",
				"roles.descripcion"
			],[
				"id_user" => $id_user
			]);
			return $usuarios;
		}

		function calcular_dias($fecha_ingreso){
			// Convertimos la fecha de ingreso a un objeto DataTime
			$fecha1 = new DateTime($fecha_ingreso);

			// Obtenemos la fecha actual
			$fecha2 = new DateTime();

			// Calculamos la distancia entre las dos fechas
			$intervalo = $fecha1->diff($fecha2);

			// Obtenemos los años, meses y días trasncurridos
		    $anios = $intervalo->y;
		    $meses = $intervalo->m;
		    $dias = $intervalo->d;

		    // Construimos la cadena de resultado
		    $resultado = '';
		    if ($anios > 0) {
		        $resultado .= $anios . ' año(s) ';
		    }
		    if ($meses > 0) {
		        $resultado .= $meses . ' mes(es) y ';
		    }
		    if ($dias > 0) {
		        $resultado .= $dias . ' día(s)';
		    }

			// Retornamos el resultado
    		return $resultado;
		}

		public function eliminar_usuario($id_user){
			global $database;

			$eliminar = $database->delete("users",[
				"id_user" => $id_user
			]);
			return $eliminar->rowCount;
		}

		// Ver las asistencias
		public function asistencias_usuarios(){
			global $database;

			$asistencias = $database->select("asistencias",[
				"[>]users" => ["ci" => "ci"],
				"[>]roles" => ["users.id_rol" => "id_rol"]
			], [
				"asistencias.ci",
				"asistencias.date",
				"asistencias.fecha",
				"asistencias.hora",
				"users.nombres",
				"users.apellidos",
				"users.id_rol",
				"roles.descripcion"
			]);

			return $asistencias;
		}

		// Le decimos si un link está activo
		public function seccion_activa($seccion_actual){
			$seccion_array = explode('/', $_SERVER['REQUEST_URI']); 

			$seccion = end($seccion_array);
			if($seccion_actual == $seccion){
				echo "active";
			}
		}

		// Editar usuario
		public function editar_usuario($id_user, $cedula, $nombres, $apellidos, $usuario, $correo, $rol){
			global $database;

			$editar = $database->update("users",[
				"ci" => $cedula,
				"nombres" => $nombres,
				"apellidos" => $apellidos,
				"username" => $usuario,
				"correo" => $correo,
				"id_rol" => $rol
			],[
				"id_user" => $id_user
			]);

			return $editar->rowCount();
		}
	}
?>