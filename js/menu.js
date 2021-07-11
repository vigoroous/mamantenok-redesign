let menu = document.querySelector(".menu");
let burger = document.querySelector(".menu__burger");

let submenu_link = document.querySelector(".menu__nav-item.submenu > .menu__nav-link");
let submenu_list = submenu_link.closest(".menu__nav-item.submenu").querySelector(".menu__submenu-list")

let menu_opened = false;
let submenu_opened = false;

burger.onclick = function (event) {
    if (!menu_opened) {
        burger.classList.add("menu__burger_opened");
        menu.classList.remove("menu_closed");
        // menu.classList.add("menu_opened");
        menu_opened = true;
    }
    else {
        burger.classList.remove("menu__burger_opened");
        menu.classList.add("menu_closed");
        // menu.classList.remove("menu_opened");
        menu_opened = false;
    }
}