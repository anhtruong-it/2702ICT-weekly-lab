// wait to fully load
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("myForm").addEventListener("submit", function(event) {
        event.preventDefault();

        // get number from search bar
        let userInput = document.getElementById("numberThumb").value;
        console.log("number: ", userInput);
        displayPhotos(userInput);
    });
});

// function to display photo on html page
function displayPhotos(userInput) {
    var photoList = document.getElementById("photoList");

    photoList.innerHTML = "";

    for (var i = 0; i < userInput; i++) {
        var photoBox = document.createElement("div");
        photoBox.classList.add("photo-box");

        // Create an anchor element for the photo link
        var photoLink = document.createElement("a");
        photoLink.href = "photos/DSC01049.JPG";

        // Create an image element
        var imageElement = document.createElement("img");
        imageElement.src = "photos/DSC01049.JPG";
        imageElement.alt = "City view";
        imageElement.width = 200;
        imageElement.height = 200;

        // Create a figcaption element for the caption
        var figCaption = document.createElement("figcaption");
        figCaption.textContent = "City view";

        // Append the image, figcaption, link, box to the anchor element
        photoLink.appendChild(imageElement);
        photoBox.appendChild(photoLink);
        photoBox.appendChild(figCaption);
        photoList.appendChild(photoBox);
    }
}