var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

// Transform JSon in Array
var todos = JSON.parse(localStorage.getItem("list_todos")) || []; // Is necessary parse the Json to show in our aplication

renderTodos();

function renderTodos() {
  listElement.innerHTML = ""; // Removing the info before insert
  for (todo of todos) {
    var todoElement = document.createElement("li");
    var todoText = document.createTextNode(todo);

    var linkElement = document.createElement("a");
    var linkText = document.createTextNode("Excluir");
    var pos = todos.indexOf(todo);

    linkElement.setAttribute("onclick", "removeTodo(" + pos + ")"); // Creating and pass the pos
    linkElement.setAttribute("href", "#");
    linkElement.appendChild(linkText);

    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);
    listElement.appendChild(todoElement);
  }
}

buttonElement.onclick = addTodo;

function addTodo() {
  var todoText = inputElement.value;

  todos.push(todoText);
  inputElement.value = "";
  renderTodos();
  saveToStorage();
}

function removeTodo(position) {
  todos.splice(position, 1); // recive the positon, remove the next
  renderTodos();
  saveToStorage();
}

// Using localStorage
function saveToStorage() {
  // To view -> Aplication -> Storage -> Local
  localStorage.setItem("list_todos", JSON.stringify(todos)); // Transform the vetor in string
}
