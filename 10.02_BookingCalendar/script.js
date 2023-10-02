const bookTrainingButtons = document.querySelectorAll(".btn-action");
const closeButton = document.querySelector(".close");
const mainSection = document.querySelector(".card--main");
const buttonsAvailable = closeButton.querySelectorAll("svg");

bookTrainingButtons.forEach(btn => {
    btn.addEventListener("click", function () {
        btn.classList.toggle("booked");
        btn.innerHTML = (btn.innerHTML != "Booked!") ? "Booked!" : "Book a spot";
    })
});

closeButton.addEventListener("click", function () {
    mainSection.classList.toggle("hidden");

    buttonsAvailable.forEach(btn => {
        btn.classList.toggle("inactive");
    })
})