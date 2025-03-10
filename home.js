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

const img = [
    'https://d1fufvy4xao6k9.cloudfront.net/images/landings/26/2022-aw-x2a6525-copia.png',
    'https://d1fufvy4xao6k9.cloudfront.net/images/landings/26/2022-we-01-x2a0073-3p.webp',
    'https://d1fufvy4xao6k9.cloudfront.net/images/landings/26/2022-ss-15-x2a4922.png'
];

let total = 0;

function changeImage() {
    const sliderImage = document.getElementById('slider-image');
    total = (total + 1) % img.length;
    sliderImage.src = img[total]; 
}

setInterval(changeImage, 5000);


const images = [
    "https://d1fufvy4xao6k9.cloudfront.net/images/landings/26/2022-we-14-x2a8369-tux.webp",
    "https://d1fufvy4xao6k9.cloudfront.net/images/landings/26/2022-we-07-x2a9974-3p.webp",
    "https://d1fufvy4xao6k9.cloudfront.net/images/landings/27/burgundy-tuxedo.webp",
    "https://d1fufvy4xao6k9.cloudfront.net/images/landings/26/2022-we-10-x2a9426-3p.webp",
    "https://d1fufvy4xao6k9.cloudfront.net/images/landings/26/2019-aw-2683.webp",
    "https://d1fufvy4xao6k9.cloudfront.net/images/landings/27/size-0000s-0000-278a9999.webp",
    "https://d1fufvy4xao6k9.cloudfront.net/images/landings/27/2019-aw-8861-tux-sw.webp",
    "https://d1fufvy4xao6k9.cloudfront.net/images/landings/27/26-1.webp",
    "https://d1fufvy4xao6k9.cloudfront.net/images/landings/27/aw-23-04-278a2105-1.webp",
    "https://d1fufvy4xao6k9.cloudfront.net/images/landings/27/2020-aw-tux-1.webp",
    "https://d1fufvy4xao6k9.cloudfront.net/images/landings/27/aw2308278a2004-sw.webp"
];

let startIndex = 0;
const visibleCount = 6; 

function updateGallery() {
    const container = document.getElementById("imageContainer");
    container.innerHTML = ""; 

    for (let i = startIndex; i < startIndex + visibleCount; i++) {
        if (images[i]) {
            let img = document.createElement("img");
            img.src = images[i];
            container.appendChild(img);
        }
    }
}

function nextImages() {
    if (startIndex + visibleCount < images.length) {
        startIndex++;
        updateGallery();
    }
}

function prevImages() {
    if (startIndex > 0) {
        startIndex--;
        updateGallery();
    }
}

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScroll() {
    const box = document.querySelector('.box');
    if (isElementInViewport(box)) {
        box.classList.add('visible');
        
        window.removeEventListener('scroll', handleScroll);
    }
}

window.addEventListener('scroll', handleScroll);

handleScroll();

function checkVisibility() {
    const elements = document.querySelectorAll('.box, .box-change');
    
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        

        if (rect.top <= windowHeight * 0.8) { 
            element.classList.add('visible');
        }
    });
}


window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);
