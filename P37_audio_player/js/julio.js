const trackMp3 = new Audio('audio/bamboleo.mp3');
const controls = document.querySelector('.player__buttons');
const playBtn = document.querySelector('.player__btn--play img')
const stopBtn = document.querySelector('.player__btn--stop img')

// Funcion principal que gestiona el audio del sistema

function audioEngine(e){
    
    if(e.target.dataset.value === "stop") stopEngine();
    if(e.target.dataset.value === "play") playEngine();
};


// Funcion que gestiona cuando se hace click en boton stop

function stopEngine(){
    trackMp3.pause();
    trackMp3.currentTime = 0;
    stopImageEngine();

}

function stopImageEngine(){
    stopBtn.src = 'img/stopIcon.svg';
    playBtn.src = 'img/playIcon.svg';
}

// Funcion que gestiona cuando se hace click en boton play

function playEngine(){
    trackMp3.play();
    playImageEngine();
    
}

function playImageEngine(){
    playBtn.src = 'img/playIcon.svg';
    stopBtn.src = 'img/stopIcon.svg';
}



controls.addEventListener('click', audioEngine);