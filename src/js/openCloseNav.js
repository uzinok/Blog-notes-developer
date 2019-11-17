function openCloseNav() {
  let button = document.querySelector(".nav-button");

  button.addEventListener("click", function () {
    document.querySelector(".nav").classList.toggle("nav-open");
    document.querySelector(".nav").classList.toggle("nav-close");

    if(document.querySelector(".nav").classList.contains("nav-open")) {
      button.setAttribute("aria-label", "Закрыть меню");
    } else {
      button.setAttribute("aria-label", "Открыть меню");
    }
  })
}