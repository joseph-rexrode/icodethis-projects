const ACTORS = [
    {
        id: 1,
        name: "Peter Sohn",
        role: "Forrest Woodbush",
        headshot: "https://static.wikia.nocookie.net/toystory72/images/4/45/Peter_Sohn.jpg/revision/latest?cb=20211110145019)"
    },
    {
        id: 2,
        name: "Jack Bright",
        role: "Spot",
        headshot: "https://flxt.tmsimg.com/assets/886603_v9_ba.jpg"
    },
    {
        id: 3,
        name: "Jack McGraw",
        role: "Young Arlo",
        headshot: "https://pbs.twimg.com/profile_images/692988231105810432/tGP08aM2_400x400.jpg"
    },
    {
        id: 4,
        name: "Frances McDormand",
        role: "Momma Ida",
        headshot: "https://images.mubicdn.net/images/cast_member/2320/cache-683-1478101707/image-w856.jpg?size=800x"
    },
    {
        id: 5,
        name: "Steve Zahn",
        role: "Thunderclap",
        headshot: "https://flxt.tmsimg.com/assets/60451_v9_bf.jpg"
    }
];


// selectors 
const addButton = document.querySelector(".add");
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");
const carousel = document.querySelector(".actors--carousel-main");
const actorRole = document.getElementById("actor--role");
const actorName = document.getElementById("actor--name");
var currentMain = 3;

renderPictures();

const allPictures = carousel.querySelectorAll("img");

addButton.addEventListener("click", function () {
    let txt = addButton.querySelector(".text");

    txt.innerHTML = (txt.innerHTML != "Added!") ?
        "Added!" : "Add to Watchlist";
})

nextButton.addEventListener("click", function () {
    if (currentMain != ACTORS.length) {
        currentMain++;
        updateMain(currentMain);
    }
})

prevButton.addEventListener("click", function () {
    if (currentMain != 1) {
        currentMain--;
        updateMain(currentMain);
    }
})

function renderPictures() {
    let blank = document.createElement("div");
    blank.classList.add("img--blank");
    let blankEnd = document.createElement("div");
    blankEnd.classList.add("img--blank-end");

    carousel.appendChild(blank);

    let firstMain = currentMain;

    ACTORS.forEach((actor) => {
        let actorElement = document.createElement("img");
        actorElement.setAttribute("src", actor.headshot);
        actorElement.setAttribute("alt", actor.name + " headshot");
        actorElement.id = actor.id;

        actor.id == firstMain - 1 ?
            actorElement.classList.add("img-prev") :
            (actor.id == firstMain ?
                actorElement.classList.add("img-main") :
                (actor.id == firstMain + 1) ?
                    actorElement.classList.add("img-next") : null);


        if (actorElement.classList.contains("img-main")) {
            actorRole.innerHTML = actor.role;
            actorName.innerHTML = actor.name;
        }

        carousel.appendChild(actorElement); 
    })

    carousel.appendChild(blankEnd);
};

function updateMain(m) {
    let newMain = document.getElementById(m);
    let newPrev = document.getElementById(m - 1);
    let newNext = document.getElementById(m + 1);

    let currentMainIndex = parseInt(document.querySelector(".img-main").id); 

    let currentNext = document.getElementById(currentMainIndex + 1);
    let currentPrev = document.getElementById(currentMainIndex - 1);

    if (currentNext != null) {
        currentNext.classList.remove("img-next");
    }

    if (currentPrev != null) {
        currentPrev.classList.remove("img-prev");
    }

    newMain.classList.remove("img-prev");
    newMain.classList.remove("img-next");
    newMain.classList.add("img-main");

    if (newPrev != null) {
        newPrev.classList.remove("img-main");
        newPrev.classList.add("img-prev");
    }

    if (newNext != null) {
        newNext.classList.remove("img-main");
        newNext.classList.add("img-next");
    }


    actorRole.innerHTML = ACTORS[m - 1].role;
    actorName.innerHTML = ACTORS[m - 1].name;
}