const burger_icon = document.querySelector('.menu-burger')
const brg_menu = document.querySelector(".burger-menu");
const menu_body = document.querySelector(".bottom__menu").parentNode;
const menu_body_right = document.querySelector(".bottom__menu--right").parentNode;
const menu_columns = document.querySelectorAll(".bottom__column");

burger_icon.addEventListener('click', function () {
    burger_icon.classList.toggle("active");
    brg_menu.classList.toggle("active");
    document.body.classList.toggle("lock");
})

const mediaQuery = window.matchMedia('(max-width: 770px)');
mediaQuery.addListener(adaptive_burger);
adaptive_burger(mediaQuery);

//window.addEventListener('resize', adaptive);

/*function adaptive() {
    const w = window.outerWidth;
    adaptive_burger(w);
}*/

function adaptive_burger(event) {
    if (event.matches) {
        if (!brg_menu.classList.contains("done")) {
            brg_menu.classList.add('done');
            brg_menu.insertAdjacentElement('beforeend', menu_body);
            brg_menu.insertAdjacentElement('beforeend', menu_body_right);
        }
    }
    else {
        if (brg_menu.classList.contains("done")) {
            brg_menu.classList.remove('done');
            menu_columns[0].insertAdjacentElement("beforeend", menu_body);
            menu_columns[2].insertAdjacentElement("beforeend", menu_body_right);
        }
    }
}
//adaptive();


