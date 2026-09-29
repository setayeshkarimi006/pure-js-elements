const sliderImage = document.querySelector(".slider-image");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const dots = document.querySelectorAll(".dot");
const images = [
    "./picture/Dagger-icon-Mainpage.webp",
    "./picture/Sword-icon-Mainpage.webp",
    "./picture/Magic-icon-Mainpage.webp",
    "./picture/Gun-icon-Mainpage.webp",
    "./picture/Fist-icon-Mainpage.webp"
];
let currentIndex = 0;
function showImage() {
    sliderImage.src = images[currentIndex];
    dots.forEach((dot, index) => {
        dot.classList.toggle(
            "active",
            index === currentIndex
        );
    });
}
nextButton.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    showImage();
});
prevButton.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    showImage();
});
dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        currentIndex = index;
        showImage();
    });
});