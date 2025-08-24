const menuButton = document.querySelector('.menu-button');
const navList = document.querySelector('.nav-list');
const menuIcon = document.querySelector('.icon');

menuButton.addEventListener('click', () => {
    navList.classList.toggle('open');
    const isOpen = navList.classList.contains('open');
    menuIcon.src = isOpen ? 'imagens/close_white_36dp.svg' : 'imagens/menu_white_36dp.svg';
});

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.style.backgroundColor = window.scrollY > 50 ? '#1a1a1a' : '#2b2b2b';
});