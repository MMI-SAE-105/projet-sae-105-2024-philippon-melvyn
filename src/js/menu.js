document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const menuClose = document.querySelector(".menu-close");
    const menu = document.getElementById("menu");

    menuToggle.addEventListener("click", () => {
        menu.setAttribute("aria-expanded", "true");
    });


    menuClose.addEventListener("click", () => {
        menu.setAttribute("aria-expanded", "false");
    });


    document.addEventListener("click", (event) => {
        if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
            menu.setAttribute("aria-expanded", "false");
        }
    });
});