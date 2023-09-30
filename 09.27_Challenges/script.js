// constants - data
const CHALLENGES = [
    {
        name: "Dashboard Challenge",
        submissions: 36,
        isNew: true,
        isClosed: false,
        voted: false,
        desc: "Vote for your favorite dashboard layout!",
        id: 1
    },
    {
        name: "Facebook Redesign Challenge",
        submissions: 84,
        isNew: true,
        isClosed: false,
        voted: false,
        desc: "Vote for your favorite Facebook layout redesign",
        id: 2
    },
    {
        name: "Dating App Challenge",
        submissions: 158,
        isNew: false,
        isClosed: false,
        voted: false,
        desc: "Vote for your favorite dating app submission",
        id: 3
    },
    {
        name: "Slack Rebranding Challenge",
        submissions: 247,
        isNew: false,
        isClosed: true,
        voted: true,
        desc: "Vote for your favorite Slack rebranding idea",
        id: 4
    },
    {
        name: "Music App Challenge",
        submissions: 185,
        isNew: false,
        isClosed: false,
        voted: false,
        desc: "Vote for your favorite community uploads created for our lates challenge",
        id: 5
    }
];

// selectors
const mainContentList = document.querySelector(".card--main-content");
const challengeInfoSection = document.querySelector(".card--challengeInfo");
const resetButton = document.querySelector(".reset");
let currentActive = 1;


renderChallengeList();

let challengeDivs = document.querySelectorAll(".challenge");

setFirstActive();
monitorRows();


resetButton.addEventListener("click", function () {
    resetVotes();
    renderChallengeList();
    challengeDivs = document.querySelectorAll(".challenge");
    setFirstActive();
    monitorRows();
});

function resetVotes() {
    CHALLENGES.forEach((c) => {
        if (!c.isClosed && c.voted) {
            c.voted = false;
            c.submissions--;
        }
    })
}

function monitorRows() {
    challengeDivs.forEach((challenge) => {
        challenge.addEventListener("click", function () {
            if (!challenge.classList.contains("active")) {
                removeAnyActives();
                challenge.classList.add("active");
                setActive(challenge.id);
                currentActive = challenge.id;
                console.log("click")
            }
            else {
                challenge.classList.remove("active");
                challengeInfoSection.style.scale = 0;
                challengeInfoSection.classList.add("hidden");
                currentActive = 0;
            }
        })
    })
}

function renderChallengeList() {
    mainContentList.innerHTML = '';

    CHALLENGES.forEach((challenge) => {
        let div = document.createElement("div");
        div.classList.add("challenge");
        div.id = challenge.id;
        div.innerHTML = `
        <div class="left">
            <div class="challenge--top">
                <h4>` + challenge.name + `</h4>
            </div>
            <p class="muted">` + challenge.submissions + ` submissions</p>
        </div>
        `;

        let topSection = div.querySelector(".challenge--top");

        if (challenge.isNew) {
            let newButton = document.createElement("button");
            newButton.classList.add("new");
            newButton.innerHTML = "New";
            topSection.appendChild(newButton);
        }

        if (challenge.isClosed) {
            let newButton = document.createElement("button");
            newButton.classList.add("closed");
            newButton.innerHTML = "Closed";
            topSection.appendChild(newButton);
        }

        if (!challenge.voted) {
            let newButton = document.createElement("button");
            newButton.classList.add("vote");
            newButton.innerHTML = "Vote";
            div.appendChild(newButton);
        }

        mainContentList.appendChild(div);
    })
}

function setFirstActive() {
    mainContentList.firstElementChild.classList.add("active");

    challengeInfoSection.innerHTML = `
    <div class="icon"></div>
    <h3>` + CHALLENGES[0].name + `</h3>
    <p>` + CHALLENGES[0].desc + `</p>
    `;

    let hasVoted = CHALLENGES[0].voted;

    if (!hasVoted) {
        voteFunctionality(0);
    }   
}

function setActive(i) {
    if (challengeInfoSection.style.scale == 0) {
        challengeInfoSection.style.scale = 1;
        challengeInfoSection.classList.remove("hidden");
    }

    challengeInfoSection.innerHTML = `
    <div class="icon"></div>
    <h3>` + CHALLENGES[i - 1].name + `</h3>
    <p>` + CHALLENGES[i - 1].desc + `</p>
    `;

    let hasVoted = CHALLENGES[i - 1].voted;

    if (!hasVoted) {
        voteFunctionality(i - 1);
    }   
}

function removeAnyActives() {
    challengeDivs.forEach((c) => {
        c.classList.remove("active");
    })
}

function voteFunctionality(i) {
    let voteButton = document.createElement("button");
    voteButton.classList.add("vote");
    voteButton.innerHTML = "Vote Now!";
    challengeInfoSection.appendChild(voteButton);

    voteButton.addEventListener("click", function () {
        CHALLENGES[i].voted = true;
        CHALLENGES[i].submissions++;
        setActive(currentActive);
        let currentChallengeRow = document.getElementById(CHALLENGES[i].id);
        currentChallengeRow.querySelector(".vote").remove();
        currentChallengeRow.querySelector(".muted").innerHTML = CHALLENGES[i].submissions + " submissions";
    })
}