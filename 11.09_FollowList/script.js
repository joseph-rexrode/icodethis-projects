const USERS = [
  {
    name: "Michael K. Padilla",
    occupation: "UX Designer",
    status: "busy",
    pic: "https://source.unsplash.com/random/?face+1"
  },
  {
    name: "Denice Havens",
    occupation: "UI Designer",
    status: "available",
    pic: "https://source.unsplash.com/random/?face+2"
  },
  {
    name: "Douglas Davis",
    occupation: "Web Developer",
    status: "away",
    pic: "https://source.unsplash.com/random/?face+3"
  }
];

const card = document.querySelector(".card");

renderUsers();


function renderUsers() {
  let delay = 1;
  USERS.forEach(user => {
    let div = document.createElement("div");
    div.classList.add("card__user");
    div.innerHTML = `
      <div class="user__pfp" style="background: center / cover no-repeat url(` + user.pic + `)">
        <div class="status" style="background-color: var(--` + user.status + `)"></div>
        <div class="status__message">` + user.status + `</div>
      </div>
      <div class="user__info">
        <h4>` + user.name + `</h4>
        <p class="occupation">` + user.occupation + `</p>
        <div class="user__info-actions">
          <button class="action message">
            Message
          </button>
          <button class="action follow">+ Follow</button>
        </div>
      </div>
    `;

    card.appendChild(div);
  })
}