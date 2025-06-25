
//Boton Agregar Tecnico
const form = document.querySelector('.agregarTecnico');

document.getElementById('agregar').addEventListener('click', async (e) => {
  e.preventDefault();

  const tecnico = {
    nombres: document.getElementById('nombres').value.trim(),
    telefono: document.getElementById('telefono').value.trim(),
    usuario: document.getElementById('usuario').value.trim(),
    clave: document.getElementById('clave').value.trim(),
    rol: document.getElementById('rol').value.trim(),
    estado: document.getElementById('estado').value.trim(),
    fecha_creacion: document.getElementById('fecha_creacion').value.trim(),
  };

 try {
  const res = await fetch('http://localhost:3000/insert', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(tecnico),
  });

  if (!res.ok) throw new Error('Fallo en la creación');

  const data = await res.json();
  //console.log('Servidor respondió:', data);

 const contenedor = document.getElementById('alerta');
 contenedor.innerHTML = ''; // Limpia cualquier alerta anterior

 const mensaje = document.createElement('p');
 mensaje.textContent = data.message || 'Usuario insertado correctamente';
 mensaje.style.color = 'green';
 mensaje.style.fontWeight = 'bold'; 
 mensaje.style.margin = '10px 0';

contenedor.appendChild(mensaje);


    } catch (err) {
     //console.error('Error al insertar técnico:', err);
    alert('Hubo un problema al guardar el técnico');
    }

});


//Mostrar ordenes en TABLERO
async function cargarOrdenes() {
    const respuesta = await fetch('http://localhost:3000/ordenes'); // Obtener datos desde el backend
    const ordenes = await respuesta.json(); // Convertir respuesta a JSON
    const tabla = document.querySelector('#ordenesTabla tbody'); // Seleccionar tbody de la tabla
    tabla.innerHTML = ''; // Limpiar contenido anterior
    
    // Iterar sobre cada orden y crear la fila correspondiente
    ordenes.forEach(orden => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${orden.id}</td>
            <td>${orden.nombres}</td>
            <td>${orden.producto}</td>
            <td>${orden.sistema}</td>
            <td>${orden.falla}</td>
            <td>${orden.direccion}</td>
            <td>${orden.municipio}</td>
            <td>${orden.zona}</td>
            <td>${orden.estado}</td>
            <td>
                <button class="llamar">LLAMAR</button>
                <button class="asignar">ASIGNAR</button>
                <button class="rechazar">RECHAZAR</button>
            </td>
        `;
        tabla.appendChild(fila); // Agregar la fila al cuerpo de la tabla
    });
}

// Cargar órdenes al iniciar la página
document.addEventListener('DOMContentLoaded', () => {
  cargarOrdenes();
});

