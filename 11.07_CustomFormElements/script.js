const bgElements = document.querySelectorAll(".bgElement");
const ratingItems = document.querySelectorAll(".ratingItem");
const starItems = document.querySelectorAll(".star");

setRandomPositions()
// going to work on making the background elements move randomly later

ratingItems.forEach(item => {
  item.addEventListener("click", () => {
    removeCurrentNumberRating();
    item.classList.add("selected");
  })
})

starItems.forEach(item => {
  item.addEventListener("click", () => {
    removeCurrentStarRatings();
    item.classList.add("selected");
    let curr = item;
    while (curr.previousElementSibling != null) {
      curr = curr.previousElementSibling;
      curr.classList.add("selected");
    }
  })
})


function setRandomPositions() {

  let width = window.innerWidth;
  let height = window.innerHeight;

  console.log(window.innerWidth + ": width");
  console.log(window.innerHeight + ": height");

  bgElements.forEach(el => {
    let cs = getComputedStyle(el);

    let elementWidth = parseInt(cs.getPropertyValue("--elemWidth").replace("px", ""));

    let leftVal = Math.floor(Math.random() * width);
    let leftComputedValue = leftVal - elementWidth <= 0 ? 0 : leftVal - elementWidth;
    let topVal = Math.floor(Math.random() * height);
    let topComputedValue = topVal - elementWidth <= 0 ? 0: topVal - elementWidth;

    el.style.left = leftComputedValue + "px";
    el.style.top = topComputedValue + "px";
  })
}

function removeCurrentNumberRating() {
  ratingItems.forEach(item => {
    item.classList.remove("selected");
  })
}

function removeCurrentStarRatings() {
  starItems.forEach(item => {
    item.classList.remove("selected");
  })
}