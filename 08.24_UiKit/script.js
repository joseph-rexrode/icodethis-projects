var navitems = document.querySelector(".navbar--navlist");
var hamburgerButton = document.querySelector(".hamburger");


hamburgerButton.addEventListener("click", toggle);

function toggle() {
    navitems.classList.toggle("none")
}


window.addEventListener("resize", function () {
    if (window.innerWidth >= 481 && navitems.classList.contains("none")) {
        navitems.classList.toggle("none");
    }
})