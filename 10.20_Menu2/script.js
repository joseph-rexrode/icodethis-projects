const allMenuButtons = document.querySelectorAll(".menu--item-action");

allMenuButtons.forEach(btn => {
  btn.addEventListener("click", function() {
    if (btn.classList.contains("button--active")) {
      btn.classList.remove("button--active");
    }
    else {
      removeCurrentActive();
      btn.classList.add("button--active");
    }
    if (btn.nextElementSibling != null) {
      btn.nextElementSibling.classList.toggle("hidden");
    }
  })
})


function removeCurrentActive() {
  allMenuButtons.forEach(btn => {
    btn.classList.remove("button--active");
    if (btn.nextElementSibling != null) {
      btn.nextElementSibling.classList.add("hidden");
    }
  })
}