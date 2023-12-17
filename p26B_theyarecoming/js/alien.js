const menuBtn = document.querySelector('.header-responsiveMenuBtn');
const menuResponsive = document.querySelector('.responsiveMenu');
const closeBtn = document.querySelector('.responsiveMenu-close');

menuBtn.addEventListener('click', function(){
    menuResponsive.classList.add('is-active');
})

closeBtn.addEventListener('click', function(){
    closeBtn.classList.add('is-active');
})