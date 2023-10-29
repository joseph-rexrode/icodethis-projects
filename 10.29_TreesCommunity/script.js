const MEMBERS = [
  {
    name: "Ciara Lee",
    numTrees: 20,
    pfp: "https://source.unsplash.com/random/?face,1"
  },
  {
    name: "Jeffrey Perrine",
    numTrees: 64,
    pfp: "https://source.unsplash.com/random/?face,2"
  },
  {
    name: "Anette Roberts",
    numTrees: 29,
    pfp: "https://source.unsplash.com/random/?face,3"
  },
  {
    name: "Jeremy Brown",
    numTrees: 83,
    pfp: "https://source.unsplash.com/random/?face,4"
  },
];

const membersParent = document.querySelector(".members");
const joinButton = document.querySelector(".action");
const card = document.querySelector(".card");
const nonTreeElements = document.querySelectorAll(".card--top > *:not(.tree)");
const tree = document.querySelector(".tree");

renderCommunityMembers();

joinButton.addEventListener("click", () => {
  // resetting
  if (card.getAttribute("data-joined") == "true") {
    card.style.height = "auto";
    card.setAttribute("data-joined", "false");
    joinButton.innerHTML = "Join Now!";
    nonTreeElements.forEach(nte => {
      nte.style.opacity = 1;
      nte.style.maxHeight = "1000px";
    })
    renderCommunityMembers();

    tree.querySelectorAll(".seed").forEach(seed => {
      seed.remove();
    })
  }
  
  // joining
  else {
    card.setAttribute("data-joined", "true");
    joinButton.innerHTML = "Plant the Seed";
    nonTreeElements.forEach(nte => {
      nte.style.opacity = 0;
      nte.style.maxHeight = 0;
    })
    setTimeout(() => {
      card.style.height = "390px";
      membersParent.innerHTML = "";
      renderSeeds();
    }, 500);

  }
})

function renderCommunityMembers() {
  MEMBERS.forEach(member => {
    let div = document.createElement("div");
    div.classList.add("member");
    div.innerHTML = `
      <div class="pfp" style="background: center / cover no-repeat url(` + member.pfp + `)"></div>
      <h5>` + member.name + `</h5>
      <div class="amountOfTrees">` + member.numTrees + ` Trees</div>
    `;

    membersParent.appendChild(div);
  })
}

function renderSeeds() {
  let anDelay = 0;
  MEMBERS.forEach(member => {
    let div = document.createElement("div");
    div.classList.add("seed");
    div.innerHTML = `
      <div class="seed--pfp" style="background: center / cover no-repeat url(` + member.pfp + `)"></div>
    `;
    tree.appendChild(div);
    div.style.animationDelay = anDelay + "s";
    div.querySelector("div").style.animationDelay = anDelay + "s";
    anDelay++;
  })

  let userDiv = document.createElement("div");
  userDiv.classList.add("seed");
  userDiv.innerHTML = `<p>YOU</p>`;
  userDiv.style.animationDelay = anDelay + "s";
  userDiv.querySelector("p").style.animationDelay = anDelay + "s";
  tree.appendChild(userDiv);

  membersParent.style.opacity = 1;
  membersParent.style.maxHeight = "1000px";
}