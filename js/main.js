const button = document.querySelector(".nav__button");
const menu = document.querySelector(".nav__menu");

button.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    button.setAttribute("aria-expanded", isOpen);
});
