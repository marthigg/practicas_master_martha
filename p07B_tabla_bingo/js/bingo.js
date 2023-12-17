// Obtener todas las celdas por su clase 'cell'.
const cells = document.querySelectorAll('.cell');

// Obtener el botón por su clase 'botonBingo'.
const btnNewCard = document.querySelector('.btnBingo');

// Evento click para cambiar los colores y numeros.
btnNewCard.addEventListener('click', changeColorsAndNumbers);


// Función para obtener un número aleatorio.
function getRandomNum() {
    return Math.floor(Math.random() * 9);
  }

// Función para obtener un color aleatorio.
function getRandomColor() {
    const colorId = '0123456789ABCDEF';
    let colorSymbol = '#';
    for (let i = 0; i < 6; i++) {
        colorSymbol += colorId[Math.floor(Math.random() * 16)];
    }
    return colorSymbol;
}



// Función para cambiar el color y numeros de las celdas a un color aleatorio.
function changeColorsAndNumbers() {
    cells.forEach(cell => {
        cell.textContent = getRandomNum();
        cell.style.backgroundColor = getRandomColor();
    });
}




