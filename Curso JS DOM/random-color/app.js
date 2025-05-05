const btn = document.querySelector('button');
const text_color = document.getElementById('color');
const body = document.getElementsByTagName('body')

// color hex contiene numeros entre 0-9 y letras entre a y f

function generarColorioAleatorio() {
  let digitos = '0123456789ABCDEF';
  let colorHex = '#';

  for (let i=0; i<6; i++) {
    let indiceAleatorio = Math.floor(Math.random() * 16)
    colorHex += digitos[indiceAleatorio]
  };

  return colorHex;
}

btn.addEventListener('click', function() {
  let colorRandom = generarColorioAleatorio()
  text_color.innerText = colorRandom
  body[0].style.backgroundColor = colorRandom
  btn.style.backgroundColor = colorRandom
  btn.style.borderColor = colorRandom
})
