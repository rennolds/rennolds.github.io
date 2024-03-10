// Multi-Family Housing
// Residential 
// Hospitality 
// Commercial 
// Places of Assembly 
// Industrial

const categories = [
    { name: "Multi-Family Housing", images: [
        {src: "resources/lerouge.jpg", title: "LeRouge 1", subtitle: "Fun Place 1"}, 
        {src: "resources/lerouge.jpg", title: "LeRouge 1", subtitle: "Fun Place 1"},
        {src: "resources/lerouge.jpg", title: "LeRouge 1", subtitle: "Fun Place 1"},
        ] 
    },
    { name: "Residential", images: [
        {src: "resources/lerouge.jpg", title: "LeRouge 2", subtitle: "Fun Place 2"}] },

    { name: "Hospitality", images: [
        {src: "resources/hospitality/lerouge.jpg", title: "LeRouge", subtitle: ""},
        {src: "resources/hospitality/brine.jpg", title: "Brine Oyster Bar", subtitle: ""},
        {src: "resources/hospitality/red_crown.jpg", title: "Red Crown", subtitle: ""},
        {src: "resources/hospitality/corrianders.jpg", title: "Corrianders Book Store", subtitle: ""},
    ] },

    { name: "Commercial", images: [
        {src: "resources/lerouge.jpg", title: "LeRouge 2", subtitle: "Fun Place 2"},
        {src: "resources/lerouge.jpg", title: "LeRouge 2", subtitle: "Fun Place 2"},
        ] 
    },
    { name: "Places of Assembly", images: [
        {src: "resources/lerouge.jpg", title: "LeRouge 2", subtitle: "Fun Place 2"},
        {src: "resources/lerouge.jpg", title: "LeRouge 2", subtitle: "Fun Place 2"},
        {src: "resources/lerouge.jpg", title: "LeRouge 2", subtitle: "Fun Place 2"},
        {src: "resources/lerouge.jpg", title: "LeRouge 2", subtitle: "Fun Place 2"},
        ] 
    },
    { name: "Industrial", images: [
        {src: "resources/lerouge.jpg", title: "LeRouge 2", subtitle: "Fun Place 2"},
        {src: "resources/lerouge.jpg", title: "LeRouge 2", subtitle: "Fun Place 2"},
        {src: "resources/lerouge.jpg", title: "LeRouge 2", subtitle: "Fun Place 2"},
        {src: "resources/lerouge.jpg", title: "LeRouge 2", subtitle: "Fun Place 2"},
        {src: "resources/lerouge.jpg", title: "LeRouge 2", subtitle: "Fun Place 2"},
        ] 
    },
    // Add other categories following the same structure
];
let currentIndex = 0;

function updateCarousel() {
    const carousel = document.getElementById('portfolioCarousel');
    const categoryHeader = document.getElementById('category-header');
    const leftArrowHeader = carousel.querySelector('.left-arrow .arrow-header');
    const rightArrowHeader = carousel.querySelector('.right-arrow .arrow-header');
    const imageContainer = carousel.querySelector('.carousel-content .image-container');

    categoryHeader.textContent = categories[currentIndex].name;
    // leftArrowHeader.textContent = currentIndex > 0 ? categories[currentIndex - 1].name : categories[categories.length - 1].name;
    // rightArrowHeader.textContent = currentIndex < categories.length - 1 ? categories[currentIndex + 1].name : categories[0].name;

    // Clear existing images
    imageContainer.innerHTML = '';
    // Add new images
    categories[currentIndex].images.forEach(img => {
        imageContainer.innerHTML += `<div class="image-block"> <img src="${img.src}" alt="${img.title}"><h3>${img.title}</h3><p>${img.subtitle || ''}</p> </div`;
    });
}

function moveSlide(direction) {
    currentIndex += direction;
    if (currentIndex >= categories.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = categories.length - 1;
    }
    updateCarousel();
}

window.onload = updateCarousel;

