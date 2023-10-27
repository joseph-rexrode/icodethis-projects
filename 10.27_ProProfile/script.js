const followButton = document.getElementById("follow");

followButton.addEventListener("click", () => {
  followButton.setAttribute("data-following", followButton.getAttribute("data-following") == "true" ? "false" : "true");
  followButton.innerHTML = followButton.getAttribute("data-following") == "true" ? "Following" : "Follow +"
})