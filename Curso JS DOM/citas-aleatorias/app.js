import { citas } from './citas.js';

const cantidadCitas = citas.length - 1
const cita = document.getElementById('cita');
const autor = document.getElementById('autor');
const btn = document.getElementById('boton-cambiar-cita');

function generaAleatorio(min, max){
  return Math.floor(Math.random()*(max - min + 1) + min);
};

function cambiarCita() {
  let indiceAleatorio = generaAleatorio(0, cantidadCitas)
  cita.innerText = citas[indiceAleatorio].texto
  autor.innerText = citas[indiceAleatorio].autor
};

cambiarCita();

btn.addEventListener('click', cambiarCita);