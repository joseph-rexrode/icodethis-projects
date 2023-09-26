const selectButtons = document.querySelectorAll(".select");

const cards = document.querySelectorAll(".card > div");


selectButtons.forEach((button) => {
    button.addEventListener("click", function () {
        

        clearSelected();
        
        button.innerHTML = "Selected";

        let toggleColor =
            (button.id == "select-light") ?
                "--accent-one" : ((button.id == "select-startup") ? "--accent-two" : "--accent-three");

        button.parentElement.style.background = "linear-gradient(to top left, var(" + toggleColor + ") 10%, white)";
        button.style.backgroundColor = "white";
    })
})

function clearSelected() {
    cards.forEach((card) => {
        card.style.background = "white";
    })

    selectButtons.forEach((button) => {
        button.innerHTML = "Select plan";

        let bg = (button.id == "select-light") ?
            "--accent-one" : ((button.id == "select-startup") ? "--accent-two" : "--accent-three");

        button.style.backgroundColor = "var(" + bg + ")";
    })
}