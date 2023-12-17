const firstDiv = document.querySelector('.div-1');
const btn1 = document.querySelector('.btn1');
const imgCap = document.querySelector('[title="foto aleatoria"]')

function divChanger(obj, info){
    obj.classList.add('padd-40');
    obj.classList.add('bg-red');
    obj.classList.add('border');
    info.setAttribute('title', 'foto random');
}


btn1.addEventListener('click', function(){
    divChanger(firstDiv, imgCap);
    //imgCap.setAttribute('title', 'foto random');
    // const altvalue = imgCap.getAttribute('alt');
    // imgCap.removeAttribute('alt');
})


