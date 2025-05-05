// Hay 5 formas de seleccionar elementos
const contenedor = document.getElementById("contenedor")    // obtener un elemento por su id
const pizzaToppings = document.getElementsByClassName("topping");   // seleccionar todos los elementos q tengan una clase particular. retorna un objeto de tipo HTMLCollection
const misToppings = document.getElementsByTagName("li");    // seleccionar todos los elementos de un tipo en particular. tambien retorna una HTMLCollection
const primerToppinNoMarron = document.querySelector('ul li:not(.fondo-marron)');  // seleccionar el primer elemento q coincida con el selector especifico. con esto se puede escribir selectores mas complejos
const toppingNaranja = document.querySelectorAll('.topping.fondo-naranja'); // seleccionar todos los elementos q coinciden con un selector especifico
const aceitunas = document.querySelector('#aceitunas'); // seleccionar un selector CSS

// Manipulando el DOM

const listaDeToppings = document.getElementById('lista-toppings');

// elemento target
// trigger
// event handler: funcion q se ejecuta cuando ocurre un evento. funcion q va a manejar el evento cuando ocurra
// event listener es una conexion q se crea explicitamente para asociar un evento con una funcion especifica q va manejar ese evento en ese elemento

const albahaca = document.getElementById('albahaca')


// e devuelve un objeto, este e q hace referencia al evento tiene propiedades y metodos. por ejemplo, se puede utilizar la
// propiedad target de e.
albahaca.addEventListener('click', (e) => {
    console.log(e.target)
});
