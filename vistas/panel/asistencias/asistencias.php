<div class="twelve wide column">
  <h4 class="ui dividing header">Asistencias</h4>
  <table class="ui compact celled definition table" id="tabla_users">
    <thead class="full-width">
      <tr>
        <th>Seleccionar</th>
        <th>Nombres y apellidos</th>
        <th>Cedula</th>
        <th>Rango</th>
        <th>Fecha</th>
        <!--<th>Hora</th>-->
      </tr>
    </thead>
    <tbody>
       <?php if (!empty($asistencias)): ?>
        <?php foreach ($asistencias as $asistencia): ?>
          <tr>
            <td class="collapsing">
              <div class="ui fitted slider checkbox">
                <input type="checkbox" name="id" id="id"><label></label>
              </div>
            </td>
            <td><?php echo $asistencia['nombres']." ".$asistencia['apellidos'];?></td>
            <td><?php echo $asistencia['ci'];?></td>
            <td><?php echo $asistencia['descripcion'];?></td>
            <td><?php echo $asistencia['date'];?></td>
          </tr>
        <?php endforeach ?>
      <?php else: ?>  
        <tr>
          <td></td>
          <td>No hay asistencias</td>
        </tr>
      <?php endif ?>
    </tbody>
    <tfoot class="full-width">
      <tr>
        <th></th>
        <th colspan="4">
          <div class="ui right floated small secondary labeled icon button">
            <i class="print icon"></i> Imprimir
          </div>
        </th>
      </tr>
    </tfoot>
  </table>
</div>