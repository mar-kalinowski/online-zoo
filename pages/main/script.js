const btnRight = document.querySelector(".pets_section_arrow_right");
const btnLeft = document.querySelector(".pets_section_arrow_left");

btnRight.addEventListener("click", function (e) {
  const petsSection = document.querySelector(".pets_section");
  petsSection.scrollLeft += 300;
  console.log(e.target);
});

btnLeft.addEventListener("click", function (e) {
  const petsSection = document.querySelector(".pets_section");
  petsSection.scrollLeft -= 300;
  console.log(e.target);
});

// Make mobile navigation work

const btnMobile = document.querySelector(".btn-mobile-nav");
const headerMobile = document.querySelector(".header");

btnMobile.addEventListener("click", function () {
  headerMobile.classList.toggle("mobile-header");
});
