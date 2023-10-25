const resetButton = document.querySelector(".reset");
const firstCard = document.querySelector(".onboarding--card:first-of-type");
const welcomeSection = document.querySelector(".welcome");
const cardSection = document.querySelector(".onboarding");
const nextButtons = document.querySelectorAll(".next");
const getStarted = document.querySelector(".getStarted");
const skipButtons = document.querySelectorAll(".skip");

resetButton.addEventListener("click", function() {
  welcomeSection.style.opacity = "0";
  welcomeSection.style.zIndex = "0";
  cardSection.style.zIndex = "1";
  firstCard.classList.remove("inactive");
})

nextButtons.forEach(btn => {
  btn.addEventListener("click", function() {
    let card = btn.parentElement.parentElement;
    card.classList.add("slideLeft");

    card.classList.add("inactive");
    setTimeout(() => {
      card.nextElementSibling.classList.remove("inactive");
      card.classList.remove("slideLeft");
    }, 500);

  })
})

getStarted.addEventListener("click", function() {
  let card = getStarted.parentElement.parentElement;

  card.classList.add("slideLeft");
  card.classList.add("inactive");
  welcomeSection.style.zIndex = "1";
  cardSection.style.zIndex = "0";
  setTimeout(() => {
    welcomeSection.style.opacity = "1";
    card.classList.remove("slideLeft");
  }, 500);
})

skipButtons.forEach(btn => {
  btn.addEventListener("click", function() {
    let card = btn.parentElement.parentElement;

    card.classList.add("slideLeft");
    card.classList.add("inactive");
    welcomeSection.style.zIndex = "1";
    cardSection.style.zIndex = "0";
    setTimeout(() => {
      welcomeSection.style.opacity = "1";
      card.classList.remove("slideLeft");
    }, 500);
  })
})