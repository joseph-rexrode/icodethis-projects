const ingredientList = document.querySelectorAll("input[name='ingredient']");
const numIngredients = ingredientList.length;
const percentPerIngredient = 100 / numIngredients;
let currentProgress = 0;
let currentProgressText = document.getElementById("currentProgress");

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
  });
})


function increaseProgress() {
  currentProgress += percentPerIngredient;
}

function decreaseProgress() {
  currentProgress -= percentPerIngredient;
}