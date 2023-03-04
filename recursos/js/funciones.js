$(document).ready(function(){
	// Direccion del servidor
	let root = "http://192.168.1.8/github/sistema_asistencias/";

	// Funcion de login
	$("#formLogin").submit(function(e){
		e.preventDefault();
		let form = $(this),
			boton = $(".botonLogin");

		$.ajax({
			type: "POST",
			url: root + "recursos/php/admin_acciones/login.php",
			data: form.serialize(),

			beforeSend: function(){
				boton.addClass("loading");
			},

			success: function(data){
				console.log(data);
				boton.removeClass("loading");
				switch(data){
					case "true":
						window.location.href = root + "panel_administrador";
					break;
					
					case "false":
						form[0].reset(); // Limpiamos
						alert("Error: Datos incorrectos, verifica e intenta de nuevo.");
					break;		
				}
			},

			error: function(){
				alert("Ops, ha ocurrido un error de sistema");
			} 
		});
	});

	// Asistencia
	$("#formAsistencia").submit(function(e){
		// Evitamos lo que hace el formulario por defecto
		e.preventDefault();

		// Algunas variables que necesitaremos
		let form = $(this),
			boton = $(".botonAsistencia");

		$.ajax({
			type: "POST",
			url: root + "recursos/php/acciones_de_usuario/asistencia_del_dia.php",
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
						form[0].reset();
						alert("Bienvenido");
					}, 600);
				}else {
					alert("No se ha podido firmar la asistencia");
				}
			},
			error: function(){
				boton.removeClass("loading");
				alert("Error: error de sistema");
			}
		});
	});

	/*
		Modales
	*/

	// Mostrar ventana donde se logeará
	$(".abrir_modal").on("click", function(){
		console.log("Modal de login");
		$('.ui.modal.modal_login').modal('show');
	});

	// Ver mision en un modal
	$(".ver_mision").on("click", function(){
		console.log("Mostrar vision");
		$('.ui.modal.modal_mision').modal('show');
	});

	// Ver vision en un modal
	$(".ver_vision").on("click", function(){
		console.log("Mostrar vision");
		$('.ui.modal.modal_vision').modal('show');
	});

	/*
		Funcion de los administradores
	*/

	$("#registrar_usuario").submit(function(e){
		e.preventDefault();
		let form = $(this),
			boton = $(".botonRegistro");

		$.ajax({
			type: "POST",
			url: root + "recursos/php/admin_acciones/registrar_usuario.php" ,
			data: form.serialize(),

			beforeSend: function(){
				boton.addClass("loading");
			},
			success: function(data){
				console.log(data);
				boton.removeClass("loading");
				if (data > 0) {
					form.addClass("success");
					document.querySelector(".resultado").innerHTML = data;
					form[0].reset();
				}else{
					document.querySelector(".resultado").innerHTML = data;
					form.addClass("error");
				}	
			},
			error: function(){
				console.log("Error: 500");
				form[0].reset();
			}
		});
	});

	/*
		Notificaciones
	*/

	// Para mostrar la notificacion de que la cedula será la contraseña inicial de los usuarios registrados 
	$('#cedulaFormularioRegistro').on("click", function(){
		$("#registrar_usuario").addClass("warning");
		$.ajax({
			url: root + "vistas/notificaciones/warning/cedula_default.php",

			success: function(data){
				document.querySelector(".resultado").innerHTML = data;
			}
		});
	});

	// Para mostrar el campo de la ingresar username en caso de ser secretario o admin y tendran acceso al sistema
	/*$("#admin").on("click", function(){
			$.ajax({
			url: root + "vistas/notificaciones/info/campo_username.php",

			success: function(data){
				document.querySelector(".resultado").innerHTML = data;
			}
		});
	});*/

	/*
		Tablas con datatable
	*/
	$("#tabla_users").DataTable();

	// Para seleccionar todo con el checkbox
	$("#seleccionar_todo").on("change", function(){
	  	$(".checkbox_ci").prop("checked", this.checked);

	  	let seleccionados = [];
		let boton = $("#ver_usuario, #editar_usuario, #eliminar_usuario");

		$(".checkbox_ci").each(function(){
	    	if ($(this).prop("checked")){
		    	seleccionados.push($(this).attr("data-CiUser"));
		    }
	  	});

		if(seleccionados.length > 1){
	  		$("#ver_usuario, #editar_usuario, .or").hide();
			console.log("Mas de un usuario seleccionado, no se pueden ver o editar");
	  	}else{
	  		$("#ver_usuario, #editar_usuario, .or").show();
	  	}
	});

	// Ocultar botones mientras selecciono usuarios
	$(".checkbox_ci").on("change", function(){
		let seleccionados = [];
		let boton = $("#ver_usuario, #editar_usuario, #eliminar_usuario");

	  	$(".checkbox_ci").each(function(){
	    	if ($(this).prop("checked")){
		    	seleccionados.push($(this).attr("data-CiUser"));
		    	seleccionados_users = true;
		    }
	  	});

	  	if(seleccionados.length > 1){
	  		$("#ver_usuario, #editar_usuario, .or").hide();
			console.log("Mas de un usuario seleccionado, no se pueden ver o editar");
	  	}else{
	  		$("#ver_usuario, #editar_usuario, .or").show();
	  	}
	});

	// Cuando le de click a ver, editar o eliminar me llevará a su respectiva opcion
	$("#ver_usuario, #editar_usuario, #eliminar_usuario").on("click", function(){
		let seleccionados = [];
		let boton = $(this);
		let seleccionados_users = false;
		let botonId = boton.attr("id");

	  	$(".checkbox_ci").each(function(){
	    	if ($(this).prop("checked")){
		    	seleccionados.push($(this).attr("data-CiUser"));
		    	seleccionados_users = true;

		    	$.ajax({
		      		type: "POST",
			      	url: root + "vistas/panel/modales/" + botonId + ".php",
			      	data: {
			      		id_user: JSON.stringify(seleccionados)
			      	},
			      	beforeSend: function(){
			      		boton.addClass("loading");
			      	},
			      	success: function(data){
			      		boton.removeClass("loading");
			      		let modalName = botonId + "_modal"

			      		console.log("abriendo modal ya quiero dormir(" + modalName);

			      		// Eliminamos cualquier modal previo con la misma clase
					    $("." + modalName).remove();

					    // Agregamos el nuevo modal al DOM
					    $('body').append(data);

					    // Mostramos el modal
			      		$('.' + modalName).modal('show');

			      		$(".botonConfirmacion").on("click", function(){

			      			$.ajax({
			      				type: "POST",
			      				url: root + "recursos/php/admin_acciones/eliminar_usuarios.php",
			      				data: { 
			      					usuarios: seleccionados
			      				}, 

			      				success: function(data){
			      					window.location.reload(); // Reinciamos la pagina
			      				},
			      				error: function(jqXHR, textStatus, errorThrown){
			      					alert("currió un error al eliminar el/los usuarios " + errorThrown);
			      				}
			      			});
			      		});
			      	}
		      });
		    }
	  	});

	  	//console.log(seleccionados);
	  	if(!seleccionados_users) console.log("No ha seleccionado usuarios");
	});	

	// le decimos que escuche el submit del formulario editar usuario que fue agregado dinamicamente al dom
	$(document).on("submit", "#formulario_editar_usuario", function(e){
		e.preventDefault();

		let formRegistro = $(this);

		$.ajax({
			type: "POST",
			url: root + "recursos/php/admin_acciones/editar_usuario.php",
			data: formRegistro.serialize(),

			success: function(data){
				console.log(data);
				if(data > 0){
					window.location.reload(); // Reinciamos la pagina
					console.log("Se ha editado el usuario correctamente");
				}else{
					alert("Ha ocurrido un error al editar el usuario, intenta de nuevo");
				}
			}
		});
	});
});