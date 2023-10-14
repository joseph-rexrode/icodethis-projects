const useCases = document.querySelectorAll(".useCase--action");
const scrollbarPointer = document.querySelector(".progressbar--pointer")
const amount = document.querySelector(".amount");
const counter = document.querySelector(".progressCounter");
let currentAmount = 1000;
let currentPosition = 0;

dragScroller(scrollbarPointer);
setCurrent(currentAmount);

useCases.forEach(useCase => {
  useCase.addEventListener("click", function() {
    removeCurrentActiveUseCase();
    useCase.classList.add("active");
  })
})

function removeCurrentActiveUseCase() {
  useCases.forEach(u => {
    u.classList.remove("active");
  })
}

function dragScroller(s) {

  let origin = 0;
  s.addEventListener("mousedown", dragMouse);

  function dragMouse(e) {
    e.preventDefault();
    origin = e.clientX;
    document.addEventListener("mousemove", scrollDrag);
    document.addEventListener("mouseup", closeDragScroll);
    counter.style.opacity = 1;
  }

  function scrollDrag(e) {
    e.preventDefault();
    let change = e.clientX - origin;
    origin = e.clientX;
    currentPosition = (currentPosition + change <= 0) ? 0 : ((currentPosition + change >= 228) ? 228 : (currentPosition + change));
    s.style.left = currentPosition + "px";

    setCurrent((Math.round(currentPosition / 26) * 1000) + 1000);
  }

  function closeDragScroll() {
    document.removeEventListener("mousemove", scrollDrag);
    document.removeEventListener("mouseup", closeDragScroll);
    counter.style.opacity = 0;
  }
}

function setCurrent(c) {
  amount.innerHTML = c;
  currentAmount = c;
}