// Seleccion de elementos
const redColor = document.querySelector(".red");
const blueColor = document.querySelector(".blue");
const blackColor = document.querySelector(".black");

const cartButton = document.getElementById("button");
const feedBackButton = document.querySelector(".feedback");
const itemTag = document.getElementsByTagName("h3")[0];
const imageCard = document.querySelector(".product-image");

console.log(blackColor)

// Manipulando los colores para cambiar etiqueta e imagen, se agrega detectores de eventos (addEventListeners)

redColor.addEventListener('click', function(){
    cartButton.style.backgroundColor = "red";
    itemTag.style.backgroundColor = "red";
    imageCard.style.backgroundImage = 'url("./img/red.jpg")';
})

blueColor.addEventListener('click', function(){
    cartButton.style.backgroundColor = "blue";
    itemTag.style.backgroundColor = "blue";
    imageCard.style.backgroundImage = 'url("./img/blue.jpg")';
})

blackColor.addEventListener('click', function(){
    cartButton.style.backgroundColor = "black";
    itemTag.style.backgroundColor = "black";
    imageCard.style.backgroundImage = 'url("./img/black.png")';
})

// Manipulando el boton del carrito y feedback

const cart = () => {
    cartButton.style.display = "none";
    feedBackButton.style.display = "block";
};

const feedback = () => {
    cartButton.style.display = "block";
    feedBackButton.style.display = "none";
};

cartButton.addEventListener('click', cart);
feedBackButton.addEventListener('click', feedback);