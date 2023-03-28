<div class="twelve wide column">
  <form class="ui form" id="cambiar_pw">
    <h4 class="ui dividing header">Cambiar contraseña:</h4>
    <div class="field">
      <label>Nueva contraseña</label>
      <div class="field">
          <input type="password" name="new_pw" placeholder="Ingrese la nueva contraseña">
          <input type="hidden" name="id_user" value="<?php echo $id_user; ?>">
      </div>
    </div>
    <div class="field">
      <label>Confirme la Nueva contraseña</label>
      <div class="field">
          <input type="password" name="confirmacion" placeholder="Ingrese nuevamente la nueva contraseña">
      </div>
    </div>
      <button class="ui button botonRegistro" tabindex="0">Cambiar</button>
  </form>
</div>