const colorBtn = document.getElementById("logo");
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
let currentColorIndex = 0;

colorBtn.addEventListener("click", () => {
  currentColorIndex = (currentColorIndex + 1) % colors.length;
  document.body.style.background = colors[currentColorIndex];
});