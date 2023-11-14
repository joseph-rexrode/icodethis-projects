const pointsBg = document.querySelector(".points__bg");

const totalPointsPossible = 30;
const currentPoints = 10;
const pointProgress = (currentPoints / totalPointsPossible) * 360;


progressMovement()

function progressMovement() {
  let currentDegree = 0;
  const delayMs = 10;
  
  for (let i = currentDegree; i < pointProgress; i++) {
    setTimeout(() => {
      pointsBg.style.background = "conic-gradient(var(--accent-main) " + i + "deg, var(--bg) " + i + "deg)";
    }, delayMs * i)
  }
}