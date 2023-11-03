const selectBtns = document.querySelectorAll(".action");
const cards = document.querySelectorAll(".card");

selectBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    let cardBeingSelectedName = btn.id.toString().substring(4);
    let cardBeingSelected = document.getElementById(cardBeingSelectedName);
    
    if (cardBeingSelected.classList.contains("selected")) {
      cardBeingSelected.classList.remove("selected");
      btn.innerHTML = "Select";
      btn.style.outline = "none";
    }
    else {
      removeCurrentSelected();
      cardBeingSelected.classList.add("selected");
      btn.innerHTML = "Selected";
      btn.style.outline = "2px solid var(--card-accent)"
    }
  })
})

function removeCurrentSelected() {
  cards.forEach(card => {
    if (card.classList.contains("selected")) {
      card.classList.remove("selected");
      let btn = card.querySelector(".action");
      btn.innerHTML = "Select";
      btn.style.outline = "none";
    }
  })
}