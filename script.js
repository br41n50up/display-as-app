function scaleApp() {
  const main = document.getElementById("main");
  const image = document.getElementById("image");

  var widthFactor = window.innerWidth / image.width;
  var heightFactor = window.innerHeight / image.height;

  var factor;

  if (widthFactor <= heightFactor) {
    factor = widthFactor;
  } else if (heightFactor < widthFactor) {
    factor = heightFactor;
  }

  var top = (window.innerHeight - main.clientHeight) / 2
  var left = (window.innerWidth - main.clientWidth) / 2;

  main.style.top = top + "px";
  main.style.left = left + "px";
  main.style.transform = "scale(" + factor + ")";
}
