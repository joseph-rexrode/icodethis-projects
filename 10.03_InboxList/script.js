const messages = document.querySelectorAll(".message");
let numMessages = messages.length;
const numElements = document.querySelectorAll(".num");
const readIcons = document.querySelectorAll(".read--icon");

updateReadMessages();

messages.forEach(message => {
  message.addEventListener("click", function() {
    removeCurrentActive();
    if (!checkIfRead(message)) {
      message.querySelector(".read--icon").setAttribute("data-read", true);
    }
    updateReadMessages();
    message.classList.add("activeMessage");
  })
})

readIcons.forEach(readIcon => {
  readIcon.addEventListener("click", function(e) {
    e.stopPropagation();
    readIcon.setAttribute("data-read", 
      (readIcon.getAttribute("data-read") != "true") ? 
      "true" : "false");
    updateReadMessages();
  })
})

function removeCurrentActive() {
  messages.forEach(m => {
    m.classList.remove("activeMessage");
  })
}

function updateReadMessages() {
  let count = 0;
  readIcons.forEach(r => {
    if (r.getAttribute("data-read") == "false") {
      count++;
    } 
  })

  numElements.forEach(n => {
    n.innerHTML = count;
  })
}

function checkIfRead(m) {
  let readIcon = m.querySelector(".read--icon");

  return (readIcon.getAttribute("data-read") == "true" ? true: false);
}