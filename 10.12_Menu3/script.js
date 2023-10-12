const navItems = document.querySelectorAll(".nav--item");
const cards = document.querySelectorAll(".card");

monitorNavItems();

function monitorNavItems() {
  navItems.forEach(navItem => {
    navItem.addEventListener("click", function() {
      let currentIcon = navItem.querySelector("svg");
      let currentCategory = navItem.id;
      let currentActiveCard = document.querySelector(".card--active");
      let cardToBeSelected = document.querySelector(".card--" + currentCategory);
      
      if (!currentActiveCard) {
        currentIcon.classList.add("nav--active");
        cardToBeSelected.classList.add("card--active")
        navItem.classList.add("nav--item-active");
      }

      else {
        currentActiveCard.classList.remove("card--active");
        setTimeout(() => {
          if (!currentIcon.classList.contains("nav--active")) {
            removeActiveNavIcons();
            currentIcon.classList.add("nav--active");
            navItem.classList.add("nav--item-active");
            cardToBeSelected.classList.add("card--active");
          }
      
          else {
            currentIcon.classList.remove("nav--active");
            navItem.classList.remove("nav--item-active");
          }
        }, 400);
      }
    })
  })
}

function removeActiveNavIcons() {
  navItems.forEach(navItem => {
    navItem.querySelector("svg").classList.remove("nav--active");
    navItem.classList.remove("nav--item-active");
  })
}