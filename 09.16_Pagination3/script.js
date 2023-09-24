var galleryPages = [

];

const pageNumberContainer = document.querySelector(".main--nav-nav-pages");
const mainContent = document.querySelector(".main--content");
const first = document.querySelector(".first");
const last = document.querySelector(".last");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");


generatePages();
renderPageNumbers();
renderCurrentPage();

var numberButtons = document.querySelectorAll(".pageNumber");

first.addEventListener("click", function() {
    if (!galleryPages[0].currentPage) {
        removeCurrent();
        galleryPages[0].currentPage = true;
        renderCurrentPage();
        renderPageNumbers();
    }
})

last.addEventListener("click", function() {
    if (!galleryPages[galleryPages.length - 1].currentPage) {
        removeCurrent();
        galleryPages[galleryPages.length - 1].currentPage = true;
        renderCurrentPage();
        renderPageNumbers();
    }
})

prev.addEventListener("click", function() {
    if (!galleryPages[0].currentPage) {
        let pageCurrent = findCurrent();
        removeCurrent();
        galleryPages[pageCurrent - 2].currentPage = true;
        renderCurrentPage();
        renderPageNumbers();
    }
})

next.addEventListener("click", function() {
    if (!galleryPages[galleryPages.length - 1].currentPage) {
        let pageCurrent = findCurrent();
        removeCurrent();
        galleryPages[pageCurrent].currentPage = true;
        renderCurrentPage();
        renderPageNumbers();
    }
})


function generatePages() {
    for (var i = 0; i < 5; i++) {
        const newPage = {
            page: (i + 1),
            element1: generatePageElement(i, 1),
            element2: generatePageElement(i, 2),
            element3: generatePageElement(i, 3),
            currentPage: (i == 0) ? true:false
        }
        galleryPages.push(newPage)
    }
}

function generatePageElement(i, j) {
    var newGallery = generateElementGallery(i, j);
    var downloadCount = Math.round(Math.random() * 20);

    return {
        profile_url: "https://source.unsplash.com/random/300x300?man,portrait&" + i + j,
        gallery: newGallery,
        downloads: downloadCount
    }
}

function generateElementGallery(a, b) {
    var gallery = [];

    for (var i = 0; i < 5; i++) {
        gallery.push("https://source.unsplash.com/random/?&" + i + a + b);
    }

    return gallery;
}

function renderPageNumbers() {

    pageNumberContainer.innerHTML = '';

    for (var i = 0; i < galleryPages.length; i++) {
        let pageNumber = (i + 1);
        var btn = document.createElement("button");
        if (galleryPages[i].currentPage) {
            btn.classList.add("currentPage");
        }
        btn.classList.add("pageNumber");
        btn.innerHTML = pageNumber;

        pageNumberContainer.appendChild(btn);
    }

    numberButtons = document.querySelectorAll(".pageNumber");

    numberButtons.forEach((button) => {
        let buttonNumber = button.innerHTML.valueOf();

        button.addEventListener("click", function () {
            galleryPages.forEach((page) => {
                if (page.page == buttonNumber) {
                    removeCurrent();
                    page.currentPage = true;
                    renderCurrentPage();
                    renderPageNumbers();
                }
            })
        })
    })
}

function renderCurrentPage() {
    mainContent.innerHTML = '';

    for (var i = 0; i < galleryPages.length; i++) {
        var currentIt = galleryPages[i];
        if (currentIt.currentPage) {
            let div = document.createElement("div");
            div.classList.add("main--content-page");

            div.innerHTML = `
            <div class="page--row">
                    <div class="profile">
                        <div class="pfp">
                            <img src="${currentIt.element1.profile_url}" alt="pfp">
                            <p class="downloads">${currentIt.element1.downloads}K downloads</p>
                        </div>
                        <div class="profile--info">
                            <h3 class="name">Mr. Random</h3>
                            <p class="place">New York, NY</p>
                            <p class="occupation">Photographer, graphic designer</p>
                            <p class="website">www.website.com</p>
                        </div>
                    </div>
                    <div class="gallery">
                        <img src="${currentIt.element1.gallery[0]}">
                        <img src="${currentIt.element1.gallery[1]}">
                        <img src="${currentIt.element1.gallery[2]}">
                        <img src="${currentIt.element1.gallery[3]}">
                        <img src="${currentIt.element1.gallery[4]}">
                    </div>
                </div>
                <div class="page--row">
                    <div class="profile">
                        <div class="pfp">
                            <img src="${currentIt.element2.profile_url}" alt="pfp">
                            <p class="downloads">${currentIt.element2.downloads}K downloads</p>
                        </div>
                        <div class="profile--info">
                            <h3 class="name">Mr. Random</h3>
                            <p class="place">New York, NY</p>
                            <p class="occupation">Photographer, graphic designer</p>
                            <p class="website">www.website.com</p>
                        </div>
                    </div>
                    <div class="gallery">
                        <img src="${currentIt.element2.gallery[0]}">
                        <img src="${currentIt.element2.gallery[1]}">
                        <img src="${currentIt.element2.gallery[2]}">
                        <img src="${currentIt.element2.gallery[3]}">
                        <img src="${currentIt.element2.gallery[4]}">
                    </div>
                </div>
                <div class="page--row">
                    <div class="profile">
                        <div class="pfp">
                            <img src="${currentIt.element3.profile_url}" alt="pfp">
                            <p class="downloads">${currentIt.element3.downloads}K downloads</p>
                        </div>
                        <div class="profile--info">
                            <h3 class="name">Mr. Random</h3>
                            <p class="place">New York, NY</p>
                            <p class="occupation">Photographer, graphic designer</p>
                            <p class="website">www.website.com</p>
                        </div>
                    </div>
                    <div class="gallery">
                        <img src="${currentIt.element3.gallery[0]}">
                        <img src="${currentIt.element3.gallery[1]}">
                        <img src="${currentIt.element3.gallery[2]}">
                        <img src="${currentIt.element3.gallery[3]}">
                        <img src="${currentIt.element3.gallery[4]}">
                    </div>
                </div>
            `
            mainContent.appendChild(div);
        }
    }
}

function removeCurrent() {
    galleryPages.forEach((page) => {
        page.currentPage = false;
    }) 
}

function findCurrent() {
    for (var i = 0; i < galleryPages.length; i++) {
        if (galleryPages[i].currentPage) {
            return galleryPages[i].page;
        }
    }
}