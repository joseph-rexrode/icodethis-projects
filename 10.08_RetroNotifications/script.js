const actionButtons = document.querySelectorAll(".actions > button");
const cards = document.querySelectorAll(".card");
const cardIndicator = document.querySelector(".card--indicator");
const amounts = document.querySelectorAll(".amount");
const count = document.querySelector(".notification--count");


renderTotal();

actionButtons.forEach(button => {
  button.addEventListener("click", function() {
    let currentActive = document.querySelector(".actions > button[data-active = 'true']");

    currentActive.setAttribute("data-active", "false");
    button.setAttribute("data-active", "true");

    let cardName = button.className;

    cardIndicator.setAttribute("data-indicate", cardName);

    cards.forEach(card => {
      if (card.classList.contains("card--" + cardName)) {
        if (card.classList.contains("hidden")) {
          card.classList.remove("hidden");
        }
      }
      else {
        if (!card.classList.contains("hidden")) {
          card.classList.add("hidden");
        }
      }
    })

  })
});

function renderTotal() {
  let total = 0;
  
  amounts.forEach(amount => {
    total += parseInt(amount.innerHTML);
  });
  
  count.innerHTML = total;
}
