const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.querySelector(".button").addEventListener("click", () => {
    if (card.getAttribute("data-selected") == "true") {
      card.setAttribute("data-selected", "false");
      card.querySelector(".action").innerHTML = "Choose plan";
    }

    else {
      removeCurrentSelected();
      card.setAttribute("data-selected", "true");
      card.querySelector(".action").innerHTML = "Selected";
    }
  })
})

function removeCurrentSelected() {
  cards.forEach(card => {
    card.setAttribute("data-selected", "false");
  })
}