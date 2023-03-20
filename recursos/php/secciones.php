<?php  
	if(!isset($_GET['section']) || isset($_GET['section']) && $_GET['section'] == "home"){
		require 'vistas/secciones/home.php';
	}elseif (isset($_GET['section']) && $_GET['section'] == "login") {
		require 'vistas/login.php';
	}
?>