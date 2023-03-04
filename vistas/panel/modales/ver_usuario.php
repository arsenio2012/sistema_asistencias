<?php 
	$idu = json_decode($_POST['id_user']);
	foreach ($idu as $id) {
		$id_usuario = $id;
	}

  // Nuestra clase y funciones
  require '../../../recursos/php/funciones.php';
  $obj = new Acciones_Usuario();

  $usuario_datos = $obj->ver_usuario($id_usuario); 
  foreach ($usuario_datos as $usuario_dato) {
    $cedula = $usuario_dato['ci'];
    $nombres = $usuario_dato['nombres'];
    $apellidos = $usuario_dato['apellidos'];
    $correo = $usuario_dato['correo'];
    $rol = $usuario_dato['descripcion'];
    $registrado = $usuario_dato['created_at'];
    $usuario = $usuario_dato['username'];
  }
?>
<div class="ui tiny modal ver_usuario_modal">
  <div class="header">
    Usuario: <?php echo $nombres." ".$apellidos;?>
  </div>
  <div class="image content">
    <div class="description">
      <h5>Cedula: <?php echo $cedula; ?></h5>
      <h5>Ocupación: <?php echo $rol; ?></h5>      
      <h5>Correo: <?php echo $correo; ?></h5>
      <h5>Usuario: <?php echo $usuario; ?></h5>
      <h5>fecha de registro: <?php echo $registrado; ?></h5>
    </div>
    <div class="ui small image">
      <img src="recursos/imagenes/avatar.png">
    </div>
  </div>
</div>