gsap.registerPlugin(ScrollTrigger);

function init() {
  const mainNavLinks = gsap.utils.toArray(".custom-navbar-nav .nav-link");
  mainNavLinks.forEach((link) => {
    link.addEventListener("mouseleave", (e) => {
      link.classList.add("animate-out");
      setTimeout(() => {
        link.classList.remove("animate-out");
      }, 300);
    });
  });
  // start here
}

window.addEventListener("load", function () {
  init();
});

const customNav = document.querySelector(".custom-navbar");
const collapsed = document.querySelector("navbar-collapse");
const navtoggler = document.querySelector(".navbar-toggler");
const open = document.querySelector(".fa-bars");
const close = document.querySelector(".fa-times");
let width = window.innerWidth;
open.addEventListener("click", () => {
  customNav.classList.add("display-nav");
  open.style.display = "none";
  close.style.display = "block";
});
close.addEventListener("click", () => {
  customNav.classList.remove("display-nav");
  close.style.display = "none";
  open.style.display = "block";
});

window.addEventListener("resize", () => {
  if (width > 768) {
    customNav.classList.remove("display-nav");
  }
});
