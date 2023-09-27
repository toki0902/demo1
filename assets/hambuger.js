const $header = document.querySelector("header");
const $nav = $header.querySelector(".header__nav");
const $hambuger = $header.querySelector(".hambuger");
const $mask = $header.querySelector(".mask");

$hambuger.addEventListener("click", () => {
  $header.classList.toggle("open");
});
