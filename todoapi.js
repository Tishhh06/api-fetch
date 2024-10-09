let loadTodosButton = document.getElementById("load-todos-btn");
loadTodosButton.addEventListener("click", onLoadTodos);

function onLoadTodos() {
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => {
            console.log(response.status);
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Error: Todos not found");
            }
        })
        .then((todosData) => {
            console.log(todosData);
            renderTodos(todosData);
        })
}

function renderTodos(todosData) {
    const todosContainer = document.getElementById("todos-container");
    todosContainer.innerHTML = '';

    todosData.forEach((todo) => {
        let todoCard = document.createElement("div");
        todoCard.classList.add("todo-item");
        todoCard.style.margin = "10px";
        todoCard.style.padding = "10px";
        todoCard.style.border = "1px solid black";

        todoCard.innerHTML = `
        <h3>${todo.title}</h3>
        <p>Completed: ${todo.completed}</p>
        <p>ID: ${todo.id}</p>
        `;

        todosContainer.appendChild(todoCard);
    });
}