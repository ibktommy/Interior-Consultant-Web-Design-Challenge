const menu = document.querySelector(".menu");
const navBar = document.querySelector(".navbar");

menu.addEventListener("click", function() {
  navBar.classList.toggle("change");
});