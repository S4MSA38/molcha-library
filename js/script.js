const slides = document.querySelectorAll('.carousel-slide');
const prevButton = document.querySelector('.carousel-control-prev');
const nextButton = document.querySelector('.carousel-control-next');
let currentSlide = 0;
    
function showSlide(index) {
    const totalSlides = slides.length;
    if (index >= totalSlides) {
     currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
        document.querySelector('.carousel-slides').style.transform = `translateX(-${currentSlide * 100}%)`;
}
    
prevButton.addEventListener('click', () => {
    showSlide(currentSlide - 1);
});
    
nextButton.addEventListener('click', () => {
    showSlide(currentSlide + 1);
});
    
// Автоматическое переключение слайдов каждые 5 секунд
setInterval(() => {
    showSlide(currentSlide + 1);
}, 5000);
