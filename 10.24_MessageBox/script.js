const header = document.querySelector(".card--header");
const card = document.querySelector(".card");
const fileText = document.querySelector("label > p");
const label = document.querySelector("label");

header.addEventListener("click", function() {
  card.setAttribute("data-closed", card.getAttribute("data-closed") == "true" ? "false" : "true");
})

label.addEventListener("change", () => {
  let inputFile = document.querySelector("input[type=file]").files[0];

  fileText.innerHTML = inputFile.name;
})