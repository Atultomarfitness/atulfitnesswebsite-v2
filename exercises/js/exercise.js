/* ======================================================
   EXERCISE JAVASCRIPT

   Used For:
   - All Exercise Pages

   Current Features:
   1. Mobile Navigation
   2. FAQ Accordion

   Future:
   - Scroll Reveal
   - Video Controls
   - Exercise Progress Tracker
====================================================== */

console.log("Exercise Script Loaded");


/* ======================================================
   SECTION 01 : MOBILE NAVIGATION
====================================================== */

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelectorAll(".nav-link");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        const isOpen = navMenu.classList.toggle("active");

        menuToggle.setAttribute("aria-expanded", isOpen);

        document.body.classList.toggle("menu-open", isOpen);

        if (menuIcon) {

            menuIcon.src = isOpen
                ? "../images/icons/x.svg"
                : "../images/icons/menu.svg";

        }

    });


    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

            document.body.classList.remove("menu-open");

            if (menuIcon) {

                menuIcon.src = "../images/icons/menu.svg";

            }

        });

    });


    document.addEventListener("click", (event) => {

        const isInsideNav = event.target.closest(".main-nav");

        if (!isInsideNav && navMenu.classList.contains("active")) {

            navMenu.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

            document.body.classList.remove("menu-open");

            if (menuIcon) {

                menuIcon.src = "../images/icons/menu.svg";

            }

        }

    });

}


/* ======================================================
   SECTION 02 : FAQ ACCORDION
====================================================== */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    if (!question) return;

    question.addEventListener("click", () => {

        faqItems.forEach(otherItem => {

            if (otherItem !== item) {

                otherItem.classList.remove("active");

                const otherAnswer = otherItem.querySelector(".faq-answer");

                if (otherAnswer) {

                    otherAnswer.style.maxHeight = null;

                }

            }

        });

        item.classList.toggle("active");

        const answer = item.querySelector(".faq-answer");

        if (!answer) return;

        answer.style.maxHeight = item.classList.contains("active")
            ? answer.scrollHeight + "px"
            : null;

    });

});


/* ======================================================
   SECTION 03 : FUTURE FEATURES
====================================================== */

// Scroll Reveal

// Exercise Video Controls

// Exercise Progress Tracker

// Related Exercise Slider