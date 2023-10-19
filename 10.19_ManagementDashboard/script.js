const showSidebarButton = document.querySelector(".viewSidebar");
const sidebar = document.querySelector(".sidebar");
const header = document.querySelector(".header");
const taskItems = document.querySelectorAll(".item--item");

showSidebarButton.addEventListener("click", function() {
  if (sidebar.style.transform == "translateX(0px)") {
    sidebar.style.transform = "translateX(-150px)";
    console.log(sidebar.style.transform);
  }
  else {
    sidebar.style.transform = "translateX(0px)";
  }
})

window.addEventListener("resize", function() {
  if (this.window.innerWidth >= 550) {
    sidebar.style.transform = "none";
  }
  else if (sidebar.style.transform = "none") {
    sidebar.style.transform = "translateX(-150px)";
  }
})

taskItems.forEach(item => {
  item.addEventListener("click", function() {
    item.querySelector(".checkbox").classList.toggle("checked");
  })
})