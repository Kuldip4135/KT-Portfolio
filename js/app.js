const hamburgerMenu = document.querySelector(".hamburger-menu");
const header = document.querySelector(".header");

hamburgerMenu.addEventListener("click", () => {
  header.classList.toggle("header--active");
});

window.addEventListener("scroll", () => {
  let windowPosition = window.scrollY > 200;
  header.classList.toggle("scroll--active", windowPosition);
});
