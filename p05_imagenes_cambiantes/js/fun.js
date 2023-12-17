// 1- Capturar Elementos
const btnFlechas = document.querySelector('.btnFlechas');
const fotoVoldemort = document.querySelector('#fotoVoldemort');

// 2- Crear eventos de usuario
btnFlechas.addEventListener('click', cambiarfoto);

//3- Crear función que pasara al ejecutar el evento
let imageCounter = 1
function cambiarfoto(){
    imageCounter = imageCounter+1;

    if(imageCounter == 4){imageCounter = 1};
    
    fotoVoldemort.src="img_voldemort/" + imageCounter + ".webp";
}


