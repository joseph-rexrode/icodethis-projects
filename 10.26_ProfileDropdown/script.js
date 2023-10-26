const navItems = document.querySelectorAll(".nav--item");
const profileButton = document.getElementById("profile");
const notificationButton = document.getElementById("notifications");
const profileCard = document.querySelector(".card--profile");
const notificationCard = document.querySelector(".card--notifications");

navItems.forEach(item => {
  item.addEventListener("click", function() {
    removeCurrentActive(item);
    item.classList.toggle("active");
    let card = document.querySelector(".card--" + item.id);
    setTimeout(() => {
      if (item.classList.contains("active")) {
        card.style.scale = "1";
      }
      else {
        card.style.scale = "0";
      }
    }, 300);
  })
})

function removeCurrentActive(item) {
  navItems.forEach(i => {
    if (i != item) {
      i.classList.remove("active");
      let card = document.querySelector(".card--" + i.id);
      card.style.scale = "0";
    }
  })
}