const loginScreen = document.querySelector(".screen--login");
const loginButton = document.querySelector(".login");
const signupButton = document.querySelector(".signup");
const exitButton = document.querySelector(".exit");

loginButton.addEventListener("click", goToHomePage);
signupButton.addEventListener("click", goToHomePage);
exitButton.addEventListener("click", backToLogin);


function goToHomePage() {
  loginScreen.classList.toggle("active");
}

function backToLogin() {
  loginScreen.classList.toggle("active");
}