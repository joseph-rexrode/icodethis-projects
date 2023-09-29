const homeButton = document.querySelector(".btn--home");
const homeScreen = document.querySelector(".card--main-home");
const trackerScreen = document.querySelector(".card--main-tracker");
const goButton = document.querySelector(".go");

homeButton.addEventListener("click", function () {
    if (homeScreen.classList.contains("hidden")) {
        homeScreen.classList.remove("hidden");
        trackerScreen.classList.add("hidden");
        setTimeout(() => { goButton.style.transform = "translateY(-230px)";}, 500)
    }
})

goButton.addEventListener("click", function () {
    if (trackerScreen.classList.contains("hidden")) {
        trackerScreen.classList.remove("hidden");
        goButton.style.transform = "translateY(0)";
        setTimeout(() => { homeScreen.classList.add("hidden");}, 500);
    }
})