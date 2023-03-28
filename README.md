# sistema_asistencias
Sistema de asistencia de docentes para un proyecto en la fria

## Version 1.0
- Empezamos la version 1.0 de sistema_asistencias
- Se realizó las funciones de asistencias
- Formulario de asistencia funcionando
- Falta mejorar el mensaje de bienvenido (pienso en un modal)
- Se agregó un modal de inicio de sesión falta hacerlo funcional
- Creacion de la base de datos:
	* Usuario
	* Roles
	* Asistencia
- Funcion de de iniciar sesión
- Modal con formulario de inicio sesión
- Corregir bug al momento de iniciar sesión (No funciona)
- Primer push

## Version 1.1
- Bug de inicio de sesion corregido, se inicia sesión sin problemas.
- Panel de administrador
- Tablas de usuarios
- Tabla de asistencias
- Implementacio de datatable para hacer de las tablas atractivas
- Correcion del bug que dejó el merge..

## Version 1.2
- Correcion del sistema de notificaciones
- Nuevo input que pregunte la fecha de inicio del docente para calcularle el tiempo que lleva en la misma
- Mostrar esa informacion al momento de ver los usuarios

## Version 1.3
- Correción de ortografia, acentos y todo lo demas..
- Se agregó ficon o icono en el head
- Se agrego que en vez de decir dias en general de la fecha que tiene los usuarios en el ministerio, ahora díra con un formato de año/meses y días ejemplo: Tiene 2 años 3 meses y 2 días en el ministerio de educación..
- Se limitó la asistencia para cada usuario, ese decir: Un usuario puede firmar solo una asistencia en el día.
- Se ha borrado campos de algunas tablas de la base de datos que no se estaban usando..
- Se agregó mas notificaciones.

## Version 1.4 
- Implementacion de un grafico que marque al asistente, inasistente y justificado
- Base de datos modificada
- Se agregó colores en la tabla verde para asistente, rojo para inasistente y amarillo para el justificado
- Se agregó una funciones a la tabla de asistencias parecidas a la de tabla de usuarios, donde se podrá editar el status del usuario + darle una observacion, seguido de poder eliminar usuarios)
- Se agregó formulario para que el secretario pueda registrar una asistencia, inasistencia o justificativo directamente..
- Que en el nabar diga el rol 
- Corregir que si un nombre largo se salga del nabar (se me ocurre acortar la palabra larga) 
	- Corregido con poner nombres y apellidos
- Agregar manual de usuario basico que medio explique la funcionalidad de los botones *
- Corregido ahora los demas roles no pueden acceder al panel solo secretario o admin
- Se agregó un footer reflejando los derechos de autores 2023
- Se agregó que el usuario no se pueda eliminar a si mismo y si se va a editar deberá hacerlo desde su congiruacion de usuario
- El secreatario no puede eliminar admins
- Se agregó la opcion de editar mi perfil (No me había dado cuenta que no estaba)

## Version 1.5
- Se agregó footer
- Se ha arreglado los graficos, anteriormente no funcionaba porque requeria internet
- Se corrigio el idioma de datatable.js y moment.js ahora muestra en español