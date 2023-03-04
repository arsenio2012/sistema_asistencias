<div class="ui container">
	<?php 
		if(!isset($_GET['section']) || isset($_GET['section']) && $_GET['section'] == "home"){
			require 'vistas/secciones/home.php';
		}	 
	?>
</div>