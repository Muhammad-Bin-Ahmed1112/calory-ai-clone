/* =========================
   MOBILE MENU
========================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});


/* =========================
   CLOSE MOBILE MENU
========================= */

document.querySelectorAll(".nav-menu a").forEach(link => {

  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });

});


/* =========================
   FAQ ACCORDION
========================= */

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {

  question.addEventListener("click", () => {

    const item = question.parentElement;

    document.querySelectorAll(".faq-item").forEach(otherItem => {

      if (otherItem !== item) {
        otherItem.classList.remove("active");

        const icon = otherItem.querySelector(".faq-question span");

        if (icon) {
          icon.textContent = "+";
        }
      }

    });

    item.classList.toggle("active");

    const icon = question.querySelector("span");

    if (item.classList.contains("active")) {
      icon.textContent = "−";
    } else {
      icon.textContent = "+";
    }

  });

});


/* =========================
   SCREENSHOT SLIDER
========================= */

const screenshots = document.getElementById("screenshots");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");

nextButton.addEventListener("click", () => {

  screenshots.scrollBy({
    left: 250,
    behavior: "smooth"
  });

});


prevButton.addEventListener("click", () => {

  screenshots.scrollBy({
    left: -250,
    behavior: "smooth"
  });

});


/* =========================
   NAVBAR SCROLL EFFECT
========================= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

  if (window.scrollY > 30) {
    header.style.boxShadow = "0 3px 20px rgba(0,0,0,.1)";
  } else {
    header.style.boxShadow = "0 2px 15px rgba(0,0,0,.06)";
  }

});
