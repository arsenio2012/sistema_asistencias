<?php  
	session_start();
	// Usaremos la libreria medoo, un framework que nos facilitará las conexiones la base de datos
	require 'medoo.php';

	// Nuestro servidor
	$server = "http://192.168.1.8/github/sistema_asistencias/";

	// Aplicacion version
	$version = "1.0";

	// Nuestra zona horaria
	date_default_timezone_set("America/Caracas");
	setlocale(LC_ALL,"es_ES");
	
	// Aqui iran nuestra configuracion a la base de datos
	use Medoo\Medoo;

	try{
		$database = new Medoo([
			'type' => "mysql",
			'host' => "localhost",
			'database' => "sistema_asistencia",
			'username' => "root",
			'password' => "",
		]);
	}catch(PDFException $e){
		echo "ERROR: no se pudo conectar a la base de datos.";
	}
?>