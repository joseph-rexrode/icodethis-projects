const closeButtons = document.querySelectorAll(".close");

closeButtons.forEach(c => {
  c.addEventListener("click", function() {
    c.style.opacity = "0";
    c.previousElementSibling.innerHTML = "";
    c.parentElement.style.width = "80px";

    setTimeout(() => {
      sendOut((c.parentElement.classList.contains("notSent")) ? -1 : 1, c.parentElement);
    }, 700);

    setTimeout(() =>{
      sendIn(c.parentElement);
    }, 3000)
  })
})

function sendOut(i, card) {
  card.style.transform = "translateY(" + (i * 100) + "px)";
  card.style.opacity = "0";

  setTimeout(() => {
    card.style.transform = "translateY(0) translateX(-100px)";
  }, 1500);
}

function sendIn(card) {
  card.style.transform = "translateX(0)";
  card.style.opacity = "1";
  
  setTimeout(() => {
    card.style.width = "390px";
    card.querySelector(".close").style.opacity = "1";
  }, 1000);

  setTimeout(() => {
    let msg = card.querySelector(".message");
    msg.innerHTML = (card.classList.contains("notSent")) ? 
    "Your message could not be sent" :
    "Your message has been sent";

  }, 1450);
}