function cat() {
    if (document.querySelector(".cat")) {
        window.onmousemove = function (event) {
            var eyeball = document.getElementsByClassName("eyeball");
            x = event.pageX;
            y = event.pageY;
            for (var n = 0; n < 2; n++) {
              getCoords(eyeball[n], x, y)
            }

            function getCoords(eyeball, x, y) {

              var box = eyeball.getBoundingClientRect();
              var y_eyeball = box.top + pageYOffset,
                  x_eyeball = box.left + pageXOffset;
              x = (x - x_eyeball) / 50;
              y = (y - y_eyeball) / 50;
            //   if (x >= 1) x = 0.9;
            //   if (y >= 1) y = 0.9;
            //   if (x <= -1) x = -0.9;
            //   if (y <= -1) y = -0.9;
              var translate = "translate(" + x + "px," + y + "px)";
              eyeball.style.transform = translate;
            };

          }
    }
}

