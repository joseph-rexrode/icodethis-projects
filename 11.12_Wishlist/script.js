const ITEMS = [
  {
    item: "Yankee Candle Medium Jar - Turquoise Sky",
    price: "$12.79",
    pic: "https://images.unsplash.com/photo-1670581710613-56de687c84e5?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    item: "Flowers and Butterflies Ceramic Travel Coffee Mug",
    price: "$14.99",
    pic: "https://images.unsplash.com/photo-1666949655621-c9ba05edc6ca?q=80&w=2274&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    item: "Nicola Spring Patterned Cereal Bowls",
    price: "$19.99",
    pic: "https://images.unsplash.com/photo-1489444444961-d0fda97f0986?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

const itemSection = document.querySelector(".card__main");

renderItems();

function renderItems() {
  ITEMS.forEach(item => {
    let div = document.createElement("div");
    div.classList.add("wishlist__item");
    div.innerHTML = `
      <div class="item__pic" style="background: center / cover no-repeat url(` + item.pic + `)"></div>
      <div class="item__info">
        <h4>` + item.item + `</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit unde.</p>
      </div>
      <div class="item__right">
        <svg class="closeButton" width="14px" height="14px" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 21.32L21 3.32001" stroke="#322f2f" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M3 3.32001L21 21.32" stroke="#322f2f" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        <p class="price">` + item.price + `</p>
        <button class="add">
          <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M2 1C1.44772 1 1 1.44772 1 2C1 2.55228 1.44772 3 2 3H3.21922L6.78345 17.2569C5.73276 17.7236 5 18.7762 5 20C5 21.6569 6.34315 23 8 23C9.65685 23 11 21.6569 11 20C11 19.6494 10.9398 19.3128 10.8293 19H15.1707C15.0602 19.3128 15 19.6494 15 20C15 21.6569 16.3431 23 18 23C19.6569 23 21 21.6569 21 20C21 18.3431 19.6569 17 18 17H8.78078L8.28078 15H18C20.0642 15 21.3019 13.6959 21.9887 12.2559C22.6599 10.8487 22.8935 9.16692 22.975 7.94368C23.0884 6.24014 21.6803 5 20.1211 5H5.78078L5.15951 2.51493C4.93692 1.62459 4.13696 1 3.21922 1H2ZM18 13H7.78078L6.28078 7H20.1211C20.6742 7 21.0063 7.40675 20.9794 7.81078C20.9034 8.9522 20.6906 10.3318 20.1836 11.3949C19.6922 12.4251 19.0201 13 18 13ZM18 20.9938C17.4511 20.9938 17.0062 20.5489 17.0062 20C17.0062 19.4511 17.4511 19.0062 18 19.0062C18.5489 19.0062 18.9938 19.4511 18.9938 20C18.9938 20.5489 18.5489 20.9938 18 20.9938ZM7.00617 20C7.00617 20.5489 7.45112 20.9938 8 20.9938C8.54888 20.9938 8.99383 20.5489 8.99383 20C8.99383 19.4511 8.54888 19.0062 8 19.0062C7.45112 19.0062 7.00617 19.4511 7.00617 20Z" fill="#FFFFFF"></path> </g></svg>
          <p>Add to Cart</p>
        </button>
      </div>
    `;

    itemSection.appendChild(div);
  })
}