<div class="twelve wide column">
  <h4 class="ui dividing header">Asistencias</h4>
  <?php if (!empty($asistencias)): ?>
  <div class="ui input">
    <input type="month" id="filtro_mes">
  </div>
  <table class="ui compact celled definition table" id="tabla_asistencias">
    <thead class="full-width">
      <tr>
        <th class="seleccion">Seleccionar</th>
        <th>Nombres y apellidos</th>
        <th>Estado</th>
        <th>Rango</th>
        <th>Fecha</th>
        <!--<th>Hora</th>-->
      </tr>
    </thead>
    <tbody>
        <?php foreach ($asistencias as $asistencia): ?>
          <tr class="<?php echo $obj->status($asistencia['id_status']); ?>" title="<?php echo $asistencia['description']; ?>: <?php echo $asistencia['observacion']; ?>">
            <td class="collapsing seleccion">
              <div class="ui fitted slider checkbox">
                <input type="checkbox" name="id" id="id" class="checkbox_ci" data-CiUser="<?php echo $asistencia['id_asistencia']; ?>"><label></label>
              </div>
            </td>
            <td><?php echo $asistencia['nombres']." ".$asistencia['apellidos'];?></td>
            <td><?php echo $asistencia['description'];?></td>
            <td><?php echo $asistencia['descripcion'];?></td>
            <td><?php echo $asistencia['date'];?></td>
          </tr>
        <?php endforeach ?>
    </tbody>
    <tfoot class="full-width">
      <tr>
        <th>
          <div class="ui fitted slider checkbox">
            <input type="checkbox" id="seleccionar_todo_asistencias"><label></label>
          </div>
        </th>
        <th>
           <div class="ui buttons">
              <a href="#" class="ui positive button" id="editar_usuario_asistencia">Editar estado</a>
              <div class="or"></div>
              <a href="#" class="ui negative button" id="eliminar_usuario_asistencia">Eliminar</a>
            </div>
        </th>
        <th colspan="3">
          <div class="ui right floated small secondary labeled icon button imprimir_asistencias">
            <i class="print icon"></i> Imprimir
          </div>
        </th>
      </tr>
    </tfoot>
  </table>
   <h5>Grafico</h5>
   <div id="grafico"></div>
   <!-- No sirve sin internet.. Me toca descartarlo lastima:/
         <script type="text/javascript">
          google.charts.load('current', {'packages':['corechart']});
          google.charts.setOnLoadCallback(drawChart);

          function drawChart() {
            var data = google.visualization.arrayToDataTable(<?php echo json_encode($data); ?>);
            var options = {
              title: 'Asistencias, inasistencias y justificaciones',
              legend: { position: 'bottom' },
              colors: ['#00FF00', '#FF0000', '#FFFF00'], // verde para asistente, rojo para inasistente, amarillo para justificado
              bar: {groupWidth: '75%'}
            };

            var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));

            chart.draw(data, options);
          }
        </script>
        <div id="chart_div" style="width: 400px%; height: 500px;"></div>
  -->

  <?php else: ?>  
   <div class="ui info message">
    <div class="header">Informacion:</div>
    <ul class="list">
      <li>No hay asistencias</li>
      <a href="home">ir a firmar asistencia</a>
    </ul>
  </div>    
  <?php endif ?>
</div>