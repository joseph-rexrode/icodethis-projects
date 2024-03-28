const seatingDiv = document.querySelector(".ticket--main__seating");
const numRows = 7;
const costPerTicket = 12;
const numTicketsDiv = document.getElementById("numTickets"); 
const totalCostDiv = document.getElementById("total");
let currentCost = 0;
let currentTickets = 0;

renderSeatingChart();
renderInfo();

let availableSeats = document.querySelectorAll(".seat--available");

availableSeats.forEach(seat => {
  seat.addEventListener("click", () => {
    selectSeat(seat);
  })
})

function renderSeatingChart() {

  for (let i = 0; i < numRows; i++) {
    // row div
    let row = document.createElement("div");
    row.className = "row";

    // row title (eg. A, B, C)
    let rowTitle = document.createElement("p");
    rowTitle.className = "row--title";
    rowTitle.innerHTML = String.fromCharCode(65 + i);

    // row sections (separated by gap)
    let rowSections = document.createElement("div");
    let leftSection = document.createElement("div");
    let rightSection = document.createElement("div");

    rowSections.className = "row--sections";
    leftSection.className = "row--section";
    rightSection.className = "row--section";

    // chair svgs
    let chairs = "";

    for (let j = 0; j < 4; j++) {
      
      let chairAvailability = Math.random();

      if (Math.round(chairAvailability) == 0) {
        chairs += '<svg class="seat--available" height="24px" width="24px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 25.626 25.626" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path style="fill:#5B889D;" d="M20.813,22.22c-0.551,0-1-0.449-1-1v-1h1c1.594,0,2-0.542,2-0.542v1.542c0,0.551-0.449,1-1,1H20.813 z"></path> <path style="fill:#5B889D;" d="M3.813,22.22c-0.551,0-1-0.449-1-1v-1.542c0,0,0.406,0.542,2,0.542h1v1c0,0.551-0.449,1-1,1H3.813z"></path> <g> <path style="fill:#5B889D;" d="M25.626,11.72c0-1.277-1.036-2.313-2.313-2.313c-0.992,0-1.832,0.628-2.16,1.506l-1.097,2.457 c-0.082-0.051-3.399-1.093-7.181-1.093s-7.23,1.047-7.314,1.099l-1.039-2.305c-0.281-0.958-1.159-1.663-2.209-1.663 C1.036,9.408,0,10.443,0,11.721c0,1.063,0.722,1.949,1.699,2.22l0.428,3.679c0.452,1.561,2.686,1.6,2.686,1.6h16 c0,0,2.234-0.039,2.686-1.602l0.428-3.679C24.903,13.669,25.626,12.783,25.626,11.72z"></path> </g> <path style="fill:#5B889D;" d="M2.313,8.207c1.512,0,2.869,0.998,3.334,2.438l0.506,1.125c0.979-0.353,4.499-0.693,6.723-0.693 c2.163,0,5.633,0.316,6.593,0.666l0.575-1.289c0.521-1.346,1.83-2.247,3.27-2.247c0.106,0,0.207,0.022,0.312,0.031 c0-0.006,0.001-0.013,0.001-0.019c0-2.658-2.154-4.813-4.813-4.813c-0.334,0-11.666,0-12,0c-2.658,0-4.813,2.154-4.813,4.813 c0,0.006,0.001,0.013,0.001,0.019C2.106,8.23,2.207,8.207,2.313,8.207z"></path> </g> </g></svg>'
      }
      else {
        chairs += '<svg class="seat--booked" height="24px" width="24px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 25.626 25.626" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path style="fill:#C9D8DE;" d="M20.813,22.22c-0.551,0-1-0.449-1-1v-1h1c1.594,0,2-0.542,2-0.542v1.542c0,0.551-0.449,1-1,1H20.813 z"></path> <path style="fill:#C9D8DE;" d="M3.813,22.22c-0.551,0-1-0.449-1-1v-1.542c0,0,0.406,0.542,2,0.542h1v1c0,0.551-0.449,1-1,1H3.813z"></path> <g> <path style="fill:#C9D8DE;" d="M25.626,11.72c0-1.277-1.036-2.313-2.313-2.313c-0.992,0-1.832,0.628-2.16,1.506l-1.097,2.457 c-0.082-0.051-3.399-1.093-7.181-1.093s-7.23,1.047-7.314,1.099l-1.039-2.305c-0.281-0.958-1.159-1.663-2.209-1.663 C1.036,9.408,0,10.443,0,11.721c0,1.063,0.722,1.949,1.699,2.22l0.428,3.679c0.452,1.561,2.686,1.6,2.686,1.6h16 c0,0,2.234-0.039,2.686-1.602l0.428-3.679C24.903,13.669,25.626,12.783,25.626,11.72z"></path> </g> <path style="fill:#C9D8DE;" d="M2.313,8.207c1.512,0,2.869,0.998,3.334,2.438l0.506,1.125c0.979-0.353,4.499-0.693,6.723-0.693 c2.163,0,5.633,0.316,6.593,0.666l0.575-1.289c0.521-1.346,1.83-2.247,3.27-2.247c0.106,0,0.207,0.022,0.312,0.031 c0-0.006,0.001-0.013,0.001-0.019c0-2.658-2.154-4.813-4.813-4.813c-0.334,0-11.666,0-12,0c-2.658,0-4.813,2.154-4.813,4.813 c0,0.006,0.001,0.013,0.001,0.019C2.106,8.23,2.207,8.207,2.313,8.207z"></path> </g> </g></svg>'
      }
    }

    leftSection.innerHTML = chairs;
    rightSection.innerHTML = chairs;

    rowSections.appendChild(leftSection);
    rowSections.appendChild(rightSection);

    // add row sections and row title to row
    row.appendChild(rowTitle);
    row.appendChild(rowSections);

    // add row to seating div
    seatingDiv.appendChild(row);
  }
}

function selectSeat(seat) {
  if (seat.classList.contains("seat--selected")) {
    seat.innerHTML = `<g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path style="fill:#5B889D;" d="M20.813,22.22c-0.551,0-1-0.449-1-1v-1h1c1.594,0,2-0.542,2-0.542v1.542c0,0.551-0.449,1-1,1H20.813 z"></path> <path style="fill:#5B889D;" d="M3.813,22.22c-0.551,0-1-0.449-1-1v-1.542c0,0,0.406,0.542,2,0.542h1v1c0,0.551-0.449,1-1,1H3.813z"></path> <g> <path style="fill:#5B889D;" d="M25.626,11.72c0-1.277-1.036-2.313-2.313-2.313c-0.992,0-1.832,0.628-2.16,1.506l-1.097,2.457 c-0.082-0.051-3.399-1.093-7.181-1.093s-7.23,1.047-7.314,1.099l-1.039-2.305c-0.281-0.958-1.159-1.663-2.209-1.663 C1.036,9.408,0,10.443,0,11.721c0,1.063,0.722,1.949,1.699,2.22l0.428,3.679c0.452,1.561,2.686,1.6,2.686,1.6h16 c0,0,2.234-0.039,2.686-1.602l0.428-3.679C24.903,13.669,25.626,12.783,25.626,11.72z"></path> </g> <path style="fill:#5B889D;" d="M2.313,8.207c1.512,0,2.869,0.998,3.334,2.438l0.506,1.125c0.979-0.353,4.499-0.693,6.723-0.693 c2.163,0,5.633,0.316,6.593,0.666l0.575-1.289c0.521-1.346,1.83-2.247,3.27-2.247c0.106,0,0.207,0.022,0.312,0.031 c0-0.006,0.001-0.013,0.001-0.019c0-2.658-2.154-4.813-4.813-4.813c-0.334,0-11.666,0-12,0c-2.658,0-4.813,2.154-4.813,4.813 c0,0.006,0.001,0.013,0.001,0.019C2.106,8.23,2.207,8.207,2.313,8.207z"></path> </g> </g></svg>`;
    seat.classList.remove("seat--selected");
    currentTickets--;
    currentCost -= costPerTicket;
    renderInfo();
  }
  else {
    seat.innerHTML = `<g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path style="fill:#EC407A;" d="M20.813,22.22c-0.551,0-1-0.449-1-1v-1h1c1.594,0,2-0.542,2-0.542v1.542c0,0.551-0.449,1-1,1H20.813 z"></path> <path style="fill:#EC407A;" d="M3.813,22.22c-0.551,0-1-0.449-1-1v-1.542c0,0,0.406,0.542,2,0.542h1v1c0,0.551-0.449,1-1,1H3.813z"></path> <g> <path style="fill:#EC407A;" d="M25.626,11.72c0-1.277-1.036-2.313-2.313-2.313c-0.992,0-1.832,0.628-2.16,1.506l-1.097,2.457 c-0.082-0.051-3.399-1.093-7.181-1.093s-7.23,1.047-7.314,1.099l-1.039-2.305c-0.281-0.958-1.159-1.663-2.209-1.663 C1.036,9.408,0,10.443,0,11.721c0,1.063,0.722,1.949,1.699,2.22l0.428,3.679c0.452,1.561,2.686,1.6,2.686,1.6h16 c0,0,2.234-0.039,2.686-1.602l0.428-3.679C24.903,13.669,25.626,12.783,25.626,11.72z"></path> </g> <path style="fill:#EC407A;" d="M2.313,8.207c1.512,0,2.869,0.998,3.334,2.438l0.506,1.125c0.979-0.353,4.499-0.693,6.723-0.693 c2.163,0,5.633,0.316,6.593,0.666l0.575-1.289c0.521-1.346,1.83-2.247,3.27-2.247c0.106,0,0.207,0.022,0.312,0.031 c0-0.006,0.001-0.013,0.001-0.019c0-2.658-2.154-4.813-4.813-4.813c-0.334,0-11.666,0-12,0c-2.658,0-4.813,2.154-4.813,4.813 c0,0.006,0.001,0.013,0.001,0.019C2.106,8.23,2.207,8.207,2.313,8.207z"></path> </g> </g></svg>`;
    seat.classList.add("seat--selected");
    currentTickets++;
    currentCost += costPerTicket;
    renderInfo();
  }
  
}

function renderInfo() {
  numTicketsDiv.innerHTML = currentTickets;
  totalCostDiv.innerHTML = "$" + currentCost;
}

if (navigator.userAgent.includes("Headless")) {
  mainContainer.style.transitionDuration = '0s';
  mainContainer.classList.remove('-translate-y-100vh');
  mainContainer.classList.remove('opacity-0');
  mainContainer.classList.remove('pointer-events-none');
}