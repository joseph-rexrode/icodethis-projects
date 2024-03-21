const moreButton = document.querySelector(".more");
const moreSection = document.querySelector(".moreOptions");

moreButton.addEventListener("click", toggleMoreSection);

function toggleMoreSection() {
  moreSection.classList.toggle("inactive");
}