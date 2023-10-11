const ITEMS = [
  {
    image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80",
    desc: "Redesigning my site increased sales by over 400% in one week",
    date: "Jul 1, 2020"
  },
  {
    image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2274&q=80",
    desc: "Design handoff: What engineers really want to see",
    date: "Jan 9, 2022"
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1661517335128-2bcf290d58f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80",
    desc: "A comprehensive list of human-computer interactions",
    date: "Sept 1, 2022"
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1675884829570-83a41714113b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2369&q=80",
    desc: "Why do people hate redesigns?",
    date: "Dec 12, 2022"
  }
];

const otherContentSection = document.querySelector(".otherContent--content");
const navLogo = document.querySelector(".nav--logo");
const navListIcons = document.querySelectorAll(".nav--item > svg");
const navListWords = document.querySelectorAll(".nav--item > p");

renderItems();
monitorScreen();

function renderItems() {
  ITEMS.forEach(i => {
    let newItem = document.createElement("div");
    newItem.classList.add("otherContent--item");

    newItem.innerHTML = `
      <div class="item--img" style="background: center / cover no-repeat url(` + i.image + `)"></div>
      <p>` + i.desc + `</p>
      <p class="date">` + i.date + `</p>
    `;

    otherContentSection.appendChild(newItem);
  })
}

function monitorScreen() {
  if (window.innerWidth < 680) {
    navLogo.style.display = "none";
    navListWords.forEach(w => {
      w.style.display = "none";
    });
    navListIcons.forEach(i => {
      i.style.display = "block";
    });
  }
  else {
    navListWords.forEach(w => {
      w.style.display = "block";
    })
    navListIcons.forEach(i => {
      i.style.display = "none";
    })
  }

  window.addEventListener("resize", function() {
    if (this.window.innerWidth < 680) {
      navLogo.style.display = "none";
      navListWords.forEach(w => {
        w.style.display = "none";
      });
      navListIcons.forEach(i => {
        i.style.display = "block";
      });
    }
    else {
      navLogo.style.display = "block";
      navListWords.forEach(w => {
        w.style.display = "block";
      })
      navListIcons.forEach(i => {
        i.style.display = "none";
      })
    }
  })
}