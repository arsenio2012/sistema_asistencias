<div class="ui tiny modal">
  <div class="header">
    Iniciar sesión
  </div>
  <div class="image content">
    <div class="ui small image">
      <img src="recursos/imagenes/avatar.png">
    </div>
    <div class="description">
       <form action="#" class="ui form" id="formLogin">
         <div class="field">
           <label for="Username">Usuario</label>
           <input type="text" placeholder="Ingrese su nombre de usuario" name="username">
         </div>
         <div class="field">
           <label for="Password">Contraseña</label>
           <input type="password" placeholder="Ingrese su contraseña" name="password">
         </div>
         <div class="field">
          <?php 
            if(isset($error)){
              echo $error;
            } 
          ?>
         </div>
          <div class="actions">
            <button class="ui positive right labeled icon button botonFormlogeo">
              Login
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