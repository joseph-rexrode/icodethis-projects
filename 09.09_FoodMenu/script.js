var innerBody = document.querySelector(".accordion--inner");
var onButtons = document.querySelectorAll(".toggle-on");
var offButtons = document.querySelectorAll(".toggle-off");

onButtons.forEach((button) => {
    button.addEventListener("click", function () {
        innerBody.style.height = "500px";

        offButtons.forEach((offButton) => {
            if (offButton.style.display == "flex") {
                offButton.style.display = "none";
                offButton.previousElementSibling.style.display = "flex";
                offButton.parentElement.parentElement.nextElementSibling.style.display = "none";
            }
        })

        button.nextElementSibling.style.display = "flex";
        button.style.display = "none";
        button.parentElement.parentElement.nextElementSibling.style.display = "flex";

    })
});

offButtons.forEach((button) => {
    button.addEventListener("click", function () {
        innerBody.style.height = "250px";
        button.previousElementSibling.style.display = "flex";
        button.style.display = "none";
        button.parentElement.parentElement.nextElementSibling.style.display = "none";
    })
})