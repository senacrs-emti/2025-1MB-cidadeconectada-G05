const sidebar = document.getElementById("sidebar");
const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");

openMenu.addEventListener("click", () => {
  sidebar.style.left = "0";
});

closeMenu.addEventListener("click", () => {
  sidebar.style.left = "-260px";
});
