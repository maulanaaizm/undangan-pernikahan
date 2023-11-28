const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

//
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

window.onscroll = function () {
  const nav = document.querySelector(".navbar");
  const fixedNav = nav.offsetTop;
  //   const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixedNav) {
    nav.classList.add("navbar-fixed");
    // toTop.classList.remove("hidden");
    // toTop.classList.add("flex");
  } else {
    nav.classList.remove("navbar-fixed");
    // toTop.classList.remove("flex");
    // toTop.classList.add("hidden");
  }
};
