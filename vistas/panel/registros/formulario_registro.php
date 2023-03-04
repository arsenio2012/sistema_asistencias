<div class="twelve wide column">
	<form class="ui form" id="registrar_usuario">
	  <h4 class="ui dividing header">Formulario de registro de usuarios</h4>
	  <div class="field">
	    <label>Nombre</label>
	    <div class="two fields">
	      <div class="field">
	        <input type="text" name="nombres" placeholder="Nombres">
	      </div>
	      <div class="field">
	        <input type="text" name="apellidos" placeholder="Apellidos">
	      </div>
	    </div>
	  </div>
	  <div class="field">
	    <label>Dirección</label>
	    <div class="fields">
	      <div class="twelve wide field">
	        <input type="text" name="direccion" placeholder="direccion">
	      </div>
	      <div class="four wide field">
	        <input type="text" name="direccion2" placeholder="# casa">
	      </div>
	    </div>
	  </div>
	  <div class="field">
	    <label>Correo electronico</label>
	      <div class="wide field">
	        <input type="email" name="email" placeholder="E-mail">
	      </div>
	  </div>
	   <h4 class="ui dividing header">Datos</h4>
	  <div class="field">
	  	<div class="two fields">
	  		<div class="field"><input type="text" name="cedula" id="cedulaFormularioRegistro" placeholder="numero de cedula"></div>
	  		<div class="field"><input type="text" name="telefono" placeholder="numero de telefono"></div>
	  	</div>
	  </div>
	  <div class="resultado"></div>
	   <div class="ui segment">
	    <div class="field">
	        <div class="ui form">
			  <div class="grouped fields">
			    <label>Rol</label>
			    <div class="field">
			      <div class="ui slider checkbox">
			        <input type="radio" name="rol" id="admin" value="1">
			        <label>Administrador</label>
			      </div>
			    </div>
			    <div class="field">
			      <div class="ui slider checkbox">
			        <input type="radio" name="rol" value="2">
			        <label>Secretario</label>
			      </div>
			    </div>
			    <div class="field">
			      <div class="ui slider checkbox">
			        <input type="radio" name="rol" value="3">
			        <label>Docente</label>
			      </div>
			    </div>
			    <div class="field">
			      <div class="ui slider checkbox checked">
			        <input type="radio" name="rol" value="4">
			        <label>Suplente</label>
			      </div>
			    </div>
			  </div>
			</div>
	    </div>
	  </div>
  	  <button class="ui button botonRegistro" tabindex="0">Crear usuario</button>
	</form>
</div>