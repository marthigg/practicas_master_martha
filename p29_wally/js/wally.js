//1. Capturar Elementos --> poster y .wally
const poster = document.querySelector('.wally__poster');
const iAmWally = document.querySelector('.wally');

//2. Crear funcion que va va a suceder al hacer click.
function mensajeError() {
    console.log("Aquí no está Wally");
}

function mensajeCierto(e) {
    e.stopPropagation();
    //console.log("Has encontrado a Wally!!");
    const coordenadas = [e.pageX, e.pageY];//= coordenadas[0][1]

    coordenadas.push('Bravo!! Has encontrado a Wally.');//= Coordenada[2]

    const mensajeFinal = `${coordenadas[2]} Tus coordenadas son: X ${coordenadas[0] } Y ${coordenadas[1]}`;

    console.log(mensajeFinal);
}
//3. Crear evento.
poster.addEventListener('click', mensajeError);
iAmWally.addEventListener('click', mensajeCierto);






