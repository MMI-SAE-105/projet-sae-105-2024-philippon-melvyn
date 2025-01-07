
const slides = document.querySelectorAll('.carousel-slide'); 
const prevButton = document.querySelector('.carousel-button.prev'); 
const nextButton = document.querySelector('.carousel-button.next'); 
let currentSlide = 0; 


function updateSlides() {
    
    slides.forEach((slide, index) => {
        slide.style.display = 'none'; 
    });


    slides[currentSlide].style.display = 'block';

    
    if (currentSlide === 0) {
        prevButton.disabled = true; 
    } else {
        prevButton.disabled = false; 
    }

    if (currentSlide === slides.length - 1) {
        nextButton.disabled = true; 
    } else {
        nextButton.disabled = false; 
    }
}

prevButton.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--; 
        updateSlides(); 
    }
});

nextButton.addEventListener('click', () => {
    if (currentSlide < slides.length - 1) {
        currentSlide++; 
        updateSlides(); 
    }
});


updateSlides(); 
