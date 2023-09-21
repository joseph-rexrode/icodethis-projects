var images = document.querySelectorAll("img");
var dots = document.querySelectorAll(".dot");
var imageContainer = document.querySelector(".slider--images");
var next = document.getElementById("next");
var previous = document.getElementById("previous");
var dotList = document.querySelector(".slider--dots");
var currentPosition = 0;

dots.forEach((dot) => {
    dot.addEventListener("click", function () {
        dots.forEach((otherDot) => {
            if (otherDot.classList.contains("dot--active")) {
                otherDot.classList.remove("dot--active");
            }
        })
        dot.classList.add("dot--active");

        if (dot.classList.contains("img--1")) {
            currentPosition = 0;
        }
        else if (dot.classList.contains("img--2")) {
            currentPosition = -460
        }
        else if (dot.classList.contains("img--3")) {
            currentPosition = -920
        }
        else if (dot.classList.contains("img--4")) {
            currentPosition = -1380;
        }
        else {
            currentPosition = -1860
        }
        imageContainer.style.left = currentPosition + "px";
    })
})

next.addEventListener("click", function () {
    dots.forEach((otherDot) => {
        if (otherDot.classList.contains("dot--active")) {
            otherDot.classList.remove("dot--active");
        }
    });

    if (currentPosition == -1860) {
        currentPosition = 0;
        dotList.firstElementChild.classList.add("dot--active");
        
    }
    else if (currentPosition == -1380) {
        currentPosition = -1860;
        dotList.lastElementChild.classList.add("dot--active");
    }
    else {
        currentPosition -= 460;
        if (currentPosition == -460) {
            document.querySelector(".slider--dots :nth-child(2)").classList.add("dot--active");
        }

        else if (currentPosition == -920) {
            document.querySelector(".slider--dots :nth-child(3)").classList.add("dot--active");
        }

        else {
            document.querySelector(".slider--dots :nth-child(4)").classList.add("dot--active");
        }
    }

    imageContainer.style.left = currentPosition + "px";
    
})

previous.addEventListener("click", function () {

    dots.forEach((otherDot) => {
        if (otherDot.classList.contains("dot--active")) {
            otherDot.classList.remove("dot--active");
        }
    });

    if (currentPosition == 0) {
        currentPosition = -1860;
        dotList.lastElementChild.classList.add("dot--active");
    }
    else if (currentPosition == -1860) {
        currentPosition = -1380;
        document.querySelector(".slider--dots :nth-child(4)").classList.add("dot--active");
    }
    else {
        currentPosition += 460;

        if (currentPosition == -460) {
            document.querySelector(".slider--dots :nth-child(2)").classList.add("dot--active");
        }

        else if (currentPosition == -920) {
            document.querySelector(".slider--dots :nth-child(3)").classList.add("dot--active");
        }

        else {
            dotList.firstElementChild.classList.add("dot--active");
        }
    }

    imageContainer.style.left = currentPosition + "px";
})