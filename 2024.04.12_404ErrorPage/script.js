let circles = document.querySelectorAll(".circle");
let card = document.querySelector(".card");
let circle = document.querySelector(".circle");

const root = getComputedStyle(document.body);

const smallDiameter = root.getPropertyValue("--sm");
const medDiameter = root.getPropertyValue("--med");
const lgDiameter = root.getPropertyValue("--lg");



renderRandomPositions()

moveCircles();

// gets initial circle positions

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

// moves circles randomly

  /* eight possible directions: 
          (1) up, (2) up-right, (3) up-left,
          (4) left, (5) right,
          (6) down, (7) down-right, (8) down-left 
  */

function moveCircles() {

  circles.forEach(circle => {
    setInterval(() => {
      let currentX = parseFloat(getComputedStyle(circle).getPropertyValue("left"));
      let currentY = parseFloat(getComputedStyle(circle).getPropertyValue("top"));
      let direction = Math.ceil(Math.random() * 8);

      // if direction is anything with up, move up 2px

      if (direction == 1 || direction == 2 || direction == 3) {
        currentY += 2;
      }
      
      // if direction is anything with down, move down 2px
      
      if (direction == 6 || direction == 7 || direction == 8) {
        currentY -= 2;
      }

      // left 

      if (direction == 3 || direction == 4 || direction == 8) {
        currentX -= 2;
      }

      // right

      if (direction == 2 || direction == 5 || direction == 7) {
        currentX += 2;
      }

      circle.style.left = currentX + "px";
      circle.style.top = currentY + "px";

      console.log(direction);
    }, 50)
  })
}