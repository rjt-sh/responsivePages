"use strict";

const toggleButton = document.querySelector(".material-icons-outlined");
const navbarLinks = document.querySelector(".nav-links");

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
