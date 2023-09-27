const items = [
    {
        name: "Apple iPhone",
        price: 100.00,
        photo: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2380&q=80"
    },
    {
        name: "iPhone SE Case",
        price: 7.95,
        photo: "https://source.unsplash.com/random/?iPhone,case"
    },
    {
        name: "iPhone Screen Protector",
        price: 4.95,
        photo: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2380&q=80"
    },
    {
        name: "XP Printer",
        price: 159.99,
        photo: "https://source.unsplash.com/random/?Printer"
    },
    {
        name: "PlayStation 5",
        price: 450.99,
        photo: "https://source.unsplash.com/random/?PlayStation5"
    }
];

var itemList = document.querySelector(".card--main-items");
var total = document.querySelector(".total");
var checkoutButton = document.querySelector(".btn--checkout");

renderItems();
calcTotal();
monitorQuantity();
monitorItems();

checkoutButton.addEventListener("click", function () {
    renderItems();
    calcTotal();
    monitorQuantity();
    monitorItems();
})

function renderItems() {
    itemList.innerHTML = "";
    items.forEach((item) => {
        let div = document.createElement("div");
        div.classList.add("item");

        let quantitySelected = Math.ceil(Math.random() * 5);

        div.innerHTML = `
            <img src="` + item.photo + `">
            <div class="item--info">
                <p class="item--name">` + item.name + `</p>
                <div class="item--info-options">
                    <select name="quantity" id="quantity-item1" class="quantity">
                    </select>
                    <button class="edit">
                        <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M20.8477 1.87868C19.6761 0.707109 17.7766 0.707105 16.605 1.87868L2.44744 16.0363C2.02864 16.4551 1.74317 16.9885 1.62702 17.5692L1.03995 20.5046C0.760062 21.904 1.9939 23.1379 3.39334 22.858L6.32868 22.2709C6.90945 22.1548 7.44285 21.8693 7.86165 21.4505L22.0192 7.29289C23.1908 6.12132 23.1908 4.22183 22.0192 3.05025L20.8477 1.87868ZM18.0192 3.29289C18.4098 2.90237 19.0429 2.90237 19.4335 3.29289L20.605 4.46447C20.9956 4.85499 20.9956 5.48815 20.605 5.87868L17.9334 8.55027L15.3477 5.96448L18.0192 3.29289ZM13.9334 7.3787L3.86165 17.4505C3.72205 17.5901 3.6269 17.7679 3.58818 17.9615L3.00111 20.8968L5.93645 20.3097C6.13004 20.271 6.30784 20.1759 6.44744 20.0363L16.5192 9.96448L13.9334 7.3787Z"
                                    fill="#989A9C"></path>
                            </g>
                        </svg>
                    </button>
                    <button class="remove">
                        <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z"
                                            fill="#989A9C"></path>
                            </g>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="item--price">
                <p></p>
            </div>
        </div>
        `

        var selectOptions = div.querySelector(".quantity");

        var priceElement = div.querySelector(".item--price > p");

        for (var i = 1; i < 100; i++) {
            let newOption = document.createElement("option");
            newOption.setAttribute("value", i);

            if (i == quantitySelected) {
                newOption.setAttribute("selected", "true");
            }
            newOption.innerHTML = i;

            selectOptions.appendChild(newOption);
        }

        priceElement.innerHTML = "$" + (item.price * quantitySelected).toFixed(2);
        
        itemList.appendChild(div);
    })
}

function calcTotal() {
    let tot = 0.00;

    let listItems = document.querySelectorAll(".item");

    listItems.forEach((it) => {
        let itemPrice = Number(it.querySelector(".item--price > p").innerHTML.substring(1));
        tot += itemPrice;
    })

    total.innerHTML = "$" + tot.toFixed(2);
}

function monitorQuantity() {
    let listItems = document.querySelectorAll(".item");

    listItems.forEach((it) => {
        let itemQuantityOptions = it.querySelector(".quantity");

        itemQuantityOptions.addEventListener("change", (event) => {
            updatePrice(event.target.value);
            calcTotal(); 
        })

        function updatePrice(x) {
            let itemName = it.querySelector(".item--name");
            const itemObject = items.find(({ name }) => name == itemName.innerHTML);

            let pricePerObject = itemObject.price;
            let priceElement = it.querySelector(".item--price > p");

            priceElement.innerHTML = "$" + (x * pricePerObject).toFixed(2);

        }
    })
}

function monitorItems() {
    var removeButtons = document.querySelectorAll(".remove");
    removeButtons.forEach((removeButton) => {
        removeButton.addEventListener("click", function() {
            let itemToBeRemoved = removeButton.parentElement.parentElement.parentElement;

            itemToBeRemoved.remove();
            calcTotal();
            monitorQuantity();
            monitorItems();
            
        });
    })

}