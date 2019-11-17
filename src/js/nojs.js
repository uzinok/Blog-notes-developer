function noJs() {
  let arrNoJs = document.querySelectorAll(".nojs");

  for (let i = 0; i < arrNoJs.length; i++) {
    arrNoJs[i].classList.remove("nojs");
  }
}