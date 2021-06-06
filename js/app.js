const hamburgerMenu = document.querySelector(".hamburger-menu");
const header = document.querySelector(".header");
const navLinks = document.querySelectorAll("ul li");

hamburgerMenu.addEventListener("click", () => {
  header.classList.toggle("header--active");
});

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    if (header.classList.contains("header--active")) {
      header.classList.remove("header--active");
    }
  });
});

window.addEventListener("scroll", () => {
  let windowPosition = window.scrollY > 200;
  header.classList.toggle("scroll--active", windowPosition);
});
