// Control del Menú Deslizable
document.getElementById("abrir-menu").addEventListener("click", function() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("contenido-principal").style.marginLeft = "250px";
});

document.getElementById("cerrar-menu").addEventListener("click", function() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("contenido-principal").style.marginLeft = "0";
});

// Mostrar Sección Correspondiente
function mostrarSeccion(seccionId) {
    // Ocultar todas las secciones
    const secciones = document.getElementsByClassName('seccion');
    for (let i = 0; i < secciones.length; i++) {
        secciones[i].style.display = 'none';
    }
    
    // Mostrar la sección seleccionada
    document.getElementById(seccionId).style.display = 'block';
}

// Mostrar la sección inicial (Agenda Semanal)
mostrarSeccion('agenda-semanal');

// Agregar una nueva fila a la Agenda Semanal
document.getElementById("agregar-fila").addEventListener("click", function() {
    const tabla = document.getElementById("tabla-agenda").getElementsByTagName('tbody')[0];

    // Crear una nueva fila
    const nuevaFila = document.createElement("tr");

    // Crear las celdas de la nueva fila
    nuevaFila.innerHTML = `
        <td><input type="text" placeholder="Nombre"></td>
        <td>
            <select>
                <option>Desayuno</option>
                <option>Almuerzo</option>
                <option>Cena</option>
            </select>
        </td>
        <td><input type="text" placeholder="Actividad"></td>
        <td><input type="text" placeholder="Actividad"></td>
        <td><input type="text" placeholder="Actividad"></td>
        <td><input type="text" placeholder="Actividad"></td>
        <td><input type="text" placeholder="Actividad"></td>
        <td><input type="text" placeholder="Actividad"></td>
        <td><input type="text" placeholder="Actividad"></td>
    `;

    // Agregar la nueva fila a la tabla
    tabla.appendChild(nuevaFila);
});

// Agregar una nueva fila a la Agenda Personal
document.getElementById("agregar-fila-personal").addEventListener("click", function() {
    const tablaPersonal = document.getElementById("tabla-personal").getElementsByTagName('tbody')[0];

    // Crear una nueva fila
    const nuevaFilaPersonal = document.createElement("tr");

    // Crear las celdas de la nueva fila
    nuevaFilaPersonal.innerHTML = `
                        <td><input type="text" placeholder="Nombre"></td>
                        <td><input type="text" placeholder="Teléfono"></td>
                        <td><select name="estado" id="estado">
    <option value="activado">Activado</option>
    <option value="sin_activar">Sin activar</option>
</select>
                               <td><input type="text" placeholder="Fecha"></td>
</td>
                   <td><input type="text" placeholder="Nombre de referidor"></td>
                   <td><input type="text" placeholder="Relación con referidor"></td>
                   <td><input type="text" placeholder="Ciudad"></td>
                   <td><input type="text" placeholder="Información adicional"></td>
                   <td><input type="text" placeholder="Estado del contacto"></td>
                   <td><input type="text" placeholder="Fecha"></td>
                   <td><input type="text" placeholder="Novedades"></td>
                        <td><input type="text" placeholder="Fecha"></td>
    `;

    // Agregar la nueva fila a la tabla personal
    tablaPersonal.appendChild(nuevaFilaPersonal);
});

// Agregar una nueva Nota Personal
document.getElementById("agregar-nota").addEventListener("click", function() {
    const contenedorNotas = document.getElementById("contenedor-notas");

    // Crear una nueva nota
    const nuevaNota = document.createElement("div");
    nuevaNota.classList.add("nota");
    nuevaNota.innerHTML = `
        <textarea placeholder="Escribe tu nota aquí..."></textarea>
    `;

    // Agregar la nueva nota al contenedor
    contenedorNotas.appendChild(nuevaNota);
});