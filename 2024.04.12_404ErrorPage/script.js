let circles = document.querySelectorAll(".circle");
let card = document.querySelector(".card");
let circle = document.querySelector(".circle");

const root = getComputedStyle(document.body);

const smallDiameter = root.getPropertyValue("--sm");
const medDiameter = root.getPropertyValue("--med");
const lgDiameter = root.getPropertyValue("--lg");

//moveCircle();

renderRandomPositions()

function renderRandomPositions() {
  circles.forEach(circle => {
    console.log(getComputedStyle(card).getPropertyValue("width"));
    let cardWidth = parseFloat(getComputedStyle(card).getPropertyValue("width"));
    let cardHeight = parseFloat(getComputedStyle(card).getPropertyValue("height"));
    let circleDiameter = parseFloat(getComputedStyle(circle).getPropertyValue("width"));
    let posx = (Math.random() * (cardWidth - circleDiameter)).toFixed();
    let posy = (Math.random() * (cardHeight - circleDiameter)).toFixed();
    console.log("Posx: " + posx + "\nPosy: " + posy);
    circle.style.left = posx + "px";
    circle.style.top = posy + "px";
  })
}

function moveCircle() {

  setInterval(() => {
    circle.left = circle.style.left + 10;
    circle.style.left = circle.style.left + "px";
    console.log(circle.style.left)
  }, 200000);
}