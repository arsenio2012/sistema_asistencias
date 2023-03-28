<div class="twelve wide column">
	<form class="ui form" id="registrar_asistencia">
	  <h4 class="ui dividing header">Registro de asistencias e inasistencias</h4>
	  <div class="field">
	    <label>Cédula</label>
	    <div class="field">
	        <input type="text" name="cedula" placeholder="Cédula">
	    </div>
	  </div>
	  <div class="field">
	    <label>Observación</label>
	    <div class="field">
	        <input type="text" name="observacion" placeholder="Observación">
	    </div>
	  </div>
	   <div class="ui segment">
	    <div class="field">
	        <div class="ui form">
			  <div class="grouped fields">
			    <label>Tipo de asistencia</label>
			    <div class="field">
			      <div class="ui slider checkbox">
			        <input type="radio" name="asistencia" id="admin" value="1">
			        <label>Asistente</label>
			      </div>
			    </div>
			    <div class="field">
			      <div class="ui slider checkbox">
			        <input type="radio" name="asistencia" value="2">
			        <label>Inasistente</label>
			      </div>
			    </div>
			    <div class="field">
			      <div class="ui slider checkbox">
			        <input type="radio" name="asistencia" value="3">
			        <label>Asistencia justificada</label>
			      </div>
			    </div>
			  </div>
			</div>
	    </div>
	  </div>
  	  <button class="ui button botonRegistro" tabindex="0">Enviar</button>
	</form>
</div>