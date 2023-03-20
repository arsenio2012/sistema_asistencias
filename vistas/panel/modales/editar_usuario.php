<?php 
	$id_user = json_decode($_POST['id_user']);
	foreach ($id_user as $id) {
		$id_usuario = $id;
	}

  // Nuestra clase y funciones
  require '../../../recursos/php/funciones.php';
  $obj = new Acciones_Usuario();

  // Todos los datos del usuario guardados en la base de datos
  $usuario_datos = $obj->ver_usuario($id_usuario); 
  foreach ($usuario_datos as $usuario_dato) {
    $cedula = $usuario_dato['ci'];
    $nombres = $usuario_dato['nombres'];
    $apellidos = $usuario_dato['apellidos'];
    $correo = $usuario_dato['correo'];
    $rol_user = $usuario_dato['descripcion'];
    $id_rol = $usuario_dato['id_rol'];
    $registrado = $usuario_dato['created_at'];
    $usuario = $usuario_dato['username'];
  }

  // Traemos los roles
  $roles = $obj->roles();
?>
<div class="ui tiny modal editar_usuario_modal">
  <div class="header">
    Usuario: <?php echo $usuario; ?>
  </div>
  <div class="image content">
    <div class="ui small image">
      <img src="recursos/imagenes/avatar.png">
    </div>
    <div class="description">
      <form action="#" class="ui form" id="formulario_editar_usuario">
       <div class="field">
         <label for="nombres">Nombres</label>
         <input type="text" placeholder="Ingrese su nombre" value="<?php echo $nombres; ?>" name="nombres">
         <input type="hidden" value="<?php echo $id_usuario; ?>" name="id_user">
       </div>
       <div class="field">
         <label for="apellidos">Apellidos</label>
         <input type="text" placeholder="Ingrese su apellido" value="<?php echo $apellidos; ?>" name="apellidos">
        </div>
        <div class="field">
         <label for="Cedula">Cédula</label>
         <input type="text" placeholder="Ingrese su apellido" value="<?php echo $cedula; ?>" name="cedula">
        </div>
        <div class="field">
         <label for="apellidos">Usuario</label>
         <input type="text" placeholder="Ingrese su usuario" value="<?php echo $usuario; ?>" name="usuario">
        </div>
         <div class="field">
         <label for="apellidos">Correo</label>
         <input type="email" placeholder="Ingrese su correo" value="<?php echo $correo; ?>" name="correo">
        </div>
        <div class="field">
         <label for="apellidos">Rol</label>
         <select name="rol" id="rol">
           <option value="<?php echo $id_rol; ?>">Actual: <?php echo $rol_user; ?></option>
           <?php foreach ($roles as $rol): ?>
             <option value="<?php echo $rol['id_rol']; ?>"><?php echo $rol['descripcion']; ?></option>
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