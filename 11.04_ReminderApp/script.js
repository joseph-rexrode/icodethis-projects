const toggleSidebarBtn = document.getElementById("toggle__sidebar");
const sidebar = document.querySelector(".card__sidebar");
const toggleColorElement = document.getElementById("hamburgerColor");
const shoppingListHeaders = document.querySelectorAll(".shoppingList__section-header");
const shoppingListSections = document.querySelectorAll(".shoppingList__section");
const shoppingListItems = document.querySelectorAll(".shoppingList__section-item");


toggleSidebarBtn.addEventListener("click", () => {

  if (sidebar.getAttribute("data-status") == "open") {
    sidebar.setAttribute("data-status", "closed");
    toggleColorElement.style.stroke = "var(--sidebar-main)";
  }
  else {
    sidebar.setAttribute("data-status", "open");
    toggleColorElement.style.stroke = "var(--card-main)";
  }
})

shoppingListHeaders.forEach(header => {
  header.addEventListener("click", () => {
    let currentSection = header.parentElement;
    if (currentSection.getAttribute("data-status") == "closed") {
      closeAllSections();
      currentSection.setAttribute("data-status", "open");
    }
    else {
      currentSection.setAttribute("data-status", "closed");
    }
  })
})

shoppingListItems.forEach(item => {
  item.addEventListener("click", () => {
    item.classList.toggle("crossedOut");
  })
})

function closeAllSections() {
  shoppingListSections.forEach(section => {
    section.setAttribute("data-status", "closed");
  })
}