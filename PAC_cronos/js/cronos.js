// Captura de elementos
const timerButtons = document.querySelector('.timer__buttons');
const timerSeconds = document.querySelector('.timer__seconds');
const timerCentiseconds = document.querySelector('.timer__Centiseconds');


//Variantes
let counterSeconds = 0;
let counterCentiseconds = 0;
let timerInterval = "";

/**
 * Function that starts timer.
 * @returns {any}
 */
function startTimer() {
    timerInterval = setInterval(() => {
            counterCentiseconds++;

            if( counterCentiseconds === 100) {
                 counterSeconds += 1;
                 counterCentiseconds = 0;
             }
             showInHTML(counterSeconds, counterCentiseconds);
        }, 10);
};


/**
 * Function that stops interval initiated in startTimer
 * @returns {any}
 */
function stopTimer() {
    clearInterval(timerInterval);
};

/**
 * Function that sets timer to zero
 * @returns {any}
 */
function resetTimer() {
    counterSeconds = 0;
    counterCentiseconds = 0;
    showInHTML(0,0);
}

/**
 * Description
 * @param {any} seconds
 * @param {any} centiseconds
 * @returns {any}
 */
function showInHTML(seconds, centiseconds) {
    timerSeconds.innerHTML = seconds;
    timerCentiseconds.innerHTML = centiseconds;
}


//LLamada a funciones, eventos, etc.
/**
 * Event 
 * @param {any} 'click'
 * @param {any} function(e)
 * @returns {any}
 */
timerButtons.addEventListener('click', function(e){
    e.target.value === "start" && startTimer();
    e.target.value === "pause" && stopTimer();
    e.target.value === "reset" && resetTimer();
})