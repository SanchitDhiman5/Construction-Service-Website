/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close"),
  navLinks = document.querySelectorAll(".nav__link");

// Add Show-menu:
const addShowMenu = function () {
  navMenu.classList.add("show-menu");
};

// Remove Show-menu:
const removeShowMenu = function () {
  navMenu.classList.remove("show-menu");
};

// Open nav-bar-menu:
navToggle.addEventListener("click", addShowMenu);

// Close nav-bar-menu:
navClose.addEventListener("click", removeShowMenu);

// Closing nav-bar-menu after clicking on the nav-links:
navLinks.forEach((link) => {
  link.addEventListener("click", removeShowMenu);
});
