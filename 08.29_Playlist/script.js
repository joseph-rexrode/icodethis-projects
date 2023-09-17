var arrow = document.querySelector("svg");
var music = document.querySelector(".card--content");
var subheader = document.querySelector(".card--header-subheader");

arrow.addEventListener("click", function () {
    music.classList.toggle("hide");
    arrow.classList.toggle("upside-down");
    subheader.classList.toggle("no-border-bottom");
})