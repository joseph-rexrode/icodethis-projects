const mode = document.querySelector(".mode");
const differentModes = document.querySelectorAll(".mode > svg");
const root = document.querySelector(":root");
const toggler = document.querySelector(".cardToggler");
const card = document.querySelector(".card");
const followButton = document.querySelector(".follow");

let darkBg = "#10172F", lightBg = "#D4DBEE", darkMain = "#16213F",
    lightMain = "#F7F8F8", darkText = "#F7F8F8",
    lightText = "#10172F";


mode.addEventListener("click", function () {
    differentModes.forEach(m => {
        if (m.classList.contains("hidden")) {
            m.classList.remove("hidden");
        }
        else {
            m.classList.add("hidden");
        }
    })

    toggleMode();
})

toggler.addEventListener("mouseover", function () {
    card.style.scale = "1";
})

toggler.addEventListener("mouseout", function () {
    if (!card.classList.contains("active")) {
        card.style.scale = "0";
    }
})

toggler.addEventListener("click", function () {
    card.classList.toggle("active");
})

followButton.addEventListener("click", function () {
    followButton.innerHTML = (followButton.innerHTML != "Following") ? "Following" : "Follow";
})

function toggleMode() {
    
    root.style.setProperty("--bg-col", (getComputedStyle(root).getPropertyValue("--bg-col") != lightBg) ? lightBg : darkBg);

    root.style.setProperty("--main", (getComputedStyle(root).getPropertyValue("--main") != lightMain) ? lightMain : darkMain);

    root.style.setProperty("--text-main", (getComputedStyle(root).getPropertyValue("--text-main") != lightText) ? lightText : darkText);
    
}