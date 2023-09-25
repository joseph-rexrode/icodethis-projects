const albums = [
    {
        title: "Portraits",
        photos: []
    },
    {
        title: "Landscapes",
        photos: []
    },
    {
        title: "Animals",
        photos: []
    }
];

var albumHeader = document.querySelector(".photoSection--header-info");

var photoList = document.querySelector(".photoSection--photos");

var nextButton = document.querySelector(".next");
var prevButton = document.querySelector(".prev");



renderPhotos();
let currentAlbum = 0;

viewAlbum(currentAlbum);


nextButton.addEventListener("click", function () {    
    currentAlbum = (currentAlbum == albums.length - 1) ? 0 : currentAlbum + 1;
    viewAlbum(currentAlbum);
})

prevButton.addEventListener("click", function() {
    currentAlbum = (currentAlbum == 0) ? albums.length - 1 : currentAlbum - 1;
    viewAlbum(currentAlbum);
})

function renderPhotos() {
    albums.forEach((album) => {
        let numberPhotos = Math.round(Math.random() * 10) + 3;

        for (var i = 0; i < numberPhotos; i++) {
            album.photos.push("https://source.unsplash.com/random/?" + album.title + "&"  + i);
        }
    })
}

function viewAlbum(i) {
    albumHeader.innerHTML = '';
    photoList.innerHTML = '';

    let nameAlbum = albums[i].title;
    let albumPhotoCount = albums[i].photos.length;

    albumHeader.innerHTML = `
        <p>${nameAlbum}</p>
        <p class="subtitle">${albumPhotoCount} Photos</p>
    `;

    for (var j = 0; j < albumPhotoCount; j++) {
        let photoElement = document.createElement("img");
        photoElement.setAttribute("src", albums[i].photos[j]);
        photoElement.classList.add("photoSection--photos-photo")

        photoList.appendChild(photoElement);
    }
}