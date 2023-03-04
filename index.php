<?php require 'recursos/php/app_top.php'; ?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Sistema de asistencias</title>
	<!-- Nuestros estilos -->
	<link rel="stylesheet" href="<?php echo $server;?>recursos/css/semantic.min.css">
</head>
<body>
	<?php  
		// Header
		require 'vistas/header.php'; 

		// Secciones
		require 'recursos/php/secciones.php';

		// Footer
		//require 'vistas/footer.php';
	?>
	<!-- Nuestros scripts -->
	<script src="<?php echo $server;?>recursos/js/JQuery-v3-6-0.js"></script>
	<script src="<?php echo $server;?>recursos/js/funciones.js"></script>
	<script src="<?php echo $server;?>recursos/js/semantic.min.js"></script>
</body>
</html>