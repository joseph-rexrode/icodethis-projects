const toggleButtons = document.querySelectorAll(".btn--toggle");

const getLanguages = async () => {
  const parentElement = document.getElementById("languages");
  const languages = await fetch("languages.txt").then(x => x.text()).then((data) => data.split("\n"));

  if (languages) {
    languages.forEach((language) => {
      const option = document.createElement("option");
      option.value = language;
      option.text = language;

      parentElement.appendChild(option);
    })
  }
}

getLanguages();

toggleButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    let toggleSetting = btn.getAttribute("data-toggle") == "on" ? "off" : "on";
    btn.setAttribute("data-toggle", toggleSetting);
  })
})
