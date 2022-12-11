// Make mobile navigation work

const btnMobile = document.querySelector(".btn-mobile-nav");
const headerMobile = document.querySelector(".header");

btnMobile.addEventListener("click", function () {
  headerMobile.classList.toggle("mobile-header");
});
