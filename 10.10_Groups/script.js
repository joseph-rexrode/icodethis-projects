const GROUPS = [
  {
    name: "Cuisine",
    members: 36,
    active: true,
    avatar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2380&q=80"
  },
  {
    name: "Art",
    members: 9,
    active: false,
    avatar: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2535&q=80"
  },
  {
    name: "Workout",
    members: 27,
    active: true,
    avatar: "https://images.unsplash.com/photo-1558017487-06bf9f82613a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2270&q=80"
  },
  {
    name: "Gaming",
    members: 105,
    active: true,
    avatar: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"
  },
  {
    name: "Hiking",
    members: 97,
    active: false,
    avatar: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"
  },
  {
    name: "Yoga",
    members: 65,
    active: false,
    avatar: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2202&q=80"
  }
]
const layoutButtons = document.querySelectorAll(".layoutButton");
const groupSection = document.querySelector(".card--main-content");
const layoutButtonsDiv = document.querySelector(".layoutButtons");
const card = document.querySelector(".card");
renderGroups();

if (window.innerWidth < 550) {
  layoutButtonsDiv.style.display = "none"
}

function renderGroups() {
  GROUPS.forEach(group => {
    let groupElement = document.createElement("div");
    groupElement.classList.add("groupElement");
    if (group.active) groupElement.classList.add("activeElement");

    groupElement.innerHTML = `
    <div class="avatar" style="background: center / cover no-repeat url(` + group.avatar + `)"></div>
    <h4>` + group.name + `</h4>
    <p>` + group.members + ` members</p>
    `;

    groupSection.appendChild(groupElement);
  })
}

layoutButtons.forEach(b => {
  b.addEventListener("click", function() {
    if (!b.classList.contains("layoutButton--active")) {
      removeAllActive();
      if (b.classList.contains("l-list")) {
        card.classList.remove("card--group");
      }
      else {
        card.classList.add("card--group");
      }
      b.classList.add("layoutButton--active");
    }
  })
})

function removeAllActive() {
  layoutButtons.forEach(b => {
    b.classList.remove("layoutButton--active");
  })
}

window.addEventListener("resize", function() {
  if (this.window.innerWidth < 550) {
    layoutButtonsDiv.style.display = "none";
  }
  else {
    layoutButtonsDiv.style.display = "flex";
  }
})