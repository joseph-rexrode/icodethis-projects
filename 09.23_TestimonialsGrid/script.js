const navButtons = document.querySelectorAll(".btn--nav");
const navActiveBackground = document.querySelector(".btn--active-bg");
const cardSections = document.querySelectorAll(".card--section");


navButtons.forEach((navButton) => {
    navButton.addEventListener("click", function() {
        let navSection = navButton.id;
        removeActive();
        navButton.classList.add("btn--active");
        toggleActivePage(navSection);

        navActiveBackground.id = "active-" + navSection;
    })
})

function removeActive() {
    navButtons.forEach((navButton) => {
        navButton.classList.remove("btn--active");
    })

    cardSections.forEach((cardSection) => {
        cardSection.classList.add("hidden")
    })
}

function toggleActivePage(activeId) {
    cardSections.forEach((cardSection) => {
        if (cardSection.classList.contains("card--" + activeId)) {
            cardSection.classList.remove("hidden");
        }
    })
}