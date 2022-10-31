const navLinsk = document.querySelector('.nav-links');
const menuBtn =  document.querySelector('.menu-btn');

menuBtn.addEventListener('click', () => {
    navLinsk.classList.toggle('mobile-menu');
})