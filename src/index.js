import "./styles.css";

const hamburger = document.querySelector(".hamburger");
const links = document.querySelector(".links");
const body = document.querySelector("body");
const modeToggle = document.querySelector(".dark-light");
const searToggle = document.querySelector(".searchToggle");

//----------ADD AND SWISH DARK MODE - LIGHT MODE IN THE BROWSER-------------
let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark-mode") {
  body.classList.add("dark");
}

//=============MENU HAMBURGER==================
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  links.classList.toggle("active");
});

//=============MODE TOGGLE==================
modeToggle.addEventListener("click", () => {
  modeToggle.classList.toggle("active");
  body.classList.toggle("dark");

  //----------SET DARK MODE ON LOCALSTORAGE-------------
  if (!body.classList.contains("dark")) {
    localStorage.setItem("mode", "light-mode");
  } else {
    localStorage.setItem("mode", "dark-mode");
  }
});

//=============TOGGLE SEARRCH BAR==================
searToggle.addEventListener("click", () => {
  searToggle.classList.toggle("active");
});
