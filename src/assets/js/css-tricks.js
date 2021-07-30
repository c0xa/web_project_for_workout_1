const star =  document.querySelector('.ct-star-icon');

window.addEventListener('scroll', function () {
    if (this.pageYOffset === 0) {
        star.style.transform = 'rotate(1260deg)';
    } else {
        star.style.transform = 'rotate(0)';
    }
});