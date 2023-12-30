// Rain
window.addEventListener('mouseup', function (event) {
    var pol = document.getElementById('pol');
    if (event.target != pol && event.target.parentNode != pol) {
        pol.style.display = 'none';
    }
});



// PORTFOLIO GRID
let lazyImages = [...document.querySelectorAll(".lazy-image")];
let inAdvance = 300;

function lazyLoad() {
    lazyImages.forEach((image) => {
        if (image.offsetTop < window.innerHeight + window.pageYOffset + inAdvance) {
            image.src = image.dataset.src;
            image.onload = () => image.classList.add("loaded");
        }
    });

    // if all loaded removeEventListener
}

lazyLoad();

window.addEventListener("scroll", _.throttle(lazyLoad, 16));
window.addEventListener("resize", _.throttle(lazyLoad, 16));




// Visitor_Counter
const count = document.getElementById('count');

updateVisitCount();

function updateVisitCount() {
    fetch('https://api.countapi.xyz/update/danielazocardev/codepen/?amount=1')
        .then(res => res.json())
        .then(res => {
            count.innerHTML = res.value
        });
}


// MODAL (CHI SONO)

function openImage(event) {
    const overlay = document.querySelector('.overlay');
    const overlayImage = document.getElementById('overlay-image');
    const imageUrl = event.querySelector('img').src;

    overlayImage.src = imageUrl;
    overlay.style.display = 'flex';
}

function closeImage() {
    const overlay = document.querySelector('.overlay');
    overlay.style.display = 'none';
}














