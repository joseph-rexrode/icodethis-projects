const recipeCard = document.querySelector(".card--card");
const actionButton = document.querySelector(".action");
const recipe = document.querySelector(".card--card-recipe");
const stars = document.querySelectorAll(".star");
const rating = document.querySelector(".card--card-rating");

actionButton.addEventListener("click", function () {
    renderStars();
    recipeCard.classList.toggle("full");
    actionButton.innerHTML = (recipeCard.classList.contains("full")) ? "Read Less" : "Read More";
    recipe.classList.toggle("hidden");
    rating.classList.toggle("hidden");
});

renderStars();

function renderStars() {
    let count = 1;

    stars.forEach((star) => {
        let time = count * 300

        setTimeout(() => {
            star.classList.toggle("star--visible")
        }, time);

        count++;
    });
}
