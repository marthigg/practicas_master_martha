//ALGORITMO: Hacer que cuando los botones 1-8 sean pulsados cambie la foto.
const images = [
    "img/1.jpg",
    "img/2.jpg",
    "img/3.jpg",
    "img/4.webp",
    "img/5.jpg",
    "img/6.jpg",
    "img/7.jpg",
    "img/8.jpg",
]
//1- Capturar todos los elementos que van a participar en mi programa.

//Capturo Botones
const btn1 = document.querySelector("#btn1")
const btn2 = document.querySelector("#btn2")
const btn3 = document.querySelector("#btn3")
const btn4 = document.querySelector("#btn4")
const btn5 = document.querySelector("#btn5")
const btn6 = document.querySelector("#btn6")
const btn7 = document.querySelector("#btn7")
const btn8 = document.querySelector("#btn8")

//Capturo Foto
const tvImg = document.querySelector("#tvImg")

//2- Aplicar el evento al elemento que quiera conseguir.
btn1.addEventListener('click', changeChannel)
btn2.addEventListener('click', changeChannel)
btn3.addEventListener('click', changeChannel)
btn4.addEventListener('click', changeChannel)
btn5.addEventListener('click', changeChannel)
btn6.addEventListener('click', changeChannel)
btn7.addEventListener('click', changeChannel)
btn8.addEventListener('click', changeChannel)

//3- Definir la funcion que va a ejecutar el evento.
function changeChannel(){
    tvImg.src = images[this.dataset.number]
};

//4- Dentro de la funcion programar lo que va a hacer la funcion sobre los elementos que yo le diga.


//Capturar boton On/Off y .tv__image
const btnOnOff = document.querySelector('.tv__button-right-on-off');
const tvScreen = document.querySelectorAll('.tv__image');

//
btnOnOff.addEventListener('click', toggleButtonAndScreen);


function toggleButtonAndScreen() {
    // Es necesario verificar si el botón tiene la clase 'green'
    const isRed = btnOnOff.classList.contains('red');
    
    // Si el botón es verde, mostramos .tv__screen, de lo contrario, lo ocultamos
    if (isRed) {
        tvScreen.forEach(image => {
            image.style.display = 'block';
        });
    } 
    else {
        tvScreen.forEach(image => {
            image.style.display = 'none';
        });
    } 

    // Alternamos la clase 'red' en el botón
    btnOnOff.classList.toggle('red')
};

