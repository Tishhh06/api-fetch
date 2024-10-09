let fetchButton = document.getElementById("get-albums-btn");
fetchButton.addEventListener("click", handleFetchClick);

function handleFetchClick() {
    fetch("https://jsonplaceholder.typicode.com/albums")
        .then((response) => {
            console.log(response.status);
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Albums not found");
            }
        })
        .then((albumData) => {
            console.log(albumData);
            renderAlbums(albumData);
        })
}

function renderAlbums(albumData) {
    const albumsDiv = document.getElementById("albums-container");
    albumsDiv.innerHTML = ''; 
    albumData.forEach(album => {
        const albumItem = document.createElement("li");
        albumItem.classList.add("album-item");
        albumItem.style.margin = "10px";
        albumItem.style.padding = "10px";
        albumItem.style.border = "1px solid black";
        albumItem.style.width = "200px";
        albumItem.style.display = "block";
        albumItem.innerText = album.title;
        albumsDiv.appendChild(albumItem);
    });
}