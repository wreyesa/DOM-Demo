const botonInicioPausa = document.getElementById('boton-inicio-pausa');
const botonReiniciar = document.getElementById('boton-reiniciar');
const cronometro = document.getElementById('cronometro');

let [horas, minutos, segundos] = [0, 0, 0];
let intervaloDeTiempo;
let estadoCronometro = 'pausado';

function actualizarCronometro() {
    segundos++;
    if (segundos/60==1) {
        segundos = 0;
        minutos++;
    
        if (minutos/60==1) {
            minutos = 0;
            horas++;
        }
    } 

    const segundosConFormato = asignarFormato(segundos);
    const minutosConFormato = asignarFormato(minutos);
    const horasConFormato = asignarFormato(horas);

    cronometro.innerText = `${horasConFormato}:${minutosConFormato}:${segundosConFormato}`
}

// Añade un 0 delante de los numeros menores a 10 para mantener el formato 00:00:00
function asignarFormato(unidadDeTiempo) {
    return unidadDeTiempo < 10 ? '0' + unidadDeTiempo : unidadDeTiempo;
}

botonInicioPausa.addEventListener('click', function() {
    if (estadoCronometro === 'pausado') {
        // setInterval es una funcion de JS q ejecuta una funcion repetidamente cada cierto tiempo
        intervaloDeTiempo = window.setInterval(actualizarCronometro, 1000);
        botonInicioPausa.innerHTML = '<i class="bi bi-pause-fill"></i>';
        botonInicioPausa.classList.remove('iniciar');
        botonInicioPausa.classList.add('pausar');
        estadoCronometro = 'andando';

    } else {
        // clearInterval detiene la ejecucion repetitiva iniciada con setInterval, recibe como parametro el ID q retorno setInterval
        window.clearInterval(intervaloDeTiempo);
        botonInicioPausa.innerHTML = '<i class="bi bi-play-fill"></i>';
        botonInicioPausa.classList.remove('pausar');
        botonInicioPausa.classList.add('iniciar');
        estadoCronometro = 'pausado';
    }
})

botonReiniciar.addEventListener('click', function() {
    window.clearInterval(intervaloDeTiempo);

    // Reinicia las variables a 0
    segundos = 0;
    minutos = 0;
    horas = 0;

    // Reiniciar
    cronometro.innerText = '00:00:00';

    // Actualizar botones
    botonInicioPausa.innerHTML = '<i class="bi bi-play-fill"></i>';
    botonInicioPausa.classList.remove('pausar');
    botonInicioPausa.classList.add('iniciar');

    estadoCronometro = 'pausado';
})