const navLinks = document.querySelector(".links");
const burger = document.querySelector(".burger");
burger.addEventListener("click", () => {
  navLinks.classList.toggle("picker");
});

window.addEventListener("scroll", () => {
  var nav = document.querySelector("nav");
  nav.classList.toggle("change", scrollY > 0);
});
