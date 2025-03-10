// header scroll
window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Открытие модального окна
const openMenuBtn = document.querySelector('.burger-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenuButton = mobileMenu.querySelector('.close-modal');
const menuNavItem = mobileMenu.querySelectorAll('.nav-list__item');


menuNavItem.forEach((btn)=> {
    btn.addEventListener('click', ()=>{
        mobileMenu.classList.add('hidden')
    })
})
openMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('hidden')
});



closeMenuButton.addEventListener('click', () => {
    mobileMenu.classList.add('hidden')
});


window.addEventListener('click', (event) => {
    if (event.target === mobileMenu) {
        mobileMenu.classList.add('hidden')
    }
});