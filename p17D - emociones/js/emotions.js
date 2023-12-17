//Capturo elementos
const emotionsBtn = document.querySelectorAll('.emotions__item button');
const messages = document.querySelectorAll('.emotions__message p');
const randomBtn = document.querySelector('.random-button')


// Función para asignar colores
emotionsBtn.forEach((button, index) =>{
    const colorMutation = Math.floor(280 -(index*(280/emotionsBtn.length)));
    const color = "hsl("+colorMutation+",100%, 50%";
    button.style.color = color;

    button.addEventListener('click', function () {
        displayMessage(index); // Llamar a la función displayMessage con el índice correspondiente
    });
})

// Función para mostrar mensajes
 function displayMessage(index){
     // Ocultar todos los mensajes
     messages.forEach(message => {
        message.style.display = 'none';
    });

    // Mostrar el mensaje correspondiente a la emoción seleccionada
    messages[index].style.display = 'block';
 }

 

