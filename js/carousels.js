const colorBtn = document.getElementById("post-title");
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
let currentColorIndex = 0;

colorBtn.addEventListener("click", () => {
  currentColorIndex = (currentColorIndex + 1) % colors.length;
  document.body.style.backgroundColor = colors[currentColorIndex];
});