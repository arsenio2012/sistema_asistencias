<<<<<<< HEAD
<header class="ui secondary menu">
   <div class="item">
    <a href="#"><?php echo $titulo;?></a>
=======
<div class="ui secondary  menu">
   <div class="item">
    <a href="#">Sistema de asistencias</a>
>>>>>>> main
    <a class="ui red label">
      <?php echo $version ?>
    </a>
  </div>
  <a class="active item">
    Inicio
  </a>
<<<<<<< HEAD
  <a class="item ver_mision">
    Mision
  </a>
  <a class="item ver_vision">
=======
  <a class="item">
    Mision
  </a>
  <a class="item">
>>>>>>> main
    Vision
  </a>
  <div class="right menu">
    <!--<div class="item">
      <div class="ui icon input">
        <input type="text" placeholder="Search...">
        <i class="search link icon"></i>
      </div>
    </div>-->
<<<<<<< HEAD
    <?php if (!isset($_SESSION['usuario'])): ?>
      <a class="ui item abrir_modal">
        Iniciar sesión
      </a>
    <?php else: ?>
      <a href="panel_administrador" class="ui item">
        <?php echo $_SESSION['usuario']; ?>
      </a>
      <a href="logout" class="ui item ">
        Salir
      </a>
    <?php endif ?>
    <?php require 'vistas/modals/modal_login.php'; ?>
  </div>
</header>
=======
    <a class="ui item abrir_modal">
      Iniciar sesión
    </a>
    <?php require 'vistas/modals/modal_logeo.php'; ?>
  </div>
</div>
>>>>>>> main
