const UPDATES = [
  {
    time: "13:10",
    update: "Lorem ipsum dolor sit amet"
  },
  {
    time: "12:30",
    update: "Lorem ipsum dolor sit amet"
  },
  {
    time: "11:17",
    update: "Lorem ipsum dolor sit amet"
  },
  {
    time: "11:05",
    update: "Lorem ipsum dolor sit amet"
  },
  {
    time: "10:10",
    update: "Lorem ipsum dolor sit amet"
  },
  {
    time: "9:45",
    update: "Lorem ipsum dolor sit amet"
  },
  {
    time: "8:19",
    update: "Lorem ipsum dolor sit amet"
  }
];

const actionButton = document.querySelector(".action");
const footer = document.querySelector(".card--footer");
const header = document.querySelector(".card--header");
const main = document.querySelector(".card--main");
const timeline = document.querySelector(".timeline");

actionButton.addEventListener("click", function() {
  footer.style.display = "none";
  header.style.flex = "1.188"
  renderAllUpdates();
})

function renderAllUpdates() {
  UPDATES.forEach(u => {
    let div = document.createElement("div");
    div.classList.add("timeline--item");
    div.innerHTML = `
      <h5>` + u.time + `</h5>
      <p>` + u.update + `</p>
    `;
    timeline.appendChild(div);
  });

  timeline.lastElementChild.classList.add("origin");
}