// import iconClose from "../images/close.svg";
// import iconHamburger from "../images/icon-hamburger.svg";
// //This is for Mobile Navigation
// export const navigationChanger = () => {
//   const navigationToggle = (event) => {
//     let element = event.target;
//     let parent = event.target.parentNode;
//     if (element.classList.contains("navbar__mobile--active")) {
//       element.src = iconClose;
//       element.classList.remove("navbar__mobile--active");
//       element.classList.add("navbar__mobile--deactive");
//       parent.classList.toggle("background-toggle");
//     } else if (element.classList.contains("navbar__mobile--deactive")) {
//       element.classList.remove("navbar__mobile--deactive");
//       element.src = iconHamburger;
//       element.classList.add("navbar__mobile--active");
//       parent.classList.toggle("background-toggle");
//     }
//   };
//   document.querySelector(".navbar").addEventListener("click", navigationToggle);
// };
// export const slider = () => {
//   const slides = Array.from(document.querySelectorAll(".slide"));
//   const nextSlideBtn = document.querySelector(".navigation__right");
//   const prevSlideBtn = document.querySelector(".navigation__left");
//   const ctaHeader = document.querySelector(".cta__header");
//   const ctaText = document.querySelector(".cta__text");
//   const cta = {
//     header: [
//       "Discover innovative ways to decorate",
//       "We are available all across the globe",
//       "Manufactured with the best materials",
//     ],
//     text: [
//       `We provide unmatched quality, comfort, and style for property owners across the country.
//   		 Our experts combine form and function in bringing your vision to life. Create a room in your
//   		 own style with our collection and make your property a reflection of you and what you love.
//   		`,
//       `With stores all over the world, it's easy for you to find furniture for your home or place of business.
//          Locally, we’re in most major cities throughout the country. Find the branch nearest you using our
//   		 store locator. Any questions? Don't hesitate to contact us today.
//   		`,
//       `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology
//          to ensure that every product is made as perfect and as consistent as possible. With three decades of
//          experience in this industry, we understand what customers want for their home and office.
//         `,
//     ],
//   };
//   let count = 0; //Default value of count for slider
//   let maxCount = slides.length; //Number of slides to display
//   const gotoSilde = (slide) => {
//     //Display Slides
//     slides.forEach((el, i) => {
//       el.style.transform = `translateX(${200 * (slide - i)}%)`;
//     });
//   };
//   const changeCta = (count) => {
//     //Change CTA text and heading
//     ctaHeader.textContent = cta.header[count];
//     ctaText.textContent = cta.text[count];
//   };
//   const nextSlide = () => {
//     //Go to next slide
//     if (count === maxCount - 1) {
//       count = 0;
//     } else {
//       count++;
//     }
//     gotoSilde(count);
//     changeCta(count);
//   };
//   const prevSlide = (e) => {
//     //Go to previous slide
//     e.preventDefault();
//     if (count == 0) {
//       count = maxCount - 1;
//     } else {
//       count--;
//     }
//     gotoSilde(count);
//     changeCta(count);
//   };
//   const checkKeys = (event) => {
//     //Navigation through keyboard left and right keys
//     if (event.code === "ArrowRight") {
//       nextSlide();
//     } else if (event.code === "ArrowLeft") {
//       prevSlide(event);
//     }
//   };
//   const init = () => {
//     //Initialization of slider
//     gotoSilde(0);
//     changeCta(0);
//   };
//   init();
//   //Event Listeners
//   nextSlideBtn.addEventListener("click", nextSlide);
//   prevSlideBtn.addEventListener("click", prevSlide);
//   document.addEventListener("keyup", checkKeys);
// };

// V2

let slideIndex = 1; // Initialization of slider
showSlides(slideIndex); // Display the first slide by default

function nextSlide() {
  // Go to next slide
  showSlides((slideIndex += 1)); // Increment the value of slideIndex by 1
}

function previousSlide() {
  // Go to previous slide
  showSlides((slideIndex -= 1)); // Decrement the value of slideIndex by 1
}

// Event Listeners
function currentSlide(n) {
  // Display the current slide
  showSlides((slideIndex = n)); // Set the value of slideIndex to n
}

// Next/previous controls
function showSlides(n) {
  // Display the current slide
  let i; // Declare a variable i
  let slides = document.getElementsByClassName("item"); // Get the elements with class name item

  if (n > slides.length) {
    // If the value of n is greater than the number of slides in the slider then set the value of slideIndex to 1
    slideIndex = 1; // Set the value of slideIndex to 1
  }
  if (n < 1) {
    // If the value of n is less than 1 then set the value of slideIndex to the number of slides in the slider
    slideIndex = slides.length; // Set the value of slideIndex to the number of slides in the slider
  }

  for (let slide of slides) {
    // Loop through the slides in the slider and set the display property to none for all slides
    slide.style.display = "none"; // Set the display property to none
  }
  slides[slideIndex - 1].style.display = "block"; // Set the display property to block for the current slide and set the value of slideIndex to n - 1
}
