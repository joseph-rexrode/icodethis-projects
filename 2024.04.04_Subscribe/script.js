const sendButton = document.querySelector(".sendEmail");
const emailInputSection = document.getElementById("email");

emailInputSection.addEventListener("input", () => checkEmail());


sendButton.addEventListener("click", function() {
  if (!sendButton.disabled) {
    alert("Thank you for your submission :D");
  }
})

function checkEmail() {

  let currentEmailInput = String(emailInputSection.value);
  let commercialAtCount = 0;

  for (letter in currentEmailInput) {
    if (currentEmailInput[letter] == '@') {
      commercialAtCount++;
    }
  }

  if (commercialAtCount == 1) {
    sendButton.disabled = false;
    sendButton.style.cursor = "pointer";
  }

  else {
    sendButton.disabled = true;
    sendButton.style.cursor = "not-allowed";
  }
}