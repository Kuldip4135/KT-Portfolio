const hamburgerMenu = document.querySelector(".hamburger-menu");
const header = document.querySelector(".header");
const navLinks = document.querySelectorAll("ul li");
let lastScrollTop = 0;

/*==================== Hamburger Menur ====================*/

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

/*==================== Show Header On Scroll Down ====================*/

window.addEventListener("scroll", (e) => {
  let scrollTop = window.pageYOffset || document.createElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    header.style.top = "-180px";
    header.style.backgroundColor = "transparent";
  } else {
    header.style.top = "0";
    header.style.backgroundColor = "#0f0f0f";
  }
  lastScrollTop = scrollTop;
});

/*==================== Random Quotes ====================*/

const quote = document.querySelector(".quote");
const author = document.querySelector(".quote-author");
const URL = "https://type.fit/api/quotes";

const getOneQuote = (resData) => {
  const oneQuote = Math.floor(Math.random() * 1643);
  quote.innerText = resData[oneQuote].text;
  author.innerText = `- ${resData[oneQuote].author}`;
};

const getRandomQuotes = async () => {
  quote.innerText = "Getting Quote For U";
  const res = await fetch(URL);
  const resData = await res.json();
  getOneQuote(resData);
};

getRandomQuotes();

/*==================== Bouncer Loader ====================*/

const bouncerWrapper = document.querySelector(".bouncer-wrapper");

window.addEventListener("load", () => {
  bouncerWrapper.parentElement.removeChild(bouncerWrapper);
});
