// navbar
const navbarShowBtn = document.querySelector(".navbar-show-btn");
const navbarCollapseDiv = document.querySelector(".navbar-collapse");
const navbarHideBtn = document.querySelector(".navbar-hide-btn");

navbarShowBtn.addEventListener("click", function () {
  navbarCollapseDiv.classList.add("navbar-show");
  console.log(
    "Navbar show:",
    navbarCollapseDiv.classList.contains("navbar-show")
  );
});
navbarHideBtn.addEventListener("click", function () {
  navbarCollapseDiv.classList.remove("navbar-show");
  console.log(
    "Navbar show:",
    navbarCollapseDiv.classList.contains("navbar-show")
  );
});
// resize windows
window.addEventListener("resize", changeSearchIcon);
function changeSearchIcon() {
  let winSize = window.matchMedia("(min-width: 1200px)");
  if (winSize.matches) {
    document.querySelector(".search-icon img").src = "Imagens/search-icon.png";
  } else {
    document.querySelector(".search-icon img").src =
      "Imagens/search-icon-dark.png";
  }
}
changeSearchIcon();

// pausa de animações
let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});
