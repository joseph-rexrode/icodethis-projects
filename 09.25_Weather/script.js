const fButton = document.getElementById("d-fahrenheit");

const cButton = document.getElementById("d-celsius");
const allNumbers = document.querySelectorAll(".temp-number");

fButton.addEventListener("click", function() {
    if (fButton.classList.contains("inactive")) {
        fButton.classList.remove("inactive");
        cButton.classList.add("inactive");

        unitShift("f");
    }
})

cButton.addEventListener("click", function() {
    if (cButton.classList.contains("inactive")) {
        cButton.classList.remove("inactive");
        fButton.classList.add("inactive");

        unitShift("c");
    }
})

function unitShift(unit) {
    if (unit == "f") {
        allNumbers.forEach((number) => {
            var amount = number.innerHTML;
            amount = ((amount * (9 / 5)) + 32).toFixed(0);
            number.innerHTML = amount;
        })
    }
    else {
        allNumbers.forEach((number) => {
            var amount = number.innerHTML;
            amount = ((amount - 32) * (5/9)).toFixed(0);
            number.innerHTML = amount;
        })
    }
}