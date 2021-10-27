let sideBtn = document.querySelector("#sidebarButton");
let sidebar = document.querySelector(".sidebar");

sideBtn.onclick = function() {
  sidebar.classList.toggle("active");
}

