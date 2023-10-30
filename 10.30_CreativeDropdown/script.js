const dropdownSelect = document.querySelector(".dropdown--select");
const dropdownContent = document.querySelector(".dropdown--content");
const defaultSelectInfo = `
<p>Select an object type</p>
<svg class="arrow" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M4.29289 8.29289C4.68342 7.90237 5.31658 7.90237 5.70711 8.29289L12 14.5858L18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289C20.0976 8.68342 20.0976 9.31658 19.7071 9.70711L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L4.29289 9.70711C3.90237 9.31658 3.90237 8.68342 4.29289 8.29289Z" fill="#2E2E2E"></path> </g></svg>
`;
const defaultSelectContent = `
<svg height="64px" width="64px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle style="fill:#80D0E1;" cx="246.193" cy="241.451" r="62.693"></circle> <g> <circle style="fill:#FF7876;" cx="246.193" cy="49.648" r="36.755"></circle> <circle style="fill:#FF7876;" cx="381.815" cy="377.073" r="36.755"></circle> <circle style="fill:#FF7876;" cx="54.399" cy="241.451" r="36.755"></circle> </g> <g> <circle style="fill:#FFDA79;" cx="443.033" cy="115.508" r="51.311"></circle> <circle style="fill:#FFDA79;" cx="140.45" cy="447.798" r="51.311"></circle> </g> <path style="fill:#58595B;" d="M443.04,51.311c-35.402,0-64.204,28.802-64.204,64.204c0,6.474,0.973,12.725,2.763,18.622 l-81.022,54.892c-10.922-11.327-25.331-19.256-41.488-22.046V97.588c21.144-5.692,36.755-25.024,36.755-47.94 C295.843,22.271,273.572,0,246.195,0s-49.648,22.271-49.648,49.648c0,22.918,15.611,42.247,36.755,47.94v69.392 c-31.362,5.415-56.155,30.208-61.57,61.57H102.34c-5.692-21.144-25.024-36.755-47.94-36.755c-27.377,0-49.648,22.271-49.648,49.648 s22.271,49.648,49.648,49.648c22.918,0,42.247-15.611,47.94-36.755h69.392c3.333,19.307,14.001,36.134,29.039,47.477l-43.116,84.137 c-41.091-11.446-81.406,19.696-81.406,61.844c0,35.402,28.802,64.204,64.204,64.204s64.204-28.802,64.204-64.204 c0-20.222-9.407-38.28-24.064-50.056l43.11-84.127c22.089,6.899,46.509,3.359,66.006-10.42l49.083,49.081 c-10.831,18.728-8.529,43.449,7.918,59.898c19.405,19.402,50.809,19.405,70.212,0c19.407-19.404,19.405-50.807,0.002-70.212 c-16.411-16.414-41.128-18.775-59.898-7.92l-49.081-49.083c15.505-21.938,18.142-50.283,7.122-74.598L394,156.886 c11.786,13.951,29.394,22.833,49.043,22.833c35.402,0,64.204-28.802,64.204-64.204C507.244,80.113,478.442,51.311,443.04,51.311z M140.453,486.213c-21.183,0-38.417-17.232-38.417-38.417c0-21.185,17.233-38.417,38.417-38.417 c21.183,0,38.417,17.233,38.417,38.417C178.871,468.981,161.636,486.213,140.453,486.213z M222.335,49.648 c0-13.156,10.705-23.861,23.861-23.861s23.861,10.705,23.861,23.861S259.353,73.51,246.197,73.51S222.335,62.805,222.335,49.648z M54.401,265.306c-13.156,0-23.861-10.705-23.861-23.861s10.705-23.861,23.861-23.861s23.861,10.705,23.861,23.861 C78.261,254.602,67.557,265.306,54.401,265.306z M196.397,241.444c0-27.46,22.34-49.8,49.8-49.8s49.8,22.34,49.8,49.8 s-22.34,49.8-49.8,49.8S196.397,268.904,196.397,241.444z M398.688,360.193c9.328,9.325,9.328,24.417,0,33.745 c-9.326,9.326-24.418,9.326-33.743-0.002c-0.002,0-0.002,0-0.002,0c-9.326-9.326-9.326-24.418,0.002-33.743 C374.27,350.865,389.364,350.866,398.688,360.193z M443.04,153.93c-21.183,0-38.417-17.232-38.417-38.417 c0-21.183,17.233-38.417,38.417-38.417c21.183,0,38.417,17.233,38.417,38.417C481.457,136.698,464.223,153.93,443.04,153.93z"></path> </g></svg>
<h5>No object types in here yet</h5>
<p class="muted">The object types that you'll create will appear here</p>
`;
const OBJECTS = [
  {
    name: "Person",
    icon: '<svg height="20px" width="20px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> .st0{fill:#FCC168;} </style> <g> <path class="st0" d="M458.159,404.216c-18.93-33.65-49.934-71.764-100.409-93.431c-28.868,20.196-63.938,32.087-101.745,32.087 c-37.828,0-72.898-11.89-101.767-32.087c-50.474,21.667-81.479,59.782-100.398,93.431C28.731,448.848,48.417,512,91.842,512 c43.426,0,164.164,0,164.164,0s120.726,0,164.153,0C463.583,512,483.269,448.848,458.159,404.216z"></path> <path class="st0" d="M256.005,300.641c74.144,0,134.231-60.108,134.231-134.242v-32.158C390.236,60.108,330.149,0,256.005,0 c-74.155,0-134.252,60.108-134.252,134.242V166.4C121.753,240.533,181.851,300.641,256.005,300.641z"></path> </g> </g></svg>'
  },
  {
    name: "Book",
    icon: '<svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20px" height="20px" viewBox="0 0 512 512" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css">  .st1{fill:#34A486;}  </style> <g> <path class="st1" d="M489.86,269.259L291.814,5.181c-3.828-5.078-10.766-6.656-16.391-3.688L45.798,122.431l213.813,285.063 l225.921-119.016c3.359-1.766,5.781-4.906,6.594-8.609C492.97,276.166,492.142,272.291,489.86,269.259z"></path> <polygon class="st1" points="481.767,313.228 257.908,430.587 261.298,437.071 485.157,319.697 "></polygon> <polygon class="st1" points="254.908,469.806 486.048,348.603 482.657,342.119 251.501,463.337 "></polygon> <path class="st1" d="M486.173,364.541L239.205,493.962c-7.5,1.906-5.781-3.953-5.797-13.125 c0.703-24.656,6.719-46.203,13.406-53.25L33.017,142.525c-9.547,11.453-17.766,47.094-10.969,85.891l211.141,281.515 c1.531,2.031,4.328,2.656,6.563,1.469l247.875-131.312c2.203-1.172,3.719-3.328,4.078-5.797c0.328-2.469-0.516-4.953-2.328-6.688 L486.173,364.541z"></path> </g> </g></svg>'
  },
  {
    name: "Exercise",
    icon: '<svg height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 51.23 51.23" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path style="fill:#4292F4;" d="M47.493,32.104c-0.175-0.479-0.441-0.908-0.77-1.293c-0.577-2.328-1.719-4.998-3.379-7.646 c-2.658-4.247-9.695-11.09-12.369-12.145c-0.133-0.054-0.253-0.084-0.365-0.111c-0.091-0.659-0.464-1.271-1.348-1.691 c-1.379-0.647-2.739-1.279-4.016-1.72C23.712,3.139,19.563,0,14.686,0C8.507,0,3.481,5.023,3.481,11.202 c0,6.178,5.026,11.204,11.205,11.204c5.085,0,9.384-3.41,10.747-8.063c1.017-0.156,1.894-0.103,2.388,0.633 c1.374,2.044,2.889,8.847,5.405,13.195c-0.636-0.087-1.292-0.135-1.968-0.135c-2.904,0-5.514,0.85-7.357,2.212 c-1.578-2.462-4.332-4.098-7.474-4.098c-4.161,0-7.64,2.865-8.603,6.729l-0.382,0.003l0.22,18.348l4.537-0.078l1.646-2.916 c2.86-1.098,6.242-3.932,8.591-6.948c3.184,0.467,7.204,0.733,8.822,0.733c1.752,0,8.379-0.772,10.272-1.467 C45.942,38.943,48.615,35.158,47.493,32.104z M14.686,14.486c-1.811,0-3.283-1.473-3.283-3.284c0-1.81,1.472-3.281,3.283-3.281 c1.81,0,3.282,1.472,3.282,3.281C17.968,13.014,16.495,14.486,14.686,14.486z"></path> </g> </g> </g></svg>'
  },
  {
    name: "Income",
    icon: '<svg width="20px" height="20px" viewBox="0 0 30 30" id="Layer_1" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><style type="text/css"> .st2{fill:#FD6A7E;} .st3{fill:#17B978;} .st4{fill:#8797EE;} .st5{fill:#41A6F9;} .st6{fill:#37E0FF;} .st7{fill:#2FD9B9;} .st8{fill:#F498BD;} .st9{fill:#FFDF1D;} .st10{fill:#C6C9CC;} </style><path class="st1" d="M25,22v4c0,0.6-0.4,1-1,1H6c-0.6,0-1-0.4-1-1V13c0-0.6,0.4-1,1-1h18c0.6,0,1,0.4,1,1v4h-4.5 c-1.4,0-2.5,1.1-2.5,2.5c0,1.4,1.1,2.5,2.5,2.5H25z M20.5,18.5c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S21.1,18.5,20.5,18.5z M18.5,2 C17.1,2,16,3.1,16,4.5S17.1,7,18.5,7S21,5.9,21,4.5S19.9,2,18.5,2z M14.7,10C14.9,9.6,15,9.2,15,8.7c0-1.7-1.3-3-3-3s-3,1.3-3,3 C9,9.2,9.1,9.6,9.3,10H14.7z"></path></g></svg>'
  },
  {
    name: "Expense",
    icon: '<svg width="20px" height="20px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#F05F50" d="M268.383 22.168l-55.918 84.482 29.717 3.733c-9.22 30.13-11.095 50.878-8.885 92.12 14.138-2.23 25.56-3.025 40.586 1.39-9.877-36.84-8.844-49.427-4.88-89.768l32.622 2.277-33.242-94.234zm218.482 2.21l-108.36 30.03 20.915 25.975c-49.512 31.019-80.331 55.548-104.74 123.164 13.201-.152 28.098 2.921 44.174 9.004 5.728-44.666 33.74-76.14 79.302-108.918l19.983 24.816 48.726-104.07zm-463.574 2.31L89.17 129.173l19.084-28.711c35.554 32.44 58.145 76.33 57.308 107.43 18.568-8.696 29.927-9.527 49.735-3.778-8.105-31.203-43.577-108.722-91.639-129.103l16.57-26.037L23.292 26.687zm276.117 214.667c-5.28.12-10.21 2.415-16.937 9.594l-6.565 6.969-6.812-6.72c-7.387-7.28-13.216-9.29-19.125-9.03-5.908.26-12.855 3.367-20.625 9.656l-6.217 5.03-5.906-5.374c-8.9-8.052-16.485-10.439-23.75-10.064-5.288.274-10.775 2.266-16.25 5.75l40.966 73.69c15.454 9.451 47.034 13.006 68.75 2.062l39.594-73.344c-7.51-3.062-14.26-6.202-20.094-7.406-2.112-.437-4.07-.756-5.968-.813-.354-.01-.71-.008-1.06 0zm-89.97 96.188v.002c-18.035 12.742-32.516 34.717-38.125 66.904-5.435 31.196 3.129 52.266 18.283 66.625 15.155 14.36 37.902 21.736 61 21.436 23.1-.3 46.136-8.31 61.625-22.936 15.49-14.627 24.249-35.425 19.281-65.187-5.137-30.757-18.4-52.148-35.19-65.094-28.482 15.056-64.095 11.856-86.875-1.75z"></path></g></svg>'
  }
];
const variableContentSection = document.querySelector(".dropdown--content-variable");

renderDefaults();

const dropdownArrow = document.querySelector(".arrow");
const actionButton = document.querySelector(".action");

dropdownSelect.addEventListener("click", () => {
  dropdownArrow.classList.toggle("open");
  dropdownContent.classList.toggle("hidden");
});

actionButton.addEventListener("click", () => {
  if (dropdownContent.getAttribute("data-anyObjects") == "false") {
    variableContentSection.innerHTML = '';
    let div = document.createElement("div");
    div.classList.add("item");
    div.innerHTML = OBJECTS[0].icon + `<p>` + OBJECTS[0].name + `</p>`;
    variableContentSection.appendChild(div);
    dropdownContent.setAttribute("data-anyObjects", "true");
  }
  else {
    let currentList = dropdownContent.querySelectorAll(".item");
    let currentIt = currentList.length;
    let div = document.createElement("div");
    div.classList.add("item");
    div.innerHTML = OBJECTS[currentIt].icon + `<p>` + OBJECTS[currentIt].name + `</p>`;
    variableContentSection.appendChild(div);
  }
})

function renderDefaults() {
  dropdownSelect.innerHTML = defaultSelectInfo
  variableContentSection.innerHTML = defaultSelectContent;
}
