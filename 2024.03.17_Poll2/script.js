const polls = document.querySelectorAll(".polls--poll");
const submit = document.querySelector(".submitAnswer");
const skip = document.querySelector(".skip");
const restartButton = document.querySelector(".restart");
const actions = document.querySelector(".actions");

submit.addEventListener("click", nextPoll);
skip.addEventListener("click", nextPoll);
restartButton.addEventListener("click", resetPolls);

function nextPoll() {
  let count = 1
  let secCount = 0
  polls.forEach(poll => {
    if (poll.style.left != "-400px" && count == 1) {
      count++;
      poll.style.left = "-400px";
      poll.style.opacity = "0"
    }
    else if (poll.style.left != "-400px" && count == 2) {
      count++;
      poll.style.zIndex = "1";
      setTimeout(() => {
        poll.style.opacity = "1";
      }, 500)
    }
  })

  polls.forEach(poll => {
    if (poll.style.left == "-400px") {
      secCount++;
    }
  })

  if (secCount == polls.length) {
    setTimeout(() => {
      restartButton.style.opacity = "1";
      restartButton.style.left = "0"
      actions.style.opacity = "0";
      actions.style.zIndex = "-1"
    }, 500)
  }


}

function resetPolls() {
  let count = 0
  
  restartButton.style.opacity = "0";
  restartButton.style.left = "-500px"
  polls.forEach(poll => {
    if (count == 0) {
      poll.style.opacity = "1";
    }
    else {
      poll.style.zIndex = "-3";
    }
    poll.style.left = "0";
    count++
  })
}