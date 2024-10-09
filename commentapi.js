let loadButton = document.getElementById("load-comments-btn");
loadButton.addEventListener("click", onLoadComments);

function onLoadComments() {
    fetch("https://jsonplaceholder.typicode.com/comments")
        .then((response) => {
            console.log(response.status);
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Error: Comments not found");
            }
        })
        .then((commentData) => {
            console.log(commentData);
            renderComments(commentData);
        })
}

function renderComments(commentData) {
    const commentsContainer = document.getElementById("comments-display");
    commentsContainer.innerHTML = ''; 
    commentData.forEach((comment) => {
        const commentElement = document.createElement("div");
        commentElement.innerHTML = `
            <h4>NAME: ${comment.name}</h4>
            <p>EMAIL: ${comment.email}</p>
            <p>COMMENT: ${comment.body}</p>
            <hr>
        `;
        commentsContainer.appendChild(commentElement);
    });
}