//Creo objetos de cada personaje definiendo el nombre y la fuerza de cada uno
const fighters = {
    p0: {
        name: 'goku',
        force: '3',
    },
    p1: {
        name: 'vejeta',
        force: '2',
    },
    p2: {
        name: 'picollo',
        force: '1',
    }
};

//Capturamos elementos
const btnFight = document.querySelector('.btn-fight');
const photoContainerLeft = document.querySelector('.game__fighter-left-in');
const photoContainerRight = document.querySelector('.game__fighter-right-in');

//Creo evento 
btnFight.addEventListener('click', startFight);

//Creo la funcion que sucedera la hacer 'click'
function startFight(){

    //LEFT
    const keyLeft = Math.floor(Math.random()*3); //Genero num. aleatorio de 0 a 2
    const urlPhotoLeft = 'img/' + fighters['p' + keyLeft].name + '.webp'; //Creo url
    const photoLeft = document.createElement('img'); //Creo una imagen
    photoLeft.src = urlPhotoLeft; //Asigno url a la imagen
    photoContainerLeft.innerHTML = ""; //Vacio div antes de insertar al dom
    photoContainerLeft.appendChild(photoLeft); //Añado imagen al dom

    const forceLeft = fighters['p' + keyLeft].force;

    //RIGHT
    const keyRight = Math.floor(Math.random()*3); //Genero num. aleatorio de 0 a 2
    const urlPhotoRight = 'img/' + fighters['p' + keyRight].name + '.webp'; //Creo url
    const photoRight = document.createElement('img'); //Creo una imagen
    photoRight.src = urlPhotoRight; //Asigno url a la imagen
    photoContainerRight.innerHTML = ""; //Vacio div antes de insertar al dom**
    photoContainerRight.appendChild(photoRight); //Añado imagen al dom

    const forceRight = fighters['p' + keyRight].force;

    theWinner(forceLeft, forceRight);

};

/*
* Funcion que determina el ganador del juego
*/
function theWinner(forceLeft, forceRight){
    photoContainerLeft.parentNode.classList.remove('winner', 'draw');
    photoContainerRight.parentNode.classList.remove('winner', 'draw');


    if(forceLeft > forceRight){
        //GanadorLeft//
        //Crear clase winner que se inserte al containerLeft
        setTimeout(() => {
            //Delay a 0milisegundos
            photoContainerLeft.parentNode.classList.add('winner');
        }, 0);
    }
    else if (forceRight > forceLeft) {
        //GanadorRight//
        //Crear clase winner que se inserte al containerRight
        setTimeout(() => {
           photoContainerRight.parentNode.classList.add('winner'); 
        }, 0);
    } else {
        //Empate
        //Crear clase draw que se inserte al containerRight y containerLeft
        setTimeout(() => {
            photoContainerLeft.parentNode.classList.add('draw');
            photoContainerRight.parentNode.classList.add('draw');
        }, 0);
        
    }
};