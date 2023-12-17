
const startButton = document.getElementById("startBtn");
const circle = document.querySelector(".circle");
const photo = document.querySelector(".photo");

startButton.addEventListener("click", function() {
  // Ocultar el botón al hacer click en Start
  startButton.style.display = "none";

  // Animación para que el círculo recorra la pantalla
  circle.style.animation = "moveCircle 3s forwards";

  // Después de 3 segundos, mostrar la imagen y hacer crecer el círculo
  setTimeout(function() {
    photo.style.animation = "revealImage 4s forwards";
    
    // Obtener la posición y tamaño final del círculo y aplicarlos al elemento
    const computedStyle = window.getComputedStyle(circle);
    circle.style.width = computedStyle.width;
    circle.style.height = computedStyle.height;
    circle.style.left = computedStyle.left;
    circle.style.top = computedStyle.top;
    // Animación para hacer crecer el círculo
    circle.style.animation = "growCircle 2s forwards";
  
    // Cambiar mix-blend-mode a 'none' después de que el círculo termine de agrandarse
    setTimeout(function() {
        photo.style.mixBlendMode = "none";
      }, 2000); // Ajusta el tiempo según la duración de la animación 'growCircle'
  }, 3000);
});

// Al hacer click en la imagen se restablece la animación y se muestra el botón nuevamente
photo.addEventListener('click', function() {
  photo.style.animation = ""; // Elimina la animación de revealImage
  circle.style.animation = ""; // Reinicia la animación de moveCircle
  circle.style.width = ""; // Restablece el tamaño del círculo
  circle.style.height = ""; // Restablece el tamaño del círculo
  circle.style.left = ""; // Restablece la posición del círculo
  circle.style.top = ""; // Restablece la posición del círculo
  startButton.style.display = "block"; // Muestra el botón nuevamente
});

  