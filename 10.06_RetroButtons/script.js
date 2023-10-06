const actionButtons = document.querySelectorAll(".action");

actionButtons.forEach(b => {
  b.addEventListener("click", function() {
    let cardBg = b.parentElement.querySelector(".card--bg");
    cardBg.classList.add("sliding-in-out");

    setTimeout(() => {
      cardBg.parentElement.classList.add("animated");
    }, 500);

    setTimeout(() => {
      cardBg.classList.remove("sliding-in-out");
      cardBg.parentElement.classList.remove("animated")
    }, 2300);
  })
})