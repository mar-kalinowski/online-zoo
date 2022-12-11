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

// Make testimonials corousel working with range input

const testRangeInput = document.querySelector(
  ".testimonials_content_scroll-line"
);
const testContent = document.querySelector(".testimonials_content_boxes");
const testContentBoxes = document.querySelectorAll(".testimonials_content_box");

testRangeInput.addEventListener("input", function () {
  const testRangeValue = testRangeInput.value;
  testContent.style.transform = `translateX(-${testRangeValue}%)`;
});

// Add modal for every testimonial content box

testContentBoxes.forEach((box) => {
  box.addEventListener("click", function () {
    const testContentBoxHeader = box.querySelector(
      ".testimonials_content_box_header"
    );

    const testContentBoxH4 = box.querySelector("h4").textContent;

    const testContentBoxAvatar = box.querySelector(
      ".testimonials_content_box_avatar"
    );
    const testContentBoxUserData = box.querySelector(
      ".testimonials_content_box_user-data"
    );
    const testContentBoxUserDataLocal = box.querySelector(
      ".testimonials_content_box_user-data_local"
    );
    const testContentBoxText = box.querySelector(
      ".testimonials_content_box_text"
    );
    const testContentBoxButton = box.querySelector(
      ".testimonials_content_box_button"
    );

    const modalCloseButton = document.createElement("button");
    modalCloseButton.classList.add("testimonials_modal_content_button_close");
    modalCloseButton.textContent = "X";

    const modal = document.createElement("div");
    modal.classList.add("testimonials_modal");
    modal.innerHTML = `
      <div class="testimonials_ontent_box">
        <div class="testimonials_content_box_header">
          <img class="testimonials_content_box_avatar" src="${testContentBoxAvatar.src}" alt="${testContentBoxAvatar.alt}">
          <div class="testimonials_content_box_user-data">
            <h4>${testContentBoxH4}</h4>
            <div class ='testimonials_content_box_user-data_local'>
              <p>Local Austria</p>
              <p>.</p>
              <p>Today</p>
            </div>
          </div>
        </div>
        <p class="testimonials_content_box_text">${testContentBoxText.textContent}</p>
        <button class="testimonials_modal_content_button_close">X</button>
    `;
    modal.appendChild(modalCloseButton);
    console.log(modal);
    modal.classList.add("testimonials_modal");
    testContent.appendChild(modal);

    modalCloseButton.addEventListener("click", function () {
      modal.remove();
    });
  });
});

// Make modal close button work
