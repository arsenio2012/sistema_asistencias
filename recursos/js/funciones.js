$(document).ready(function(){
	// Direccion del servidor
	let root = "http://localhost/sistema_asistencias/";

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

	// Inicializar la tabla DataTable
	$("#tabla_users, #tabla_asistencias").DataTable({
		language: {
		    url: root + 'recursos/js/Spanish.json'
		}
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
		let seleccionadosIndices = [];
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

	// Asistencia desde el panel
	$("#registrar_asistencia").submit(function(e){
		// Evitamos lo que hace el formulario por defecto
		e.preventDefault();

		// Algunas variables que necesitaremos
		let form = $(this),
			boton = $(".botonRegistro");

		$.ajax({
			type: "POST",
			url: root + "recursos/php/admin_acciones/registrar_asistencia.php",
			data: form.serialize(),

			beforeSend: function(){
				boton.addClass("loading");
			},
			success: function(data){
				console.log(data)
				boton.removeClass("loading");
				switch(data){
					case 'firmado':
						notificar = notificacion("Se ha procesado la asistencia correctamente", "success");
						$(".twelve.wide.column").append(notificar);
						setTimeout(function(){
							//window.location.reload();
							form[0].reset();
							notificar.remove();
						}, 2000);
					break;

					case 'error_inesperado':
						notificar = notificacion("Ops, ha ocurrido un error inesperado. Por favor intente más tarde.", "error");
						$(".twelve.wide.column").append(notificar);
						setTimeout(function(){
							//window.location.reload();
							form[0].reset();
							notificar.remove();
						}, 3500);
					break;

					case 'ya_firmo':
						notificar = notificacion("Error: El usuario ya ha firmado la sistencia del día de hoy", "error");
						$(".twelve.wide.column").append(notificar);
						setTimeout(function(){
							//window.location.reload();
							form[0].reset();
							notificar.remove();
						}, 3500);
					break;

					case 'cedula_no_existe':
						notificar = notificacion("Error: La cédula ingresada no se encontró en la base de datos, verifica e intente nuevamente.", "error");
						$(".twelve.wide.column").append(notificar);
						setTimeout(function(){
							//window.location.reload();
							//form[0].reset();
							notificar.remove();
						}, 3500);
					break;

					case 'campo_cedula_vacio':
						notificar = notificacion("Error: No ha ingresado la cédula.", "error");
						$(".twelve.wide.column").append(notificar);
						setTimeout(function(){
							//window.location.reload();
							//form[0].reset();
							notificar.remove();
						}, 1200);
					break;
					case 'campo_status_vacio':
						notificar = notificacion("Error: No ha ingresado el tipo de asistencia.", "error");
						$(".twelve.wide.column").append(notificar);
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
				$(".twelve.wide.column").append(notificar);
				setTimeout(function(){
					notificar.remove();
				},2000);
			}
		});
	});

	// Obtener la tabla asistencias
	var table = $('#tabla_asistencias').DataTable();

	// Graficos
	// Función para contar la cantidad de cada tipo de estado
	function contarEstados(data) {
	  	var tiposValores = ["Asistente", "Inasistente", "Justificativo"];
	  	var cantidades = [0, 0, 0];

	  	// Contar la cantidad de cada tipo de estado en los datos filtrados
	  	data.each(function (fila) {
		    var estado = fila[2];
		    if (estado === tiposValores[0]) {
		      	cantidades[0]++;
		    } else if (estado === tiposValores[1]) {
		      	cantidades[1]++;
		    } else if (estado === tiposValores[2]) {
		      	cantidades[2]++;
		    }
	  	});

	  	return cantidades;
	}


	// Función para graficar los tres tipos de estados
	function graficar(titulo_grafico, data) {
	  	// Obtener las cantidades de cada tipo de estado
	  	var cantidades = contarEstados(data);
	  	// Graficar las tres columnas

	  	Highcharts.chart("grafico", {
		    chart: {
		      	type: "column",
		      	animation: true, // Agrega una animación al cargar o actualizar los datos
		    },
		    title: {
		      	text: titulo_grafico,
		    },
		    xAxis: {
		      	categories: ["Asistencias", "Inasistencias", "Justificativos"],
		    },
		    yAxis: {
		      	min: 0,
		      	title: {
		        	text: "Cantidad",
		      	},
		    },
	    	series: [
		      	{
			        name: "Asistencias",
			        data: [cantidades[0], 0, 0],
			        color: "#7FFF7F",
		      	},
		      	{
			        name: "Inasistencias",
			        data: [0, cantidades[1], 0],
			        color: "#FF7F7F",
		      	},
		      	{
			        name: "Justificativos",
			        data: [0, 0, cantidades[2]],
			        color: "#FFFF7F",
		      	},
	    	],
	  	});
	}

	// Mostrar gráfico al cargar la página
	graficar("Total: Asistencia, inasistencias y justificativos", table.rows({ search: 'applied' }).data());

	// Agregar un listener al selector de mes
	$('#filtro_mes').on('change', function() {
		// Establecer el idioma en español
		moment.locale('es');

	  	// Obtener el valor del input de mes
	  	var mes = $('#filtro_mes').val();

	  	// Obtener el mes y el año seleccionados
	  	var fecha = moment(mes + "-01").format('YYYY-MM');

	  	// Buscar en la columna correspondiente de la tabla
	  	table.column(4).search(fecha).draw();

	  	// Obtener el nombre del mes en español
		var nombreMes = moment(mes + "-01").format('MMMM');
		
	  	// Mostrar grafico
	  	graficar(fecha + " (" + nombreMes + ")", table.rows({ search: 'applied' }).data());
	});

	// Para seleccionar todo con el checkbox en la tabla de asistencias
	$("#seleccionar_todo_asistencias").on("change", function(){
	  	$(".checkbox_ci").prop("checked", this.checked);

	  	let seleccionados = [];
		let boton = $("#editar_usuario_asistencia, #eliminar_usuario_asistencia");

		$(".checkbox_ci").each(function(){
	    	if ($(this).prop("checked")){
		    	seleccionados.push($(this).attr("data-CiUser"));
		    }
	  	});

		if(seleccionados.length > 1){
	  		$("#editar_usuario_asistencia, .or").hide();
			//console.log("Más de un usuario seleccionado, no se pueden ver o editar");
	  	}else{
	  		$("#editar_usuario_asistencia, .or").show();
	  	}
	});

	// Ocultar botones mientras selecciono usuarios en tabla asistencias
	$(".checkbox_ci").on("change", function(){
		let seleccionados = [];
		let boton = $("#editar_usuario_asistencia, #eliminar_usuario_asistencia");

	  	$(".checkbox_ci").each(function(){
	    	if ($(this).prop("checked")){
		    	seleccionados.push($(this).attr("data-CiUser"));
		    	seleccionados_users = true;
		    }
	  	});

	  	if(seleccionados.length > 1){
	  		$("#editar_usuario_asistencia, .or").hide();
			//console.log("Más de un usuario seleccionado, no se pueden ver o editar");
	  	}else{
	  		$("#editar_usuario_asistencia, .or").show();
	  	}
	});

	// Cuando le de click a ver, editar o eliminar me llevará a su respectiva opcion en la tabla asistencias
	$("#editar_usuario_asistencia, #eliminar_usuario_asistencia").on("click", function(){
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
			      				url: root + "recursos/php/admin_acciones/eliminar_usuarios_asistencia.php",
			      				data: { 
			      					usuarios: seleccionados
			      				}, 

			      				success: function(data){
			      					/*notificar = notificacion("Se ha eliminado el/los usuario/s correctamente.", "success")
									$(".twelve.wide.column.table").append(notificar);
									setTimeout(function(){
										notificar.remove();
									},2500);
									setTimeout(function(){
										window.location.reload(); // Reinciamos la pagina
									},2800);*/
									alert("Se ha eliminado la/s asistencia/s correctamente");
									window.location.reload(); // Reinciamos la pagina
			      				},
			      				error: function(jqXHR, textStatus, errorThrown){
			      					//console.log("Ocurrió un error al eliminar el/los usuarios " + errorThrown);
			      					/*notificar = notificacion("Ocurrió un error del sistema al eliminar el/los usuarios", "error")
									$(".twelve.wide.column").append(notificar);
									setTimeout(function(){
										notificar.remove();
									},3500);*/
									alert("Error de sistema, contacta al tecnico");
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

	// le decimos que escuche el submit del formulario editar usuario de asistencia que fue agregado dinamicamente al dom
	$(document).on("submit", "#formulario_editar_usuario_asistencia", function(e){
		e.preventDefault();

		let formRegistro = $(this);

		$.ajax({
			type: "POST",
			url: root + "recursos/php/admin_acciones/editar_usuario_asistencia.php",
			data: formRegistro.serialize(),

			success: function(data){
				console.log(data);
				if(data > 0){
					/*notificar = notificacion("Se ha editado el usuario correctamente.", "success")
					$(".twelve.wide.column").append(notificar);
					setTimeout(function(){
						notificar.remove();
					},2500);
					setTimeout(function(){
						window.location.reload(); // Reinciamos la pagina
					},2800);
					//console.log("Se ha editado el usuario correctamente");*/

					alert("Se ha editado la asistencia correctamente")
					window.location.reload(); // Reinciamos la pagina
				}else{
					/*notificar = notificacion("Ha ocurrido un error al editar el usuario, intenta de nuevo", "error")
					$(".twelve.wide.column").append(notificar);
					setTimeout(function(){
						notificar.remove();
					},3500);*/
					alert("Ha ocurrido un error al editar el usuario, intenta de nuevo");
				}
			}
		});
	});

	// Funcion para cambiar la contraseña
	$("#cambiar_pw").submit(function(e){
		e.preventDefault();
		let form = $(this),
			boton = $(".botonRegistro");

		$.ajax({
			type: "POST",
			url: root + "recursos/php/admin_acciones/cambiar_pw.php",
			data: form.serialize(),

			beforeSend: function(){
				boton.addClass("loading");
			},

			success: function(data){
				console.log(data);
				boton.removeClass("loading");
				switch(data){
					case "true":
						notificar = notificacion("Se ha editado la contraseña correctamente.", "success")
						$(".twelve.wide.column").append(notificar);
						setTimeout(function(){
							notificar.remove();
						},2500);
						setTimeout(function(){
							window.location.reload(); // Reinciamos la pagina
						},2800);
					break;
					
					case "cedula_vacio":
						notificar = notificacion("Ops, debe llenar el campo de la contraseña", "error")
						$(".twelve.wide.column").append(notificar);
						setTimeout(function(){
							notificar.remove();
						},2800);
					break;	

					case "cedula_confirmacion_vacio":
						notificar = notificacion("Ops, debe confirmar la contraseña", "error")
						$(".twelve.wide.column").append(notificar);
						setTimeout(function(){
							notificar.remove();
						},2800);
					break;	

					case "pw_incoinciden":
						notificar = notificacion("Ops, las contraseñas no coinciden", "error")
						$(".twelve.wide.column").append(notificar);
						setTimeout(function(){
							notificar.remove();
						},2800);
					break;	

				case "false":
						notificar = notificacion("Ops, error inesperado.. intente mas tarde", "error")
						$(".twelve.wide.column").append(notificar);
						setTimeout(function(){
							notificar.remove();
						},2800);
					break;	
				}
			},

			error: function(){
				notificar = notificacion("Error en el sistema..", "error")
				$(".twelve.wide.column").append(notificar);
				setTimeout(function(){
					notificar.remove();
				},2800);
			} 
		});
	});

});
