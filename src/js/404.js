function cat() {
  if (document.querySelector(".cat")) {
    let eyeball = document.getElementsByClassName("eyeball"),
      y_eyeball = [],
      x_eyeball = [];

    for (let n = 0; n < 2; n++) {
      let box = eyeball[n].getBoundingClientRect();
      y_eyeball.push(box.top + pageYOffset),
        x_eyeball.push(box.left + pageXOffset);
    }

    document.addEventListener("mousemove", function () {
      for (let n = 0; n < 2; n++) {
        setCoords(event, eyeball[n], x_eyeball[n], y_eyeball[n])
      }
    })


    function setCoords(event, eyeball, x_eyeball, y_eyeball) {
      x = event.pageX;
      y = event.pageY;
      x = (x - x_eyeball) / 40;
      y = (y - y_eyeball) / 40;
      let translate = "translate(" + x + "px," + y + "px)";
      eyeball.style.transform = translate;
      console.log(x_eyeball + " - " + y_eyeball)
    };
  }
}