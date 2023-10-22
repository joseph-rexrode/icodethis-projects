const card = document.querySelector(".card");
const closeButton = document.querySelector(".close");
const openCardElements = document.querySelectorAll(".card--open > *");
const closeCardElements = document.querySelectorAll(".card--closed > *");

card.addEventListener("click", function() {
  if (card.getAttribute("data-closed") == "true") {
    closeCardElements.forEach(j => {
      j.style.opacity = "0";
    })
    setTimeout(() => {
      card.setAttribute("data-closed", "false");
    }, 500);
    openCardElements.forEach(i => {
      i.style.opacity = "1";
    })
  }
});

closeButton.addEventListener("click", function(e) {
  e.stopPropagation();
  openCardElements.forEach(i => {
    i.style.opacity = "0";
  })
  setTimeout(() => {
    card.setAttribute("data-closed", "true");
  }, 500);
  closeCardElements.forEach(j => {
    j.style.opacity = "1";
  })
})