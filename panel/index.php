<?php require '../recursos/php/app_top.php'; ?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title> <?php echo $titulo." ".$version;?> </title>
	<link rel="stylesheet" href="<?php echo $server;?>recursos/css/semantic.min.css">
	<link rel="stylesheet" href="<?php echo $server;?>recursos/css/datatables.min.css">
</head>
<body>
	<div class="ui grid">
		<?php  require '../vistas/panel/header.php';?>
	</div>	
	<div class="ui grid">
		<?php  require '../recursos/php/panel_secciones.php';?>
	</div>
	<script src="<?php echo $server;?>recursos/js/JQuery-v3-6-0.js"></script>
	<script src="<?php echo $server;?>recursos/js/funciones.js"></script>
	<script src="<?php echo $server;?>recursos/js/semantic.min.js"></script>
	<script src="<?php echo $server;?>recursos/js/datatables.min.js"></script>
</body>
</html>