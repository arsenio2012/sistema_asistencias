<div class="ui secondary  menu">
   <div class="item">
    <a href="#">Sistema de asistencias</a>
    <a class="ui red label">
      <?php echo $version ?>
    </a>
  </div>
  <a class="active item">
    Inicio
  </a>
  <a class="item">
    Mision
  </a>
  <a class="item">
    Vision
  </a>
  <div class="right menu">
    <!--<div class="item">
      <div class="ui icon input">
        <input type="text" placeholder="Search...">
        <i class="search link icon"></i>
      </div>
    </div>-->
    <a class="ui item abrir_modal">
      Iniciar sesión
    </a>
    <?php require 'vistas/modals/modal_logeo.php'; ?>
  </div>
</div>