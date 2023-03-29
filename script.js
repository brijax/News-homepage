let menuIcon = document.getElementById("nav-open");
let navMenu = document.getElementById("menu");
let backModal = document.querySelector("div.modal");
let menuClose = document.getElementById("nav-close");

const showMenu = () => {
  navMenu.style.display = "block";
  backModal.style.display = "block";
};

console.log(navMenu);
console.log(backModal);

const closeMenu = () => {
  navMenu.style.display = "none";
  backModal.style.display = "none";
};

menuIcon.addEventListener("click", showMenu);

menuClose.addEventListener("click", closeMenu);

backModal.addEventListener("click", closeMenu);
