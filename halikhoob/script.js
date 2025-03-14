let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        dots[i].classList.remove("active");
    }
    
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    
    slides[slideIndex-1].classList.add("active");
    dots[slideIndex-1].classList.add("active");
    setTimeout(showSlides, 5000);
}

function changeSlide(n) {
    slideIndex += n;
    let slides = document.getElementsByClassName("slide");
    if (slideIndex > slides.length) {slideIndex = 1}
    if (slideIndex < 1) {slideIndex = slides.length}
    showSlides();
}

function goToSlide(n) {
    slideIndex = n;
    showSlides();
}

window.onload = showSlides;