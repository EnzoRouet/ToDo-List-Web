const form = document.getElementById("form");
const input = document.getElementById("input");
const liste = document.querySelector("ul");

function store() {
  window.localStorage.toDoList = liste.innerHTML;
}

function loadStore() {
  liste.innerHTML = window.localStorage.toDoList;
}

if (localStorage.toDoList) {
  loadStore();
} else {
  liste.innerHTML = `<li>Cliquez sur un todo pour le supprimer</li>`;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  liste.innerHTML += `<li>${input.value}</li>`;
  input.value = null;
  store();
});

liste.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    if (e.target.classList.contains("checked")) {
      e.target.remove();
    } else {
      e.target.classList.add("checked");
    }
  }
  store();
});
