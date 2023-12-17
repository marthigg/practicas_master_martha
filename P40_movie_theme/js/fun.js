const mainContainer = document.querySelector('.ranking');


//Funcion looper - recorre el json
function looper(jsonObj){
    jsonObj.forEach((item)=>{
        
        //Creo contenedor principal(de cada item)
        const artistItem = document.createElement('div');
        artistItem.classList.add('ranking__artist-item');
        mainContainer.appendChild(artistItem);

        //creo contenedor de foto y foto
        const photoContainer = document.createElement('div');
        photoContainer.classList.add('ranking__photo-container');
        artistItem.appendChild(photoContainer);

        const photo = document.createElement('img');
        photo.classList.add('ranking__photo');
        photo.src= "img/portrait.jpg";
        photoContainer.appendChild(photo);

        //Creo datos de artistas
        const infoContainer = document.createElement('div');
        infoContainer.classList.add('ranking__info-container');
        artistItem.appendChild(infoContainer);

        //Llamo a la funcion itemCreator(4 por cada item de la info)
        itemCreator(infoContainer, 'h2', 'Nombre: ', item.name);
        itemCreator(infoContainer, 'p', 'Nombre alternativo: ', item.alternative_name);
        itemCreator(infoContainer, 'p', 'Rating: ', item.rating);
        itemCreator(infoContainer, 'p', 'ID: ', item.objectID);

        colorRanking(artistItem, item.rating);
    })

    //Funcion creada para la info
    function itemCreator(container, itemTag, itemLabel, itemValue){
        const item = document.createElement(itemTag);
        container.appendChild(item);
        const infoValue = itemValue ? itemValue : " no disponible";
        item.innerHTML = `<span class="ranking__info-item">${itemLabel}</span>${infoValue}`
    }

    //Funcion para colorear de acuerdo al rating
    function colorRanking(rankingItem, rating){
        if(rating > 3000){
            rankingItem.classList.add('ranking1')
        }
        else if(rating >2000 && rating < 3000){
            rankingItem.classList.add('ranking2')
        }
        else if(rating >1000 && rating < 2000){
            rankingItem.classList.add('ranking3')
        }
        else if(rating >500 && rating < 1000){
            rankingItem.classList.add('ranking4')
        }
    }
    
    
}






//Function initialize
function init(){
    fetch('actors.json')
    .then((response) =>{
        movies = response.json().then((movies)=>{
            console.log(movies);

            looper(movies);
        })
    })
}

init();