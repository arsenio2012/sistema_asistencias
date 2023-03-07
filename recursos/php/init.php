<?php
	session_start();
	  
	// Usaremos la libreria medoo
	require 'medoo.php';

	// Definimos zona horaria
	date_default_timezone_set("America/Caracas");
	setlocale(LC_ALL, "es_ES");

	// Definimos servidor
	$server = "http://192.168.1.9/github/sistema_asistencias/";

	// Defenimos el nombre y la version del sistema
	$titulo = "Sistema de asistencias";
	$version = "1.1";

	// Conexion a la base de datos
	use Medoo\Medoo;

	try{
		$database = new Medoo([
			'type' => "mysql",
			'host' => "localhost",
			'database' => "sistema_asistencia",
			'username' => "root",
			'password' => "",
		]);
	}catch(PDOException $e){
		echo "Error: No se ha podido conectar a la base de datos.";
	}
?>