const mainNav = document.querySelector('.navigation');
const hamburger = document.querySelector("#menu");
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle("show");
    nav.classList.remove('delete-span');
    document.body.style.overflow = 'hidden';
});

document.querySelector(".delete").addEventListener("click", () => {
    nav.classList.remove('show');
    nav.classList.toggle("delete-span");
    document.body.style.overflow = '';
});




