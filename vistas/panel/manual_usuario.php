<div class="twelve wide column">
  <h4 class="ui dividing header">Manual de usuario</h4>
  <p>
  	Este manual de usuario ha sido creado para proporcionar a los secretarios y administradores del sistema una guía detallada sobre las funciones básicas del mismo. En el siguiente documento, encontrará información detallada sobre cómo utilizar el sistema, lo que le permitirá maximizar su eficacia y eficiencia en el desempeño de sus tareas.
  	<br>
	Es importante destacar que, en caso de enfrentar algún problema o error persistente, es recomendable contactar al técnico o autor de la página para obtener una asistencia adecuada. Por favor, tenga en cuenta que algunas de las funciones avanzadas del sistema pueden requerir conocimientos especializados para su uso.
	<br>
	En este manual, encontrará una descripción completa de las funciones básicas del sistema, con ejemplos prácticos que ilustran su uso. Esperamos que este manual le sea de gran utilidad y le permita aprovechar al máximo el potencial del sistema.
	<br>
	Si tiene alguna pregunta o necesita asistencia adicional, por favor, no dude en ponerse en contacto con nuestro equipo de soporte técnico. ¡Disfrute del uso del sistema!</p>
  <img src="recursos/imagenes/manual_portada.png" class="ui image" alt="">
  <div class="ui buttons">
  	<a href="documentos/manual_usuario.pdf" class="ui primary button">Ver manual</a>
  	<div class="or"></div>
  	<a href="#" class="ui positive button descargarPDF">Descargar</a>
  </div>
</div>
<script>
  function descargarPDF() {
    var url = 'documentos/manual_usuario.pdf'; // URL del archivo PDF
    var nombreArchivo = 'manual_usuario.pdf'; // Nombre del archivo PDF

    var xhr = new XMLHttpRequest(); // Crear objeto XMLHttpRequest
    xhr.open('GET', url, true); // Establecer la solicitud GET para la URL del archivo PDF
    xhr.responseType = 'blob'; // Establecer el tipo de respuesta en 'blob'

    xhr.onload = function() {
      // Comprobar el estado de la solicitud
      if (xhr.status === 200) {
        // Crear un enlace para descargar el archivo PDF
        var enlace = document.createElement('a');
        enlace.href = window.URL.createObjectURL(xhr.response);
        enlace.download = nombreArchivo;
        enlace.style.display = 'none';

        // Añadir el enlace al DOM
        document.body.appendChild(enlace);

        // Hacer clic en el enlace para descargar el archivo PDF
        enlace.click();

        // Eliminar el enlace del DOM
        document.body.removeChild(enlace);
      }
    };

    // Enviar la solicitud
    xhr.send();
  }

  // Añadir un evento de clic al botón de descarga
  var botonDescargar = document.querySelector('.ui.positive.button.descargarPDF');
  botonDescargar.addEventListener('click', descargarPDF);
</script>