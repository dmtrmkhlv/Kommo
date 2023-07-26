"use strict";

const burgerMenu = document.querySelector(".burger-menu");
const burgerDropdown = document.querySelector(".burger-dropdown");

burgerMenu.addEventListener("click", function () {
  burgerMenu.classList.toggle("opened");
});
