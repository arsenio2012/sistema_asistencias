<?php
  // Requerimos nuestras clases y funciones
  require '../funciones.php';
  $obj = new Acciones_Usuario();

  $id_usuarios = $_POST['usuarios'];

  //echo "<pre>",print_r($id_usuarios),"</pre>";

  foreach ($id_usuarios as $id_usuario) {
    $usuario_eliminado = $obj->eliminar_dato("asistencias", $id_usuario, "id_asistencia");
  }
?>