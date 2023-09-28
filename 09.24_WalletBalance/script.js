const sectionButtons = document.querySelectorAll(".btn--section");
var cardSummaryTop = document.querySelector(".card--summary-top");

const navButtons = document.querySelectorAll(".btn--nav");
const navActiveBackground = document.querySelector(".btn--active-bg");
const pendingItems = document.querySelector(".summary--pendingItems");
const completedItems = document.querySelector(".summary--completedItems");

navButtons.forEach((navButton) => {
    navButton.addEventListener("click", function () {
        let navSection = navButton.id;
        removeActiveNav();
        navButton.classList.add("btn--navActive");
        navActiveBackground.id = "active--" + navSection;
    })
})

sectionButtons.forEach((sectionButton) => {
    sectionButton.addEventListener("click", function () {
        if (!sectionButton.classList.contains("btn--active")) {
            removeActiveSection();
            sectionButton.classList.add("btn--active");
            cardSummaryTop.classList.toggle("xShift");

            pendingItems.classList.toggle("hidden");
            completedItems.classList.toggle("hidden");
        }
    });
})

function removeActiveSection() {
    sectionButtons.forEach((b) => {
        b.classList.remove("btn--active");
    })
}

function removeActiveNav() {
    navButtons.forEach((b) => {
        b.classList.remove("btn--navActive");
    })
}