const closeButton = document.querySelector(".close");
const cart = document.querySelector(".cart")
const closedCart = document.querySelector(".cart__closed");
const quantityOfItem = document.querySelector("input");
const addQuant = document.querySelector(".increase");
const subQuant = document.querySelector(".decrease");


monitorQuantity()

closeButton.addEventListener("click", () => {
  cart.setAttribute("data-status", "closed");
})

closedCart.addEventListener("click", () => {
  cart.setAttribute("data-status", "open");
})

function monitorQuantity() {
  let currentQuantity = parseInt(quantityOfItem.getAttribute("value"));
  
  addQuant.addEventListener("click", () => {
    currentQuantity++;
    quantityOfItem.setAttribute("value", currentQuantity);
  })

  subQuant.addEventListener("click", () => {
    if (currentQuantity > 1) {
      currentQuantity--;
      quantityOfItem.setAttribute("value", currentQuantity);
    }
  })
}