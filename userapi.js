let loadUsersButton = document.getElementById("load-users-btn");
loadUsersButton.addEventListener("click", onLoadUsers);

function onLoadUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            console.log(response.status);
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Error: Users not found");
            }
        })
        .then((userData) => {
            console.log(userData);
            renderUsers(userData);
        })
}

function renderUsers(userData) {
    const usersContainer = document.getElementById("users-container");
    usersContainer.innerHTML = '';
    userData.forEach((user) => {
        let userCard = document.createElement("div");
        userCard.classList.add("user-profile");
        userCard.style.margin = "10px";
        userCard.style.padding = "10px";
        userCard.style.border = "1px solid black";

        userCard.innerHTML = `
            <h3>${user.name}</h3>
            <p>Username: ${user.username}</p>
            <p>Email: ${user.email}</p>
            <p>ID: ${user.id}</p>
            <p>Address: ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
            <p>Phone: ${user.phone}</p>
        `;
        usersContainer.appendChild(userCard);
    });
}