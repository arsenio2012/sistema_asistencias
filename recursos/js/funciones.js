$(document).ready(function(){
	// Direccion del servidor
	let root = "http://192.168.1.9/github/sistema_asistencias/";

	// Funcion de notificaciones
	function notificacion(mensaje, tipo){
		let notificacion;
		let mensaje_notificacion = $("<p>").text(mensaje);
		let icon = $("<i>").addClass("close icon");

		if(tipo == "success"){
			notificacion = $("<div>").addClass("ui success message");
		}else if(tipo == "info"){
			notificacion = $("<div>").addClass("ui info message");
		}else if(tipo == "warning"){
			notificacion = $("<div>").addClass("ui warning message");
		}else if(tipo == "error"){
			notificacion = $("<div>").addClass("ui error message");
		}

		notificacion.append(mensaje_notificacion);
		notificacion.append(icon);

		return notificacion;
	}

	let notificar;

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
				switch(data){
					case 'firmado':
						notificar = notificacion("Bienvenido", "success");
						$("body").append(notificar);
						setTimeout(function(){
							//window.location.reload();
							form[0].reset();
							notificar.remove();
						}, 2000);
					break;

					case 'error_inesperado':
						notificar = notificacion("Ops, ha ocurrido un error inesperado. Por favor intente más tarde.", "error");
						$("body").append(notificar);
						setTimeout(function(){
							//window.location.reload();
							form[0].reset();
							notificar.remove();
						}, 3500);
					break;

					case 'ya_firmo':
						notificar = notificacion("Error: El usuario ya ha firmado la sistencia del día de hoy", "error");
						$("body").append(notificar);
						setTimeout(function(){
							//window.location.reload();
							form[0].reset();
							notificar.remove();
						}, 3500);
					break;

					case 'cedula_no_existe':
						notificar = notificacion("Error: La cédula ingresada no se encontró en la base de datos, verifica e intente nuevamente.", "error");
						$("body").append(notificar);
						setTimeout(function(){
							//window.location.reload();
							//form[0].reset();
							notificar.remove();
						}, 3500);
					break;

					case 'campo_vacio':
						notificar = notificacion("Error: No ha ingresado la cédula.", "error");
						$("body").append(notificar);
						setTimeout(function(){
							//window.location.reload();
							//form[0].reset();
							notificar.remove();
						}, 1200);
					break;
				}
			},
			error: function(){
				boton.removeClass("loading");
				//alert("Error: error de sistema");
				notificar = notificacion("Error: error de sistema", "error");
				$("body").append(notificar);
				setTimeout(function(){
					notificar.remove();
				},2000);
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
				switch(data){
					case 'user_registrado':
						form.addClass("success");
						notificar = notificacion("Se ha registrado el usuario correctamente", "success");
						setTimeout(function(){
							boton.removeClass("loading");
						}, 200);
						setTimeout(function(){
							form.append(notificar);
						}, 500);
						setTimeout(function(){
							form[0].reset();
							notificar.remove();
						}, 2000);
					break;

					case 'error_registro':
						form.addClass("error");
						notificar = notificacion("Ops, hubo un error al crear al usuario", "error");
						setTimeout(function(){
							boton.removeClass("loading");
						}, 200);
						setTimeout(function(){
							form.append(notificar);
						}, 500);
						setTimeout(function(){
							//window.location.reload();
							notificar.remove();
						}, 2000);
					break;

					case 'Falta_campo_nombres':
						form.addClass("error");
						notificar = notificacion("El campo de los nombres está vacio", "error");
						setTimeout(function(){
							boton.removeClass("loading");
						}, 200);
						setTimeout(function(){
							form.append(notificar);
						}, 500);
						setTimeout(function(){
							//window.location.reload();
							notificar.remove();
						}, 2000);
					break;

					case 'Falta_campo_apellidos':
						form.addClass("error");
						notificar = notificacion("El campo de los apellidos está vacío", "error");
						setTimeout(function(){
							boton.removeClass("loading");
						}, 200);
						setTimeout(function(){
							form.append(notificar);
						}, 500);
						setTimeout(function(){
							//window.location.reload();
							notificar.remove();
						}, 2000);
					break;

					case 'Falta_campo_email':
						form.addClass("error");
						notificar = notificacion("El campo del correo electrónico está vacío", "error");
						setTimeout(function(){
							boton.removeClass("loading");
						}, 200);
						setTimeout(function(){
							form.append(notificar);
						}, 500);
						setTimeout(function(){
							//window.location.reload();
							notificar.remove();
						}, 2000);
					break;

					case 'Falta_campo_cedula':
						form.addClass("error");
						notificar = notificacion("El campo de la cédula está vacío", "error");
						setTimeout(function(){
							boton.removeClass("loading");
						}, 200);
						setTimeout(function(){
							form.append(notificar);
						}, 500);
						setTimeout(function(){
							//window.location.reload();
							notificar.remove();
						}, 2000);
					break;

					case 'Falta_campo_telefono':
						form.addClass("error");
						notificar = notificacion("El campo del teléfono está vacío", "error");
						setTimeout(function(){
							boton.removeClass("loading");
						}, 200);
						setTimeout(function(){
							form.append(notificar);
						}, 500);
						setTimeout(function(){
							//window.location.reload();
							notificar.remove();
						}, 2000);
					break;

					case 'Falta_campo_rol':
						form.addClass("error");
						notificar = notificacion("No ha asignado un rol", "error");
						setTimeout(function(){
							boton.removeClass("loading");
						}, 200);
						setTimeout(function(){
							form.append(notificar);
						}, 500);
						setTimeout(function(){
							//window.location.reload();
							notificar.remove();
						}, 2000);
					break;

				case 'Falta_campo_inicio_ministerio':
						form.addClass("error");
						notificar = notificacion("No ha indicado la fecha de inicio en el ministerio del usuario", "error");
						setTimeout(function(){
							boton.removeClass("loading");
						}, 200);
						setTimeout(function(){
							form.append(notificar);
						}, 500);
						setTimeout(function(){
							//window.location.reload();
							notificar.remove();
						}, 2000);
					break;
				}
			},
			error: function(){
				form.addClass("error");
				notificar = notificacion("Error! Hubo un error del sistema, por favor intente más tarde o contacta a soporte", "error");
				setTimeout(function(){
					boton.removeClass("loading");
				}, 200);
				setTimeout(function(){
					form.append(notificar);
				}, 500);
				setTimeout(function(){
					//window.location.reload();
					//form[0].reset();
					notificar.remove();
				}, 4000);
				
			}
		});
	});

	// Para mostrar la notificacion de que la cedula será la contraseña inicial de los usuarios registrados 
	$('#cedulaFormularioRegistro').on("click", function(){
		notificar = notificacion("Información: La contraseña será la cédula del usuario.", "info")
		$(".datos").append(notificar);
		setTimeout(function(){
			notificar.remove();
		},3500);
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

	var table = $('#tabla_users').DataTable();

	$('#filtro_mes').on('change', function() {
	    // Obtener el valor del input de mes
	    var mes = $('#filtro_mes').val();

	    // Obtener el mes y el año seleccionados
	    var fecha = moment(mes + "-01").format('YYYY-MM');

	    // Buscar en la columna correspondiente de la tabla
	    table.column(4).search(fecha).draw();
	});

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
			//console.log("Más de un usuario seleccionado, no se pueden ver o editar");
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
			//console.log("Más de un usuario seleccionado, no se pueden ver o editar");
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

			      		//console.log("abriendo modal ya quiero dormir(" + modalName);

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
			      					notificar = notificacion("Se ha eliminado el/los usuario/s correctamente.", "success")
									$(".twelve.wide.column").append(notificar);
									setTimeout(function(){
										notificar.remove();
									},2500);
									setTimeout(function(){
										window.location.reload(); // Reinciamos la pagina
									},2800);
			      				},
			      				error: function(jqXHR, textStatus, errorThrown){
			      					//console.log("Ocurrió un error al eliminar el/los usuarios " + errorThrown);
			      					notificar = notificacion("Ocurrió un error del sistema al eliminar el/los usuarios", "error")
									$(".twelve.wide.column").append(notificar);
									setTimeout(function(){
										notificar.remove();
									},3500);
			      				}
			      			});
			      		});
			      	}
		      });
		    }
	  	});

	  	//console.log(seleccionados);
	  	if(!seleccionados_users){
	  		//console.log("No ha seleccionado usuarios");
	  		notificar = notificacion("No ha seleccionado usuarios", "info")
			$(".twelve.wide.column").append(notificar);
			setTimeout(function(){
				notificar.remove();
			},3500);
	  	} 
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
					notificar = notificacion("Se ha editado el usuario correctamente.", "success")
					$(".twelve.wide.column").append(notificar);
					setTimeout(function(){
						notificar.remove();
					},2500);
					setTimeout(function(){
						window.location.reload(); // Reinciamos la pagina
					},2800);
					//console.log("Se ha editado el usuario correctamente");
				}else{
					notificar = notificacion("Ha ocurrido un error al editar el usuario, intenta de nuevo", "error")
					$(".twelve.wide.column").append(notificar);
					setTimeout(function(){
						notificar.remove();
					},3500);
					alert("Ha ocurrido un error al editar el usuario, intenta de nuevo");
				}
			}
		});
	});

	// Para quitar las notificaciones 
	$('.message .close').on('click', function() {
	    $(this)
	      .closest('.message')
	      .transition('fade')
	    ;
	});

	// Funcion para imprimir asistencias
	$('.imprimir_asistencias').click(function(){
		// Crea una nueva ventana con solo la tabla que deseas imprimir
	 	var ventanaImpresion = window.open('', 'PRINT', 'height=800,width=1200');

		// Agrega la tabla a la nueva ventana
		ventanaImpresion.document.write('<html><head><title>Tabla de asistencias</title>');
		ventanaImpresion.document.write('<style>');
		ventanaImpresion.document.write('body { font-family: Arial, sans-serif; }');
		ventanaImpresion.document.write('table { border-collapse: collapse; width: 100%; }');
		ventanaImpresion.document.write('th, td { text-align: center; padding: 8px; border-bottom: 1px solid #ddd; }');
		ventanaImpresion.document.write('th { background-color: #f2f2f2; }');
		ventanaImpresion.document.write('input[type="checkbox"]{display:none;}.imprimir_asistencias{display:none;}.seleccion{display:none;}');
		ventanaImpresion.document.write('</style>');
		ventanaImpresion.document.write('</head><body>');
		ventanaImpresion.document.write(document.getElementById('tabla_users').outerHTML);
		ventanaImpresion.document.write('</body></html>');
		// Llama a la función de impresión de la ventana
		ventanaImpresion.print();

		// Cierra la ventana después de la impresión
	    ventanaImpresion.close();

		//window.print();
	});
});