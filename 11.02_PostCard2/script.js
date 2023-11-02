const likeButtonOption = document.querySelector(".option:has(.like)");
const likesNumber = document.querySelector(".likes span")
const likeButton = document.querySelector(".like");

likeButtonOption.addEventListener("click", () => {
  let currentNum = parseInt(likesNumber.innerHTML);

  if (likeButton.getAttribute("data-liked") == "true") {
    currentNum--;
    likeButton.setAttribute("data-liked", "false");
  }
  else {
    currentNum++;
    likeButton.setAttribute("data-liked", "true");
  }
  
  likesNumber.innerHTML = currentNum;
})