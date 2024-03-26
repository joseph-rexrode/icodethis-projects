const STAFF = [
  {
    name: "Oscar Isaac",
    roles: ["actor"]
  },
  {
    name: "Mark Hamill",
    roles: ["actor"]
  },
  {
    name: "Daisy Ridley",
    roles: ["actor"]
  },
  {
    name: "John Boyega",
    roles: ["actor"]
  },
  {
    name: "Kelly Marie Tran",
    roles: ["actor"]
  },
  {
    name: "Rian Johnson",
    roles: ["director", "screenwriter"]
  },
  {
    name: "Kathleen Kennedy",
    roles: ["producer"]
  },
  {
    name: "Ram Bergman",
    roles: ["producer"]
  },
];

renderStaff()

function renderStaff() {

  STAFF.forEach(person => {
    for (let i = 0; i < person.roles.length; i++) {
      let newListElement = document.createElement("li");
      let list = document.getElementById(person.roles[i]);
      newListElement.innerHTML = person.name;
      list.appendChild(newListElement);
    }
  })
}