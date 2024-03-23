const ingredientList = document.querySelectorAll("input[name='ingredient']");
const numIngredients = ingredientList.length;
const percentPerIngredient = 100 / numIngredients;
let currentProgress = 0;
let currentProgressText = document.getElementById("currentProgress");
let progressBar = document.getElementById("ingredientsProgress");

ingredientList.forEach(ingredient => {
  ingredient.addEventListener("click", () => {
    console.log(ingredient.checked);
    if (ingredient.checked) {
      increaseProgress();
    }
    else {
      decreaseProgress();
    }
    currentProgressText.innerHTML = currentProgress + "%"
    progressBar.style.width = currentProgress + "%";
  });
})


function increaseProgress() {
  currentProgress += percentPerIngredient;
}

function decreaseProgress() {
  currentProgress -= percentPerIngredient;
}