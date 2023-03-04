<?php
  // Requerimos nuestras clases y funciones
  require '../../../recursos/php/funciones.php';
  $obj = new Acciones_Usuario();

	$id_user = json_decode($_POST['id_user']);
  $usuarios_seleccionados = count($id_user);

    // Generamos un array con los IDs de los usuarios seleccionados
  $id_usuarios = array_map(function($id) {
      return intval($id);
  }, $id_user);

  $datos_del_usuario = $obj->ver_usuario($id_usuarios);
?>
<div class="ui tiny modal eliminar_usuario_modal">
  <div class="header">
    <?php if ($usuarios_seleccionados > 1): ?>
      ¿Desea eliminar los siguientes usuarios?
    <?php else: ?>
      ¿Desea eliminar el siguiente usuario?
    <?php endif ?>
  </div>
  <div class="image content">
    <div class="ui small image">
      <img src="recursos/imagenes/avatar.png">
    </div>
    <div class="description">
      <?php foreach ($datos_del_usuario as $dato_usuario): ?>
        <h5><?php echo $dato_usuario['nombres']." ".$dato_usuario['apellidos']; ?></h5>
      <?php endforeach ?>
      <div class="actions">
        <button class="ui positive right labeled icon button botonConfirmacion">
          Sí
          <i class="checkmark icon"></i>
        </button>
        <div class="ui red deny button">
          No
        </div>
      </div>
    </div>
  </div>
</div>