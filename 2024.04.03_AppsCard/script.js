const APPS = [
  {
    name: "Slack",
    icon: '<svg width="36px" height="36px" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M165.964 15.838c-3.89-11.975-16.752-18.528-28.725-14.636-11.975 3.89-18.528 16.752-14.636 28.725l58.947 181.365c4.048 11.187 16.132 17.473 27.732 14.135 12.1-3.483 19.475-16.334 15.614-28.217L165.964 15.838" fill="#DFA22F"></path><path d="M74.626 45.516C70.734 33.542 57.873 26.989 45.9 30.879 33.924 34.77 27.37 47.631 31.263 59.606l58.948 181.366c4.047 11.186 16.132 17.473 27.732 14.132 12.099-3.481 19.474-16.332 15.613-28.217L74.626 45.516" fill="#3CB187"></path><path d="M240.162 166.045c11.975-3.89 18.526-16.75 14.636-28.726-3.89-11.973-16.752-18.527-28.725-14.636L44.708 181.632c-11.187 4.046-17.473 16.13-14.135 27.73 3.483 12.099 16.334 19.475 28.217 15.614l181.372-58.93" fill="#CE1E5B"></path><path d="M82.508 217.27l43.347-14.084-14.086-43.352-43.35 14.09 14.089 43.347" fill="#392538"></path><path d="M173.847 187.591c16.388-5.323 31.62-10.273 43.348-14.084l-14.088-43.36-43.35 14.09 14.09 43.354" fill="#BB242A"></path><path d="M210.484 74.706c11.974-3.89 18.527-16.751 14.637-28.727-3.89-11.973-16.752-18.526-28.727-14.636L15.028 90.293C3.842 94.337-2.445 106.422.896 118.022c3.481 12.098 16.332 19.474 28.217 15.613l181.371-58.93" fill="#72C5CD"></path><path d="M52.822 125.933c11.805-3.836 27.025-8.782 43.354-14.086-5.323-16.39-10.273-31.622-14.084-43.352l-43.36 14.092 14.09 43.346" fill="#248C73"></path><path d="M144.16 96.256l43.356-14.088a546179.21 546179.21 0 0 0-14.089-43.36L130.07 52.9l14.09 43.356" fill="#62803A"></path></g></svg>'
  },
  {
    name: "Trello",
    icon: '<svg width="36px" height="36px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>Trello-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Color-" transform="translate(-200.000000, -760.000000)" fill="#007AC2"> <path d="M206,769 L206,796 C206,797.6575 207.3425,799 209,799 L218,799 C219.6575,799 221,797.6575 221,796 L221,769 C221,767.3425 219.6575,766 218,766 L209,766 C207.3425,766 206,767.3425 206,769 L206,769 Z M227,769 L227,784 C227,785.6575 228.3425,787 230,787 L239,787 C240.6575,787 242,785.6575 242,784 L242,769 C242,767.3425 240.6575,766 239,766 L230,766 C228.3425,766 227,767.3425 227,769 L227,769 Z M206,760 C202.6865,760 200,762.688 200,766 L200,802 C200,805.3135 202.688,808 206,808 L242,808 C245.3135,808 248,805.312 248,802 L248,766 C248,762.6865 245.312,760 242,760 L206,760 Z" id="Trello"> </path> </g> </g> </g></svg>'
  },
  {
    name: "RealtieBoard",
    icon: '<svg width="36px" height="36px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#f4ed1a" stroke="#f4ed1a"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="none" d="M0 0h24v24H0z"></path> <path d="M21 16l-5.003 5H3.998A.996.996 0 0 1 3 20.007V3.993C3 3.445 3.445 3 3.993 3h16.014c.548 0 .993.447.993.999V16z"></path> </g> </g></svg>'
  },
  {
    name: "Jira",
    icon: '<svg width="36px" height="36px" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs> <linearGradient x1="98.0308675%" y1="0.160599572%" x2="58.8877062%" y2="40.7655246%" id="linearGradient-1"> <stop stop-color="#0052CC" offset="18%"> </stop> <stop stop-color="#2684FF" offset="100%"> </stop> </linearGradient> <linearGradient x1="100.665247%" y1="0.45503212%" x2="55.4018095%" y2="44.7269807%" id="linearGradient-2"> <stop stop-color="#0052CC" offset="18%"> </stop> <stop stop-color="#2684FF" offset="100%"> </stop> </linearGradient> </defs> <g> <path d="M244.657778,0 L121.706667,0 C121.706667,14.7201046 127.554205,28.837312 137.962891,39.2459977 C148.371577,49.6546835 162.488784,55.5022222 177.208889,55.5022222 L199.857778,55.5022222 L199.857778,77.3688889 C199.877391,107.994155 224.699178,132.815943 255.324444,132.835556 L255.324444,10.6666667 C255.324444,4.77562934 250.548815,3.60722001e-16 244.657778,0 Z" fill="#2684FF"> </path> <path d="M183.822222,61.2622222 L60.8711111,61.2622222 C60.8907238,91.8874888 85.7125112,116.709276 116.337778,116.728889 L138.986667,116.728889 L138.986667,138.666667 C139.025905,169.291923 163.863607,194.097803 194.488889,194.097778 L194.488889,71.9288889 C194.488889,66.0378516 189.71326,61.2622222 183.822222,61.2622222 Z" fill="url(#linearGradient-1)"> </path> <path d="M122.951111,122.488889 L0,122.488889 C3.75391362e-15,153.14192 24.8491913,177.991111 55.5022222,177.991111 L78.2222222,177.991111 L78.2222222,199.857778 C78.241767,230.45532 103.020285,255.265647 133.617778,255.324444 L133.617778,133.155556 C133.617778,127.264518 128.842148,122.488889 122.951111,122.488889 Z" fill="url(#linearGradient-2)"> </path> </g> </g></svg>'
  },
  {
    name: "VSCode",
    icon: '<svg width="36px" height="36px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>file_type_vscode</title><path d="M29.01,5.03,23.244,2.254a1.742,1.742,0,0,0-1.989.338L2.38,19.8A1.166,1.166,0,0,0,2.3,21.447c.025.027.05.053.077.077l1.541,1.4a1.165,1.165,0,0,0,1.489.066L28.142,5.75A1.158,1.158,0,0,1,30,6.672V6.605A1.748,1.748,0,0,0,29.01,5.03Z" style="fill:#0065a9"></path><path d="M29.01,26.97l-5.766,2.777a1.745,1.745,0,0,1-1.989-.338L2.38,12.2A1.166,1.166,0,0,1,2.3,10.553c.025-.027.05-.053.077-.077l1.541-1.4A1.165,1.165,0,0,1,5.41,9.01L28.142,26.25A1.158,1.158,0,0,0,30,25.328V25.4A1.749,1.749,0,0,1,29.01,26.97Z" style="fill:#007acc"></path><path d="M23.244,29.747a1.745,1.745,0,0,1-1.989-.338A1.025,1.025,0,0,0,23,28.684V3.316a1.024,1.024,0,0,0-1.749-.724,1.744,1.744,0,0,1,1.989-.339l5.765,2.772A1.748,1.748,0,0,1,30,6.6V25.4a1.748,1.748,0,0,1-.991,1.576Z" style="fill:#1f9cf0"></path></g></svg>'
  },
  {
    name: "Dropbox",
    icon: '<svg width="36px" height="36px" viewBox="0 -1.5 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>Dropbox-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Color-" transform="translate(-800.000000, -363.000000)" fill="#0F82E2"> <path d="M824,389.033255 L814.1195,397.34573 L800,388.053538 L809.7635,380.17347 L823.999971,389.033238 L838.2362,380.172109 L847.9997,388.05369 L833.8802,397.345881 L823.9997,389.033406 Z M814.1198,363 L800.0003,372.292191 L809.7638,380.17226 L824.0003,371.312475 L814.1198,363 Z M824.02895,390.821692 L814.11995,399.109976 L809.87945,396.318993 L809.87945,399.447132 L824.02895,408 L838.17845,399.447132 L838.17845,396.318993 L833.93795,399.109976 L824.02895,390.821692 Z M848,372.292343 L833.8805,363.000151 L824,371.312626 L838.2365,380.172411 L848,372.292343 Z" id="Dropbox"> </path> </g> </g> </g></svg>'
  }
];

const appSection = document.querySelector(".card--main");

renderApps();

const addButtons = document.querySelectorAll(".add");

addButtons.forEach(addButton => {
  addButton.addEventListener("click", () => addApp(addButton));
})

function renderApps() {
  APPS.forEach(app => {
    let div = document.createElement("div");
    div.className = "app";
    div.innerHTML = app.icon + `<p>` + app.name + `</p><button class="add">+ ADD</button>`;
    appSection.appendChild(div);
  })
}

function addApp(addButton) {
  if (addButton.innerHTML == "+ ADD") {
    addButton.innerHTML = "Added!";
  }
  else {
    addButton.innerHTML = "+ ADD";
  }
}