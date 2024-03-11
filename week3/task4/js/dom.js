$(document).ready(function () {
    const fetchPromise = fetch("http://api.imgflip.com/get_memes");
    fetchPromise.then(respone => {
        if (respone.ok) {
            return respone.json();
        } else {
            throw new Error(respone.status);
        }
    }).then(data => {
        //console.log("data: ", data.data.memes);
        //$("#meme-images").html("<p>" + data.data.memes[0].url + "</p>");
        displayPhotos(data.data.memes, 10);
    }).catch(error => {
        console.error(error);
    });
});

function displayPhotos(urls, number) {
    var photoList = document.getElementById("photoList");

    photoList.innerHTML = "";

    for (var i = 0; i < number; i++) {
        var photoBox = document.createElement("div");
        photoBox.classList.add("photo-box");

        // Create an anchor element for the photo link
        var photoLink = document.createElement("a");
        photoLink.href = urls[i].url;

        // Create an image element
        var imageElement = document.createElement("img");
        imageElement.src = urls[i].url;
        imageElement.width = 200;
        imageElement.height = 200;


        // Append the image, figcaption, link, box to the anchor element
        photoLink.appendChild(imageElement);
        photoBox.appendChild(photoLink);
        photoList.appendChild(photoBox);
    }
}