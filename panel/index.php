<?php require '../recursos/php/app_top.php'; ?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title> <?php echo $titulo." ".$version;?> </title>
	<link rel="stylesheet" href="<?php echo $server;?>recursos/css/semantic.min.css">
	<link rel="stylesheet" href="<?php echo $server;?>recursos/css/datatables.min.css">
	<link rel="icon" href="<?php echo $server; ?>recursos/imagenes/instituto.png">
	<script type="text/javascript" src="<?php echo $server; ?>recursos/js/Highcharts/code/highcharts.js"></script>
	<!-- <script type="text/javascript" src="<?php echo $server; ?>recursos/js/loader.js"></script> no sirve sin internet, toca descartarlo.. BORRADO --> 
</head>
<body>
	<div class="ui grid">
		<?php  require '../vistas/panel/header.php';?>
	</div>	
	<div class="ui stackable grid">
		<?php  require '../recursos/php/panel_secciones.php';?>
	</div>
	<script src="<?php echo $server;?>recursos/js/JQuery-v3-6-0.js"></script>
	<script src="<?php echo $server;?>recursos/js/funciones.js"></script>
	<script src="<?php echo $server;?>recursos/js/semantic.min.js"></script>
	<script src="<?php echo $server;?>recursos/js/datatables.min.js"></script>
	<script src="<?php echo $server;?>recursos/js/moment.min.js"></script>
	<script src="<?php echo $server;?>recursos/js/moment-with-locales.js"></script>
</body>
</html>