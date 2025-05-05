const input = document.getElementById('ingresar-tarea');
const boton = document.querySelector('button');
const listaDeTarea = document.getElementById('lista-de-tareas');

function agregarTarea() {
  // Si el usuario ha escrito algo
  if (input.value) {
    // Crear tarea
    let tareaNueva = document.createElement('div');
    tareaNueva.classList.add('tarea');

    // Texto ingresado por el usuario
    let texto = document.createElement('p');
    texto.innerText = input.value;

    tareaNueva.appendChild(texto);

    // Crear y agregar contenedor de iconos
    let iconos = document.createElement('div');
    iconos.classList.add('iconos')

    // Agregando elementos hijo al elemento tareaNueva
    tareaNueva.appendChild(texto);
    tareaNueva.appendChild(iconos);

    // Iconos
    let completar = document.createElement('i');
    completar.classList.add('bi', 'bi-check-circle-fill', 'icono-completar');
    completar.addEventListener('click',completarTarea);

    let eliminar = document.createElement('i');
    eliminar.classList.add('bi', 'bi-trash3-fill', 'icono-eliminar');
    eliminar.addEventListener('click', eliminarTarea);

    // Agregar los elementos completar y eliminar al elemento iconos
    iconos.append(completar, eliminar);

    // Agregar tarea a la lista
    listaDeTarea.appendChild(tareaNueva);

  } else {
    alert('Por favor ingresa una tarea.');
  }
}

function completarTarea(e) {
  let tarea = e.target.parentNode.parentNode;

  // togle permite si el elemento tarea ya tiene la clase completada se va a elimianr, sino la tiene se va agregar
  tarea.classList.toggle('completada');
}

function eliminarTarea(e) {
  let tarea = e.target.parentNode.parentNode;
  tarea.remove()
}

boton.addEventListener('click', agregarTarea);

input.addEventListener('keydown', (e) => {
  // console.log(e.key)
  if (e.key == 'Enter') {
    agregarTarea();
  }
});