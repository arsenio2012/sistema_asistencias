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

	// Funcion paras seleccionar todo LO COMENTO PORQUE EL DE ABAJO HACE LO MISMO Y MAS RESUMIDO WOWW
	/*selected = true;
	$("#seleccionar_todo").on("click", function(){
		if(selected){
			$('#tabla_users input[type=checkbox]').prop("checked", true);
			$('#seleccionar_todo').val('Deseleccionar');

		}else{
			$('#tabla_users input[type=checkbox]').prop("checked", false);
			$('#seleccionar_todo').val('Seleccionar');
		}
		selected = !selected;
		console.log("Seleccionando los checkboxs");
	});*/

	// Acciones 
	// Editar LO comento porque este me dice  que seleccioné y lo inserta en un input, el de abajo me agarra la id que es casi parecido a este pero hasta mas resumido
	/*$(".checkbox_ci").on("click", function(){
		let self = $(this), 
			id_user = self.attr("data-CiUser"),
			all = document.querySelector(".resultado");

		//comprobamos que si no está checkeado, lo introduzca al input	
		if($(this).prop("checked")==true){
			//si está vacío no pondremos coma
	        if($("#all-products").val()==""){
	        	//le añadimos el value al input deseado, y este será el contenido del atributo "data-CiUser"
	            $("#all-products").attr("value",$(this).attr("data-CiUser"));
	        }else{
	        	//si no es el primero, añadimos una coma
	            $("#all-products").attr("value",$("#all-products").val()+", "+$(this).attr("data-CiUser"));
	        }	
		}	
	});*/

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

			      		console.log("abriendo modal ya quiero dormir:adad(" + modalName);

			      		/*
						Con esto evitar que habran varios modales si por ejemplo abrimos editar y luego ver
						evitar que se vea el de editar atras del de ver

						pero con eso pasa que solo vemos los datos del primer usuario seleccionado 
						y si seleccionamos otros usuarios seguimos viendo los datos del primer usuario seleccionado
			      		if(!$("." + modalName).length){
			      			$("." + modalName).remove();
			      			$('body').append(data);
			      		}*/

			      		// Eliminamos cualquier modal previo con la misma clase
					    $("." + modalName).remove();

					    // Agregamos el nuevo modal al DOM
					    $('body').append(data);

					    // Mostramos el modal
			      		$('.' + modalName).modal('show');

			      		if(botonId == "editar_usuario"){
			      			// Editar usuario 
							/* ya no será necesario tenerlo equi en el success para que escuche el submit
							$("#formulario_editar_usuario").submit(function(e){
								e.preventDefault();
							});*/
			      		}
			      	}
		      });
		    }
	  	});

	  	//console.log(seleccionados);
	  	if(!seleccionados_users) console.log("No ha seleccionado usuarios");
	});	

	// Lo mismo de arriba pero sin JQuery
	/*document.querySelector("#ver_usuario, #editar_usuario, #eliminar_usuario").addEventListener("click", function(){
		let seleccionados = [];
		let boton = this;
		let checkboxes = document.querySelectorAll(".checkbox_ci");
		for (let i = 0; i < checkboxes.length; i++) {
		    if (checkboxes[i].checked) {
		      seleccionados.push(checkboxes[i].getAttribute("data-CiUser"));
		      var xhr = new XMLHttpRequest();
		      xhr.open("POST", root + "vistas/panel/modales/ver_usuarios.php", true);
		      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		      xhr.addEventListener("readystatechange", function () {
		        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
		          console.log(this.responseText);
		        }
		      });
		      xhr.send("id_user=" + JSON.stringify(seleccionados));
		    }
	  	}	
	  	boton.classList.add("loading");
	  	console.log(seleccionados);
	});*/

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