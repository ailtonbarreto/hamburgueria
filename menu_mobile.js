window.addEventListener('DOMContentLoaded', () => {

    const links = document.querySelectorAll('.mobile_link');

    const open_mobile = document.getElementById("open_mobile");
    const nav_bar = document.querySelector('.navbar-mobile');
    const close_mobile = document.getElementById("close_mobile");
    const menu_mobile = document.querySelector(".mobile-menu");
    const body = document.querySelector("body");

    open_mobile.addEventListener("click", () => {

        nav_bar.style.display = "flex";
        menu_mobile.style.display = "flex";
        open_mobile.style.visibility = "hidden";
        body.style.overflow = "hidden";


    });

    close_mobile.addEventListener("click", () => {

        // menu_mobile.style.display = "none";
        nav_bar.style.display = "none";
        open_mobile.style.visibility = "visible";
        body.style.overflow = "scroll";


    });

    links.forEach(link => {

        link.addEventListener('click', () => {

            menu_mobile.style.display = "none";
            body.style.overflow = "scroll";
            open_mobile.style.visibility = "visible";

        })

    });

})