const menuIcon = document.querySelector(".header__icon");
const menuList = document.querySelector(".header .menu");
const menuItem = document.querySelectorAll('.menu__item')
const body = document.querySelector("body")

menuIcon.addEventListener("click", openMenu);
menuItem.forEach(item => item.addEventListener('click', clickLink))


function openMenu() {
  if (this.classList.contains("header__icon_active")) {
    this.classList.remove("header__icon_active");
    menuList.classList.remove("menu_show");
    body.classList.remove("hidden");
  } else {
    this.classList.add("header__icon_active");
    menuList.classList.add("menu_show");
    body.classList.add("hidden");
  }
}

function clickLink () {
    menuIcon.classList.remove("header__icon_active");
    menuList.classList.remove("menu_show");
    body.classList.remove("hidden");
}