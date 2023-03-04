<div class="ui vertical menu three wide column">
  <div class="item ">
    <div class="ui header block aligned center">
       <img src="recursos/imagenes/avatar.png" class="ui small circular image" alt="avatar">
        <h5 class="ui header"><?php echo $_SESSION['usuario']; ?>
          <div class="sub header">Administrador</div>
        </h5>
    </div>
  </div>;
  <div class="item">
    <div class="header">Opciones de usuario</div>
    <div class="menu">
      <a href="administradores" class="item <?php $obj->seccion_activa('administradores'); ?>">Administradores</a>
      <a href="secretarios" class="item <?php $obj->seccion_activa('secretarios'); ?>">Secretarios</a>
      <a href="docentes" class="item <?php $obj->seccion_activa('docentes'); ?>">Docentes</a>
      <a href="suplentes" class="item <?php $obj->seccion_activa('suplentes'); ?>">Suplentes</a>
      <a href="registrar_usuarios" class="item <?php $obj->seccion_activa('registrar_usuarios'); ?>">Registrar usuarios</a>
    </div>
  </div>
  <div class="item">
    <div class="header">Asistencias</div>
    <div class="menu">
      <a href="asistencias" class="item <?php $obj->seccion_activa('asistencias'); ?>">Ver asistencias</a>
    </div>
  </div>
  <div class="item">
    <div class="header">Soporte</div>
    <div class="menu">
      <a href="#" class="item">Manual de usuario</a>
    </div>
  </div>
  <div class="item">
    <div class="header">Opciones</div>
    <div class="menu">
      <a href="logout" class="item">Salir</a>
    </div>
  </div>
</div>
<div class="divider"></div>