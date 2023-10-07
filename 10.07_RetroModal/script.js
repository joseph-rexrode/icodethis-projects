// selectors

const leavePageButton = document.querySelector(".leavePage");
const continueButton = document.querySelector(".action--ok");
const cancelButton = document.querySelector(".action--cancel");
const closeButton = document.querySelector(".close");
const samplePage = document.querySelector(".card--samplePage");
const card = document.querySelector(".card");

// event listeners

cancelButton.addEventListener("click", function() {
  samplePage.style.top = "0";
  samplePage.style.opacity = "1";
})

closeButton.addEventListener("click", function() {
  samplePage.style.top = "0";
  samplePage.style.opacity = "1";
})

leavePageButton.addEventListener("click", function() {
  samplePage.style.top = "-100%";
  samplePage.style.opacity = "0";
})

continueButton.addEventListener("click", function() {
  card.classList.toggle("invisible");
  setTimeout(() => {
    card.classList.toggle("invisible");
  }, 2000)
})
