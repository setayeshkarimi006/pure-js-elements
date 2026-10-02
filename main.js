const sliderImage = document.querySelector(".slider-image");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const dots = document.querySelectorAll(".dot");
const images = [
  "./picture/Dagger-icon-Mainpage.webp",
  "./picture/Sword-icon-Mainpage.webp",
  "./picture/Magic-icon-Mainpage.webp",
  "./picture/Gun-icon-Mainpage.webp",
  "./picture/Fist-icon-Mainpage.webp",
];
let currentIndex = 0;
function showImage() {
  sliderImage.src = images[currentIndex];
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
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

///بخش دوم تب ها و مودال
const tabs = document.querySelector("#tabs");

const tabButtons = document.querySelectorAll(".tab-btn");

const tabPanels = document.querySelectorAll(".tab-panel");

const dropdown = document.querySelector("#dropdown");

const dropdownButton = document.querySelector("#dropdown-button");

const selectedOption = document.querySelector("#selected-option");

const modal = document.querySelector("#modal");

const openModal = document.querySelector("#open-modal");

const closeModal = document.querySelector("#close-modal");

const modalOk = document.querySelector("#modal-ok");

/* =========================
   TABS
========================= */

tabs.addEventListener("click", (event) => {
  const clickedButton = event.target.closest(".tab-btn");

  if (!clickedButton) {
    return;
  }

  const targetTab = clickedButton.dataset.tab;

  tabButtons.forEach((button) => {
    button.classList.remove("active");
  });

  tabPanels.forEach((panel) => {
    panel.classList.remove("active");
  });

  clickedButton.classList.add("active");

  const targetPanel = document.querySelector(`[data-panel="${targetTab}"]`);

  targetPanel.classList.add("active");
});

/* =========================
   DROPDOWN
========================= */

dropdownButton.addEventListener("click", () => {
  dropdown.classList.toggle("open");
});

dropdown.addEventListener("click", (event) => {
  const option = event.target.closest(".dropdown-menu button");

  if (!option) {
    return;
  }

  selectedOption.textContent = option.textContent;

  dropdown.classList.remove("open");
});

/* =========================
   MODAL
========================= */

openModal.addEventListener("click", () => {
  modal.classList.add("open");
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("open");
});

modalOk.addEventListener("click", () => {
  modal.classList.remove("open");
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.remove("open");
  }
});