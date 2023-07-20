document.addEventListener("DOMContentLoaded", function () {
  var colorChangeButton = document.getElementById("color-logo");
  var colors = ["#007bff", "#ff9800", "#4caf50", "#e91e63"]; // 定义你想要的不同颜色

  var currentColorIndex = 0;

  colorChangeButton.addEventListener("click", function () {
    document.documentElement.style.setProperty('--bg-color', colors[currentColorIndex]);
    currentColorIndex = (currentColorIndex + 1) % colors.length;
  });
});
