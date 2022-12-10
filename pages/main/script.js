// Make mobile navigation work

const btnMobile = document.querySelector(".btn-mobile-nav");
const headerMobile = document.querySelector(".header");

btnMobile.addEventListener("click", function () {
  headerMobile.classList.toggle("mobile-header");
});

// Make random corousel

const btnRightSlider = document.querySelector(".pets_section_arrow_right");
const btnLeftSlider = document.querySelector(".pets_section_arrow_left");
const petsSectionCards = document.querySelector(".pets_section_cards");

btnRightSlider.addEventListener("click", function () {
  const randomCard = Math.floor(Math.random() * 3);
  const randomCardElement =
    document.querySelectorAll(".pets_section_card")[randomCard];
  petsSectionCards.appendChild(randomCardElement);
});

btnLeftSlider.addEventListener("click", function () {
  const randomCard = Math.floor(Math.random() * 3);
  const randomCardElement =
    document.querySelectorAll(".pets_section_card")[randomCard];
  petsSectionCards.appendChild(randomCardElement);
});
