let slideIndexes = {};

function initSlideshow(slideshowClass) {
    slideIndexes[slideshowClass] = 1;
    showSlides(1, slideshowClass);
}

function plusSlides(n, slideshowClass) {
    showSlides(slideIndexes[slideshowClass] += n, slideshowClass);
}

function showSlides(n, slideshowClass) {
    let i;
    let slides = document.getElementsByClassName("mySlides " + slideshowClass);
    if (n > slides.length) {slideIndexes[slideshowClass] = 1} 
    if (n < 1) {slideIndexes[slideshowClass] = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slides[slideIndexes[slideshowClass] - 1].style.display = "block"; 
}

// Initialize each slideshow
initSlideshow('super-simon');
initSlideshow('evergreen');
initSlideshow('Tec');
initSlideshow('First');
initSlideshow('SpaceAlpha');
