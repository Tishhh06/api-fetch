let loadPhotosButton = document.getElementById("load-photos-btn");
loadPhotosButton.addEventListener("click", onLoadPhotos);

function onLoadPhotos() {
    fetch("https://jsonplaceholder.typicode.com/photos")
        .then((response) => {
            console.log(response.status);
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Error: Photos not found");
            }
        })
        .then((photoData) => {
            console.log(photoData);
            renderPhotos(photoData);
        })
}

function renderPhotos(photoData) {
    const photosDiv = document.getElementById("photos-container");
    photosDiv.innerHTML = ''; // Clear previous content
    photoData.forEach((photo) => {
        let photoElement = document.createElement("img");
        photoElement.classList.add("photo-item");
        photoElement.style.margin = "10px";
        photoElement.style.padding = "10px";
        photoElement.style.border = "1px solid black";
        photoElement.style.width = "200px";
        photoElement.style.display = "block";
        photoElement.src = photo.url;
        photosDiv.appendChild(photoElement);
    });
}