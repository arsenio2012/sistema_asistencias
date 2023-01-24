// Una vez cargado el documento HTML ejecutamos nuestras funciones
$(document).ready(function(){
	// Definimos nuestra ruta de servidor
	let root = "http://192.168.1.8/github/sistema_asistencias/";

	/* Nuestras funciones de logeo */

	// Mostrar ventana donde se logeará
	$(".abrir_modal").on("click", function(){
		$('.ui.modal').modal('show');
	});

	// Login
	$("#formLogin").submit(function(e){
		e.preventDefault();
		
		let form = $(this),
			boton = $(".botonFormlogeo");

		$.ajax({
			type: "POST",
			url: root + "recursos/funciones/acciones_de_admin/login.php",
			data: form.serialize(),

			success: function(data){
				console.log(data);
				if(data == "true"){
					alert("logeando");
				}else if(data == "false"){
					alert("hay datos mal");
				}
			}
		});
	});

	// Asistencia
	$("#formAsistencia").submit(function(e){
		// Evitamos lo que hace el formulario por defecto
		e.preventDefault();

		// Algunas variables que necesitaremos
		let form = $(this),
			boton = $(".botonForm");

		$.ajax({
			type: "POST",
			url: root + "recursos/funciones/acciones_de_usuario/asistencia_del_dia.php",
			data: form.serialize(),

			beforeSend: function(){
				boton.addClass("loading");
			},
			success: function(data){
				console.log(data)
				boton.removeClass("loading");
				if(data > 0){
					$('.ui.small.modal').modal('show');
					setTimeout(function(){
						//$('.ui.small.modal').modal('onApprove');
						//window.location.reload();
						alert("Bienvenido");
					}, 600);
				}else {
					alert("No se ha podido firmar la asistencia");
				}
			},
			error: function(){
				boton.removeClass("loading");
				alert("Error: 500");
			}
		});
	});

	// Notificacion de bienvenida
	// code

	/* Funcion del administrador */
	// Registrar usuarios
	// CODE

	// Editar usuario
	// CODE 

	// eliminar usuario
	// CODE
});
