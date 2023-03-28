<?php 
	$id_user = json_decode($_POST['id_user']);
	foreach ($id_user as $id) {
		$id_usuario = $id;
	}

  // Nuestra clase y funciones
  require '../../../recursos/php/funciones.php';
  $obj = new Acciones_Usuario();

  // Todos los datos del usuario guardados en la base de datos
  $usuario_asistencia = $obj->ver_asistencia($id_usuario); 
  foreach ($usuario_asistencia as $asistencia) {
    $cedula = $asistencia['ci'];
    $nombres = $asistencia['nombres'];
    $apellidos = $asistencia['apellidos'];
    $id_status = $asistencia['id_status'];
    $observacion = $asistencia['observacion'];
    $id_status = $asistencia['id_status'];
    $description = $asistencia['description'];
    $usuario = $asistencia['username'];
  }

  // Traemos los estados de asistencia
  $status_asistencia = $obj->status_asistencia();
?>
<div class="ui tiny modal editar_usuario_asistencia_modal">
  <div class="header">
    Usuario: <?php echo $usuario; ?>
  </div>
  <div class="image content">
    <div class="ui small image">
      <img src="recursos/imagenes/avatar.png">
    </div>
    <div class="description">
      <form action="#" class="ui form" id="formulario_editar_usuario_asistencia">
       <div class="field">
         <label for="nombres">Nombres y apellidos</label>
         <input type="text" disabled="" value="<?php echo $nombres." ".$apellidos;; ?>" name="nombres">
         <input type="hidden" value="<?php echo $id_usuario; ?>" name="id_user">
       </div>
        <div class="field">
         <label for="Cedula">Cédula</label>
         <input type="text" disabled="" value="<?php echo $cedula; ?>" name="cedula">
        </div>
       <div class="field">
         <label for="apellidos">Observacion o justificativo</label>
         <input type="text" placeholder="Ingrese justificativo" value="<?php echo $observacion ?>" name="observacion">
        </div>
        <div class="field">
         <label for="status">Status</label>
         <select name="status" id="status">
           <option value="<?php echo $id_status; ?>">Actual: <?php echo $description; ?></option>
           <?php foreach ($status_asistencia as $status): ?>
             <option value="<?php echo $status['id_status']; ?>"><?php echo $status['description']; ?></option>
           <?php endforeach ?>
         </select>
        </div>
        <div class="actions">
          <button class="ui positive right labeled icon button botonLogin">
            Enviar
            <i class="checkmark icon"></i>
          </button>
          <div class="ui red deny button">
            Salir
          </div>
        </div>
      </form>
    </div>
  </div>
</div>