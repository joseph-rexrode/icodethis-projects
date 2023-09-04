var stars = document.getElementsByClassName("starIcon");
var starSection = document.getElementsByClassName("rating");

const classes = starSection[0].classList


if (starSection[0].classList.contains('unchecked')) {

    // hover
    for (var star = 0; star < stars.length; star++) {
        (function (index) {

            stars[index].addEventListener("mouseover", function () {
                if (starSection[0].classList.contains('unchecked')) {
                    for (var s = index; s >= 0; s--) {
                        stars[s].setAttribute("fill", "#FFEC8A");
                    }
                }
            })

            stars[index].addEventListener("mouseout", function () {
                if (starSection[0].classList.contains('unchecked')) {
                    for (var i = index; i >= 0; i--) {
                        stars[i].setAttribute("fill", "none");
                    }
                }
            })
        })(star);
    }
}


for (var star = 0; star < stars.length; star++) {
    (function (index) {
        stars[index].addEventListener("click", function () {
            if (!starSection[0].classList.contains("unchecked")) {
                for (var i = 4; i >= 0; i--) {
                    stars[i].setAttribute("fill", "none");
                }
                starSection[0].classList.add("unchecked");
            }
            else {
                for (var i = index; i >= 0; i--) {
                    stars[i].setAttribute("fill", "#FFEC8A");
                }
                starSection[0].classList.remove("unchecked");
            }
        });
    })(star);
}