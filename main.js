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

//  Language logic

const we_have_everything = document.getElementById('we_have_everything');
const your = document.getElementById('your');
const car = document.getElementById('car');
const need = document.getElementById('need');
const what_we_offer = document.getElementById('what_we_offer');
const our_auto_parts_always_excellent = document.getElementById('our_auto_parts_always_excellent');
const auto_spare_parts = document.querySelectorAll('.auto_spare_part');
const all_right_reserved = document.getElementById('all_right_reserved');
const contact = document.getElementById('contact');
const phones = document.querySelectorAll('.phone');
const email = document.getElementById('email');

function onClickUS() {
    we_have_everything.innerText = 'We Have Everything';
    your.innerText = 'Your ';
    car.innerText = 'Car';
    need.innerText = 'Need';
    what_we_offer.innerText = 'What We Offer';
    our_auto_parts_always_excellent.innerText = 'Our auto parts are always in excellent condition'
    auto_spare_parts.forEach(part => part.innerText = 'Auto Spare Part');
    contact.innerText = 'Contact';
    phones.forEach(phone => phone.innerText = 'Phone');
    email.innerText = 'Email';
    all_right_reserved.innerText = 'All Right Reserved';
}

function onClickARM() {
    we_have_everything.innerText = 'Ամեն Ինչ';
    your.innerText = 'Ձեր ';
    car.innerText = 'Մեքենայի';
    need.innerText = 'Համար';
    what_we_offer.innerText = 'Այն, ինչ առաջարկում ենք մեր սիրելի հաճախորդներին';
    our_auto_parts_always_excellent.innerText = 'Մեր ավտոպահեստամասերը միշտ գերազանց վիճակում են';
    auto_spare_parts.forEach(part => part.innerText = 'Ավտոպահեստամաս');
    contact.innerText = 'Կապ';
    phones.forEach(phone => phone.innerText = 'Հեռախոս');
    email.innerText = 'էլհասցե';
    all_right_reserved.innerText = 'Բոլոր իրավունքները պաշտպանված են';
}

function onClickRU() {
    we_have_everything.innerText = 'У нас есть все';
    your.innerText = 'Ваш ';
    car.innerText = 'Автомобиль';
    need.innerText = 'Нужен';
    what_we_offer.innerText = 'Что мы предлагаем';
    our_auto_parts_always_excellent.innerText = 'Наши автозапчасти всегда в отличном состоянии';
    auto_spare_parts.forEach(part => part.innerText = 'Автозапчасти');
    contact.innerText = 'Контакт';
    phones.forEach(phone => phone.innerText = 'Телефон');
    email.innerText = 'Электронная почта';
    all_right_reserved.innerText = 'Все права защищены';
}
