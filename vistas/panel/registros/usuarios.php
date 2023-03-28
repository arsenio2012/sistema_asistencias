<div class="twelve wide column">
  <h4 class="ui dividing header"><?php echo $titulo_tabla; ?></h4>
  <table class="ui compact celled definition table" id="tabla_users">
    <thead class="full-width">
      <tr>
        <th></th>
        <th>Nombres y apellidos</th>
        <th>Correo electrónico</th>
        <th>Registrado</th>
        <!--<th>Opciones</th>-->
      </tr>
    </thead>
    <tbody>
      <?php if (!empty($usuarios)): ?>
        <?php foreach ($usuarios as $usuario): ?>
          <tr>
            <td class="collapsing">
              <div class="ui fitted slider checkbox">
                <?php if ($id_user == $usuario['id_user']): ?>
                  <?php else: ?>
                    <input type="checkbox" class="checkbox_ci" data-CiUser="<?php echo $usuario['id_user']; ?>"><label></label>
                <?php endif ?>
              </div>
            </td>
            <td><?php echo $usuario['nombres'];?> <?php echo $usuario['apellidos'];?></td>
            <td><?php echo $usuario['correo'];?></td>
            <td><?php echo $usuario['created_at'];?></td>
            <!--<td>
              <div class="ui buttons">
                <a href="ver.php?id=<?php echo $usuario['id_user']; ?>" class="ui primary button">Ver</a>
                <div class="or"></div>
                <a href="editar.php?id=<?php echo $usuario['id_user']; ?>" class="ui positive button">Editar</a>
                <div class="or"></div>
                <a href="eliminar.php?id=<?php echo $usuario['id_user']; ?>" class="ui negative button">Eliminar</a>
              </div>
            </td>-->
          </tr>
        <?php endforeach ?>
      <?php else: ?>  
        <tr>
          <td></td>
          <td>No hay usuarios registrados</td>
          <td></td>
          <td></td>
        </tr>
      <?php endif ?>
    </tbody>
    <tfoot class="full-width">
      <tr>
        <th>
          <div class="ui fitted slider checkbox">
            <input type="checkbox" id="seleccionar_todo"><label></label>
          </div>
        </th>
        <th>
           <div class="ui buttons">
              <a href="#" class="ui primary button" id="ver_usuario">Ver</a>
              <div class="or"></div>
              <a href="#" class="ui positive button" id="editar_usuario">Editar</a>
              <?php if (!isset($boton_eliminar)): ?>
                <div class="or"></div>
                <a href="#" class="ui negative button" id="eliminar_usuario">Eliminar</a>
              <?php endif ?>
              
            </div>
        </th>
       <!--<th><input type="text" id="all-products"></th>-->
        <!--<th colspan="3">
          <div class="ui right floated small primary labeled icon button">
            <i class="user icon"></i> Agregar usuario
          </div>
        </th>-->
      </tr>
    </tfoot>
  </table>
</div>