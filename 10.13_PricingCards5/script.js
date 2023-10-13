const cards = document.querySelectorAll(".card");

monitorCards();

function monitorCards() {
  cards.forEach(card => {
  
    let inter, inter2;
    let degree = 0;
    
    card.addEventListener("mouseenter", function() {
      clearInterval(inter2);
      inter2 = null;

      if (degree < 0) degree = 0;
      inter = setInterval(fill, 3);
    })
  
    card.addEventListener("mouseleave", function() {
      clearInterval(inter);
      inter = null;
      inter2 = setInterval(empty, 1);
      })

    function fill() {
      degree++;
      card.style.background = "conic-gradient(var(--_accent) " + degree + "deg, var(--muted) " + degree + "deg, var(--_accent) " + (degree + 180) + "deg, var(--muted) " + (degree + 100) + "deg)";
      console.log(degree);
      if (degree >= 365) {
        clearInterval(inter);
      }
    }
    function empty() {
      degree -= 2;
      card.style.background = "conic-gradient(var(--_accent) " + degree + "deg, var(--muted) " + degree + "deg, var(--_accent) " + (degree + 180) + "deg, var(--muted) " + (degree + 100) + "deg)";
      console.log(degree);
      if (degree <= 0) {
        clearInterval(inter2);
        card.style.background = "var(--muted)"
      }
    }
  })
}