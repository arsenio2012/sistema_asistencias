<?php require 'recursos/funciones/app_top.php'; ?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="<?php echo $server; ?>recursos/css/semantic.min.css">
	<link rel="stylesheet" href="<?php echo $server; ?>recursos/css/estilos.css">
	<title>Sistema asistencias <?php echo $version; ?></title>
</head>
<body>
	<!-- Nuestro html en general -->
	<?php
		// Header 
		require 'vistas/header.php'; 

		// secciones
		require 'vistas/secciones.php';

		// footer
		# CODE
	?>
	<!-- Nuestro Js -->
	<script src="<?php echo $server; ?>recursos/js/JQuery-v3-6-0.js"></script>
	<script src="<?php echo $server; ?>recursos/js/funciones.js"></script>
	<script src="<?php echo $server ?>recursos/js/semantic.min.js"></script>
</body>
</html>