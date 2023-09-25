var pageNumberContainers = document.querySelectorAll(".nav--pages");


setPageNumbers();

var containerButtons = []

setContainerButtons();

var allButtons = document.querySelectorAll(".btn--number");

allButtons.forEach((button) => {
    button.addEventListener("click", function() {
        let buttonNumber = button.innerHTML;

        switchActiveButton(button.parentElement.id - 1, buttonNumber);
    })
})

function switchActiveButton(containerIndex, buttonNumber) {
    clearActiveButton(containerIndex);

    containerButtons[containerIndex][buttonNumber - 1].classList.add("btn--active");
}

function clearActiveButton(i) {
    for (var j = 0; j < containerButtons[i].length; j++) {
        containerButtons[i][j].classList.remove("btn--active");
    }
}

function setContainerButtons() {

    let count = 1;
    pageNumberContainers.forEach((numberSet) => {
        let setButtons = numberSet.childNodes;

        containerButtons.push([]);

        for (var i = 1; i < setButtons.length; i++) {
            containerButtons[containerButtons.length - 1].push(setButtons[i]);
        }
    })
}

function setPageNumbers() {
    pageNumberContainers.forEach((numberSet) => {
        let numberPages = Math.round((Math.random() * 8) + 3);

        for (var i = 0; i < numberPages; i++) {
            var btn = document.createElement("button");

            if (i == 0) {
                btn.classList.add("btn--active");
            }

            btn.classList.add("btn--number");
            btn.innerHTML = i + 1;

            numberSet.appendChild(btn);
        }
    })

}


