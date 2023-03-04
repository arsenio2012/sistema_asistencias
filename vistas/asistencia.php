<form action="#" id="formAsistencia">
	<div class="ui placeholder segment">
	 <div class="ui form">
	 	<div class="field">
	    	<h2><?php echo strftime("%A, %d de %B del %Y %I:%M:%S %p");; ?></h2>
	  	</div>
	  <div class="field">
	    <label>Asistencia</label>
	    <input type="text" name="cedula" placeholder="Ingresar N° ID">
	  </div>
	</div>
	<div class="ui horizontal divider"></div>
		<div class="inline">
	    	<button class="ui primary button botonAsistencia">Asistencia</button>
	    	<button type="reset" class="ui button">Restablecer</button>
		</div>
	</div>
</form>
