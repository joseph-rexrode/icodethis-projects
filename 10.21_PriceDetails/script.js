const itemList = document.querySelector("ul");
const items = itemList.querySelectorAll("li");
const pricingItems = document.querySelectorAll(".card--item");
let itemDelay = 0;
let pricingDelay = 0;

items.forEach(i => {
  setTimeout(() => {
    i.style.animation = "slidein 750ms ease-in";
    i.style.opacity = "1";
    i.style.transform = "translateY(0)";
  }, itemDelay + 400);
  itemDelay += 400;
})

pricingItems.forEach(i => {
  setTimeout(() => {
    i.style.animation = "slidein 750ms ease-in";
    i.style.opacity = "1";
    i.style.transform = "translateY(0)";
  }, pricingDelay + 300);
  pricingDelay += 300;
})