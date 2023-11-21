const cards = document.querySelectorAll(".card");
const actionButtons = document.querySelectorAll(".card__action");


cards.forEach(card => {
  card.addEventListener("click", () => {
    if (card.classList.contains("card__active")) {
      card.classList.remove("card__active");
    }
    else {
      removeCurrentActive();
      card.classList.add("card__active");
    }
  })
})

actionButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    if (btn.innerHTML == "Connect") {
      btn.innerHTML = "Connected!";
    }
    else {
      btn.innerHTML = "Connect";
    }
  })
})

function removeCurrentActive() {
  cards.forEach(card => {
    card.classList.remove("card__active");
  })
}