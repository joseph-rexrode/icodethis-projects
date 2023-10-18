const card = document.querySelector(".card");
const homeButtons = document.querySelectorAll(".home--action");
const cardContents = document.querySelectorAll(".card > div");
const backButtons = document.querySelectorAll(".back");
const addMore = document.querySelector(".addMore");
const teamInputs = document.querySelector(".team--main-inputs");
const orgInviteType = document.querySelectorAll(".invite--type > button");
const currentSelected = document.querySelector(".invite--type-selected");
const emailSection = document.querySelector(".emailSection");
const linkSection = document.querySelector(".linkSection");

renderCurrentPage("home");

homeButtons.forEach(homeButton => {
  homeButton.addEventListener("click", function() {
    let location = homeButton.id.substring(8);
    renderCurrentPage(location);
  })
});

backButtons.forEach(b => {
  b.addEventListener("click", function() {
    renderCurrentPage("home");
  })
})

orgInviteType.forEach(type => {
  type.addEventListener("click", function() {
    if (currentSelected.id != type.className) {
      currentSelected.id = type.className;
      emailSection.classList.toggle("hidden");
      linkSection.classList.toggle("hidden");
    }
  })
})

addMore.addEventListener("click", function() {
  let div = document.createElement("div");
  div.classList.add("team--main-input");
  div.innerHTML = `
    <input type="text" class="email" placeholder="Email address">
    <select name="permission">
      <option value="Read Only">Read Only</option>
      <option value="Read & Edit">Read & Edit</option>
      <option value="Admin">Admin</option>
    </select>
  `;
  teamInputs.appendChild(div);
})

function renderCurrentPage(pageId) {
  card.id = pageId;
  cardContents.forEach(cardContent => {
    if (cardContent.className == "card--" + pageId) {
      cardContent.style.zIndex = "1";
      setTimeout(() => {
        cardContent.style.opacity = "1";
      }, 500)
    }
    else {
      cardContent.style.zIndex = "-1";
      cardContent.style.opacity = "0";
    }
  })
}