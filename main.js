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

// Closing nav-bar-menu after clicking on the nav-links:
navLinks.forEach((link) => {
  link.addEventListener("click", removeShowMenu);
});

/* =================== CHANGE BACKGROUND HEADER ================= */
const bgHeader = function () {
  const header = document.querySelector("#header");

  // Add a class if the bottom offset is greater than 50 of the viewport
  header.classList.toggle("bg-header", this.scrollY >= 50);
};

window.addEventListener("scroll", bgHeader);
// Open nav-bar-menu:
navToggle.addEventListener("click", addShowMenu);

// Close nav-bar-menu:
navClose.addEventListener("click", removeShowMenu);
