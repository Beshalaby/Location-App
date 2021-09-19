let sideBtn = document.querySelector("#sidebarButton");
let sidebar = document.querySelector(".sidebar");

sideBtn.onclick = function() {
  console.log("hi");
  sidebar.classList.toggle("active");
}

