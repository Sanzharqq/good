
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

    const suitIdeas = document.querySelector('.suit-ideas');
    if (suitIdeas) {
        const images = suitIdeas.innerHTML;
        suitIdeas.innerHTML = images + images;
    }
});