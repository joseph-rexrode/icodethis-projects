const cardHeader = document.querySelector(".card--header");
const followButton = document.querySelector(".follow");
const followers = document.querySelector(".muted > span");

cardHeader.addEventListener("click", function () {
    let currentStatus = cardHeader.getAttribute("data-closed");

    cardHeader.setAttribute("data-closed", (currentStatus == "true") ? "false" : "true");
});

followButton.addEventListener("click", function (e) {
    e.stopPropagation();

    let currentFollowers = parseInt(followers.innerHTML);

    if (followButton.innerHTML != "Following") {
        currentFollowers++;
        followers.innerHTML = currentFollowers;
        followButton.innerHTML = "Following";
    }
    else {
        currentFollowers--;
        followers.innerHTML = currentFollowers;
        followButton.innerHTML = "Follow";
    }
});