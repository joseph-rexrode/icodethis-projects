const loginButton = document.querySelector(".submit");
const loginPage = document.querySelector(".card__login");
const mainPage = document.querySelector(".card__main");
const signOutButton = document.querySelector(".signout");
const toggleBtn = document.querySelector(".toggle");


loginButton.addEventListener("click", () => {
  loginPage.classList.toggle("hidden");
  mainPage.classList.toggle("hidden");
})

signOutButton.addEventListener("click", () => {
  loginPage.classList.toggle("hidden");
  mainPage.classList.toggle("hidden");
})

toggleBtn.addEventListener("click", () => {
  mainPage.setAttribute("data-status", 
    mainPage.getAttribute("data-status") == "on" ?
      "off" : "on"
  );
})