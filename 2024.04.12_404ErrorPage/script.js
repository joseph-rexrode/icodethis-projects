let circles = document.querySelectorAll(".circle");
let card = document.querySelector(".card");
let circle = document.querySelector(".circle");

const root = getComputedStyle(document.body);

const smallDiameter = root.getPropertyValue("--sm");
const medDiameter = root.getPropertyValue("--med");
const lgDiameter = root.getPropertyValue("--lg");



//moveCircles();

renderRandomPositions()

function renderRandomPositions() {
  circles.forEach(circle => {
    let cardWidth = parseFloat(getComputedStyle(card).getPropertyValue("width"));
    let cardHeight = parseFloat(getComputedStyle(card).getPropertyValue("height"));
    let circleDiameter = parseFloat(getComputedStyle(circle).getPropertyValue("width"));
    let posx = (Math.random() * (cardWidth - circleDiameter)).toFixed();
    let posy = (Math.random() * (cardHeight - circleDiameter)).toFixed();
    circle.style.left = posx + "px";
    circle.style.top = posy + "px";
  })
}

function moveCircles() {

  circles.forEach(circle => {
    setInterval(() => {
      let currentX = parseFloat(getComputedStyle(circle).getPropertyValue("left"));
      let currentY = parseFloat(getComputedStyle(circle).getPropertyValue("top"));
      currentX += 10;
      circle.style.left = currentX + "px";
    }, 2000)
  })
}