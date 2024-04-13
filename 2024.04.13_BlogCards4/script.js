const CARDS = [
  {
    banner: "https://source.unsplash.com/random/?workplace?1",
    title: "How To Build Trust At Work",
    authorPic: "https://source.unsplash.com/random/?woman?1",
    author: "Nina Ford",
    date: "8 Apr"
  },
  {
    banner: "https://source.unsplash.com/random/?workplace?2",
    title: "How Do You Get Up And Go Forward",
    authorPic: "https://source.unsplash.com/random/?woman?2",
    author: "Lura Reeves",
    date: "10 May"
  },
  {
    banner: "https://source.unsplash.com/random/?landscape",
    title: "Accomplish Great Things In Your Life",
    authorPic: "https://source.unsplash.com/random/?woman?3",
    author: "Ola Mann",
    date: "16 Feb"
  }
];


renderCards();

function renderCards() {
  let body = document.querySelector("body");

  CARDS.forEach(card => {
    let div = document.createElement("div");
    div.className = "card";
    div.innerHTML = 
    `<div class="card--banner" style="background: center / cover no-repeat url('` + card.banner + `')"></div>
      <div class="card--main">
        <h2>` + card.title + `</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum pariatur cum cumque hic quos magnam. Fugiat, est. Distinctio id qui tenetur iure voluptatibus? Voluptatem dicta maxime nostrum, corporis ex fugiat?</p>
        <div class="card--main-footer">
          <div class="author">
            <div class="pfp" style="background: center / cover no-repeat url('` + card.authorPic + `')"></div>
            <div class="author--info">
              <h5>` + card.author + `</h5>
              <p class="muted">Manager</p>
            </div>
          </div>
          <p class="muted">` + card.date + `</p>
        </div>
      </div>`;

      body.appendChild(div);
  })
}