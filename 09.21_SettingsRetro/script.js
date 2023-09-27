var sidebarButtons = document.querySelectorAll(".btn--sidebar");
var mainButtons = document.querySelectorAll(".btn--main");
var card = document.querySelector(".card");
var scrollbarToggler = document.querySelector(".scrollbar > .btn--main-toggle");
var scrollbar = document.querySelector(".scrollbar");
var scrollbarLength = scrollbar.offsetWidth;

let scrollPosition = 0;

sidebarButtons.forEach((sidebarButton) => {
    sidebarButton.addEventListener("click", function () {
        sidebarButton.querySelector(".btn--sidebar-toggle").classList.toggle("btn--sidebar-on");
    });
})

mainButtons.forEach((mainButton) => {
    mainButton.addEventListener("click", function() {
        mainButton.querySelector(".btn--main-toggle").classList.toggle("btn--main-on");

        if (mainButton.classList.contains("btn--bold")) {
            document.querySelector("body").classList.toggle("bold");
        }
    })
})

dragScroller(scrollbarToggler);


function dragScroller(s) {

    var currentPos = 0, posChange = 0, origin = 0;

    s.onmousedown = dragMouse;

    function dragMouse(e) {
        e = e || window.event;
        e.preventDefault();

        currentPos = e.clientX;
        origin = e.clientX;
        document.onmouseup = closeDragScroll;
        document.onmousemove = scrollDrag;
    }

    function scrollDrag(e) {
        e = e || window.event;
        e.preventDefault();

        var change = e.clientX - origin;

        if ((change > 0 && posChange < 0) ||
            (change < 0 && posChange > 0)) {
            posChange = 0;
        }
        posChange += change;

        if (posChange >= 0) {
            scrollPosition = (scrollPosition == 100) ? 100 : scrollPosition + 1;
        }

        else if (posChange < 0) {
            scrollPosition = (scrollPosition == 0) ? 0 : scrollPosition - 1;
        }

        currentPos = e.clientX;
        let brightness = (scrollPosition / 100) + 0.2;
        card.style.filter = "brightness(" + brightness + ")";
        s.style.left = scrollPosition + "%";
        scrollbar.style.background = "linear-gradient(to right, var(--btn-accent), var(--btn-accent)" + scrollPosition + "%, var(--background-col)" + scrollPosition + "%)";
    } 

    function closeDragScroll() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
