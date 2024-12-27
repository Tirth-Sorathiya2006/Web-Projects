//Code about the type JS
let typed = new Typed('#element', {
    strings: ['Web Developer'],
    typeSpeed: 100,
});

//Code for the hamburger menu
const menuIcon = document.querySelector('#hambargurMenuIcon');
const menu = document.querySelector('.menu');
const closeButton = document.querySelector('#closeButton');
const menuButtons = document.querySelectorAll('.menuButtons');

menuIcon.addEventListener('click', () => {
    if(menu.style.display === 'none'){
        menu.style.display = 'flex';
    } else{
        menu.style.display = 'none'
    }
});

closeButton.addEventListener('click', () => {
    menu.style.display = 'none';
});

menuButtons.forEach((item, index) => {
    item.addEventListener('click', () => {
        menu.style.display = 'none';
    });
});