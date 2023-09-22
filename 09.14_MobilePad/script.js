const testNumbers = [
    {
        name: "John Doe",
        number: "(123) 456-7890"
    }
];


var result = document.querySelector(".card--header-result");
var sender = document.querySelector(".card--header-sender");

var numbers = document.querySelectorAll(".btn");
var deleteButton = document.querySelector(".delete");


var dynamicResult = "";
var numberOwner = "Unknown";

numbers.forEach((number) => {
    number.addEventListener("click", function () {
        let pressedButton = number.childNodes[1].innerHTML;

        if (dynamicResult.length != 14) {
            dynamicResult += pressedButton;
        }

        if (dynamicResult.length == 3) {
            dynamicResult = "(" + dynamicResult + ") ";
        }

        else if (dynamicResult.length == 9) {
            dynamicResult += "-"
        }
        result.innerHTML = dynamicResult;

        if (dynamicResult.length == 14) {
            testNumbers.forEach((testNumber) => {
                if (testNumber.number == dynamicResult) {
                    numberOwner = testNumber.name;
                }
            })

            sender.innerHTML = numberOwner;
        }

        else {
            sender.innerHTML = "";
        }


    })
})

deleteButton.addEventListener("click", function () {
    if (dynamicResult.length == 6) {
        dynamicResult = dynamicResult.substring(1, 3);
    }
    else {
        dynamicResult = dynamicResult.substring(0, dynamicResult.length - 1);
    }
    result.innerHTML = dynamicResult;
    sender.innerHTML = "";
    numberOwner = "Unknown";
})