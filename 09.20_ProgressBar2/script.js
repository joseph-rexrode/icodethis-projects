const percentageCompleted = 79;

var percentText = document.querySelector(".percentage");
var progressBar = document.querySelector(".progress--current");
var progressCircle = document.querySelector(".circleProgress--border");
var continueButton = document.querySelector(".continue");
let currentPercentage = 0;
let interv = setInterval(setText, 25);

continueButton.addEventListener("click", function () {
    clearInterval(interv);
    currentPercentage = 0;
    interv = setInterval(setText, 25);
})


function setText() {
    currentPercentage++;
    percentText.innerHTML = currentPercentage + "%";
    progressBar.style.width = currentPercentage + "%";
    updateCircle();

    if (currentPercentage == percentageCompleted) {
        clearInterval(interv);
    }
}

function updateCircle() {

    if (currentPercentage >= 50) {
        let degUpdate = currentPercentage * 3.65;
        let newDegree = degUpdate + 270;
        progressCircle.style.background = "linear-gradient(270deg, var(--accent-one) 50%, transparent 50%), linear-gradient(" + newDegree + "deg, var(--background-col) 50%, var(--accent-one) 50%"
    }
    else {
        let degUpdate = currentPercentage * 3.65;
        let newDegree = degUpdate + 270;

        progressCircle.style.background = "linear-gradient(" + newDegree + "deg, var(--background-col) 50%, transparent 50%), linear-gradient(270deg, var(--accent-one) 50%, var(--background-col) 50%)";
    }
}