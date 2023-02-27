const menu = document.querySelector('.header__menu');
const navbar = document.querySelector('.navbar');
const navbarMenu = document.querySelector('.navbar__container');

menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    navbar.classList.toggle('active');

    setTimeout(() => {
        navbarMenu.classList.toggle('active');
    }, 100);
})