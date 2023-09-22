const players = [
    {

        img_url: "https://images.unsplash.com/photo-1575785662490-1e3ce6806ed5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=756&q=80",
        name: "Felix Wooph",
        votes: "22,343",
        recommendations: "18,220",
        earnings: 54000
    },
    {

        img_url: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=717&q=80",
        name: "Glenn",
        votes: "21,804",
        recommendations: "16,490",
        earnings: 42000
    },
    {

        img_url: "https://images.unsplash.com/photo-1547045662-e5a75e7238c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80",
        name: "Bea Meowler",
        votes: "20,201",
        recommendations: "11,003",
        earnings: 35000
    },
    {

        img_url: "https://plus.unsplash.com/premium_photo-1661892088256-0a17130b3d0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
        name: "Charles Waggener",
        votes: "18,654",
        recommendations: "10,054",
        earnings: 14000
    },
    {

        img_url: "https://images.unsplash.com/photo-1600826759668-8d637b785988?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        name: "Peter Parakeet",
        votes: "15,403",
        recommendations: "8,478",
        earnings: 9000
    },
    {

        img_url: "https://images.unsplash.com/photo-1575785662490-1e3ce6806ed5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=756&q=80",
        name: "Felix Wooph",
        votes: "22,343",
        recommendations: "18,220",
        earnings: 54000
    },
    {

        img_url: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=717&q=80",
        name: "Glenn",
        votes: "21,804",
        recommendations: "16,490",
        earnings: 42000
    },
    {

        img_url: "https://images.unsplash.com/photo-1547045662-e5a75e7238c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80",
        name: "Bea Meowler",
        votes: "20,201",
        recommendations: "11,003",
        earnings: 35000
    },
    {

        img_url: "https://plus.unsplash.com/premium_photo-1661892088256-0a17130b3d0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
        name: "Charles Waggener",
        votes: "18,654",
        recommendations: "10,054",
        earnings: 14000
    },
    {

        img_url: "https://images.unsplash.com/photo-1600826759668-8d637b785988?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        name: "Peter Parakeet",
        votes: "15,403",
        recommendations: "8,478",
        earnings: 9000
    },
]

const cardMain = document.querySelector(".card--main");
const viewAll = document.querySelector(".viewAll");

render();


function render() {
    var count = 1
    players.forEach(player => {
        const row = document.createElement('tr');
        row.classList.add("row--data");
        row.classList.add("row-" + count);
        if (count > 5) {
            row.classList.add("d-none");
        }

        row.innerHTML = `
            <td class="rank">
                <h3>${count}</h3>
                <img src="${player.img_url}">
            </td>
            <td>
                <p>${player.name.toUpperCase()}</p>
            </td>
            <td>
                <p class="number">${player.votes}</p>
                <p class="recs">${player.recommendations} recommendations</p>
            </td>
            <td>
                <p class="number">$${player.earnings}</p>
        `
        cardMain.appendChild(row);
        count++;
    })
}

viewAll.addEventListener("click", function () {
    var rows = cardMain.rows;

    for (var i = 0; i < rows.length; i++) {
        for (var j = 6; j < 11; j++) {
            if (rows[i].classList.contains("row-" + j)) {
                rows[i].classList.toggle("d-auto");
                rows[i].classList.toggle("d-none");
                break;
            }
        }
    }

    if (viewAll.innerHTML != "View Top 5") {
        viewAll.innerHTML = "View Top 5";
    }
    else {
        viewAll.innerHTML = "View All"
    }
})
