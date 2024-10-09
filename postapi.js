let loadPostsButton = document.getElementById("load-posts-btn");
loadPostsButton.addEventListener("click", onLoadPosts);

function onLoadPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
            console.log(response.status);
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Error: Posts not found");
            }
        })
        .then((postData) => {
            console.log(postData);
            renderPosts(postData);
        })
}

function renderPosts(postData) {
    const postsContainer = document.getElementById("posts-container");
    postsContainer.innerHTML = ''; 
    postData.forEach((post) => {
        const postElement = document.createElement("div");
        postElement.classList.add("post-item");
        postElement.style.margin = "10px";
        postElement.style.padding = "10px";
        postElement.style.border = "1px solid black";
        postElement.style.display = "block";
        postElement.innerHTML = `
            <h4>ID: ${post.id}</h4>
            <p>Title: ${post.title}</p>
            <p>Body: ${post.body}</p>
            <hr>
        `;
        postsContainer.appendChild(postElement);
    });
}