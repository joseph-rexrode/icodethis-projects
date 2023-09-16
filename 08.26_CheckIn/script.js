var mode = document.getElementById("mode");
var card = document.querySelector(".card");
var body = document.querySelector("body");
var search = document.querySelector(".card--searchbar");

var locationButton = document.querySelector(".location-toggle");
var statusDesc = document.querySelector(".statusDesc");


mode.addEventListener("click", function () {
    mode.classList.toggle("light-icon");
    mode.classList.toggle("dark-icon");

    card.classList.toggle("light-bg");
    card.classList.toggle("dark-bg");

    body.classList.toggle("font-light");
    body.classList.toggle("font-dark");

    search.classList.toggle("muted-light");
    search.classList.toggle("muted-dark");
});

locationButton.addEventListener("click", function () {
    locationButton.classList.toggle("toggled-on");
    locationButton.classList.toggle("toggled-off");

    statusDesc.classList.toggle("status-off");
    statusDesc.classList.toggle("status-on");
})