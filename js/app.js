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

//Header
window.addEventListener("scroll", () => {
  let windowPosition = window.scrollY > 200;
  header.classList.toggle("scroll--active", windowPosition);
});

//Random Quotes
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
