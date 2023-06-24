const searchBox = document.getElementById('search-box');
const menu = document.querySelector('.navbar');

document.getElementById('search-icon').addEventListener('click', () => {
    searchBox.classList.toggle('active');
    menu.classList.remove('active');
});

document.getElementById('menu-icon').addEventListener('click', () => {
    menu.classList.toggle('active');
    searchBox.classList.remove('active');
});

// Hide Menu And Search Box On Scroll
window.onscroll = () => {
    menu.classList.remove('active');
    searchBox.classList.remove('active');
}

// Header

const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});
