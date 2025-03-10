document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.burger-menu');
    const navMenu = document.querySelector('.nav-item');
    const body = document.body;

    burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
        body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });


    document.querySelectorAll('.nav-item a').forEach(link => {
        link.addEventListener('click', () => {
            burgerMenu.classList.remove('active');
            navMenu.classList.remove('active');
            body.style.overflow = '';
        });
    });
});

function checkVisibility() {
    const elements = [
        document.querySelector('.container'),
        document.querySelector('.container2'),
        document.querySelector('.first-left'),
        document.querySelector('.first-right'),
        document.querySelector('.container3')
    ];
    
    elements.forEach(element => {
        if (!element) return;
        
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        if (rect.top <= windowHeight * 0.75) {
            element.classList.add('visible');
        }
    });
}


window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);


document.addEventListener('DOMContentLoaded', checkVisibility);
