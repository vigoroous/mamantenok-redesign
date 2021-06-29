let burger = document.querySelector(".menu__burger");
let opened = false;

console.log(burger);

burger.onclick = function (event) {
    
    if (!opened) {
        burger.classList.add("menu__burger_opened");
        opened = true;
    }
    else {
        burger.classList.remove("menu__burger_opened");
        opened = false;
    }
    //alert("Бургер.");

}