<?php  
	// Requerimos donde tenemos nuestra conexion a la base de datos
	require 'init.php';

	// Aqui irán nuestras funciones y clases 
	class Acciones_Usuario
	{
		// funcion login
		public function login($usuario, $password){
			global $database;

			$login = $database->select("users",[
				"password"
			], [
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

		// Funcion de asistencia
		public function asistencia_user($ci){
			global $database;

			$asitencia = $database->insert("asistencias",[
				"ci" => $ci,
				"date" => date("Y-m-d:H:s:i")
			]);
			return $database->id();
		}
	}
?>