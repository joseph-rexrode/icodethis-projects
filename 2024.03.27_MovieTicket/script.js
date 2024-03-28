const seatingDiv = document.querySelector(".ticket--main__seating");
const numRows = 7;

renderSeatingChart();

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
      chairs += '<svg height="24px" width="24px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 25.626 25.626" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path style="fill:#5B889D;" d="M20.813,22.22c-0.551,0-1-0.449-1-1v-1h1c1.594,0,2-0.542,2-0.542v1.542c0,0.551-0.449,1-1,1H20.813 z"></path> <path style="fill:#5B889D;" d="M3.813,22.22c-0.551,0-1-0.449-1-1v-1.542c0,0,0.406,0.542,2,0.542h1v1c0,0.551-0.449,1-1,1H3.813z"></path> <g> <path style="fill:#5B889D;" d="M25.626,11.72c0-1.277-1.036-2.313-2.313-2.313c-0.992,0-1.832,0.628-2.16,1.506l-1.097,2.457 c-0.082-0.051-3.399-1.093-7.181-1.093s-7.23,1.047-7.314,1.099l-1.039-2.305c-0.281-0.958-1.159-1.663-2.209-1.663 C1.036,9.408,0,10.443,0,11.721c0,1.063,0.722,1.949,1.699,2.22l0.428,3.679c0.452,1.561,2.686,1.6,2.686,1.6h16 c0,0,2.234-0.039,2.686-1.602l0.428-3.679C24.903,13.669,25.626,12.783,25.626,11.72z"></path> </g> <path style="fill:#5B889D;" d="M2.313,8.207c1.512,0,2.869,0.998,3.334,2.438l0.506,1.125c0.979-0.353,4.499-0.693,6.723-0.693 c2.163,0,5.633,0.316,6.593,0.666l0.575-1.289c0.521-1.346,1.83-2.247,3.27-2.247c0.106,0,0.207,0.022,0.312,0.031 c0-0.006,0.001-0.013,0.001-0.019c0-2.658-2.154-4.813-4.813-4.813c-0.334,0-11.666,0-12,0c-2.658,0-4.813,2.154-4.813,4.813 c0,0.006,0.001,0.013,0.001,0.019C2.106,8.23,2.207,8.207,2.313,8.207z"></path> </g> </g></svg>';
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



/* 

<div class="row">
  <div class="row--section">
    seat
    seat
    seat
    seat
  </div>
</div>





*/