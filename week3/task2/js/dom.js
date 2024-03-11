$(document).ready(function () {
    document.getElementById("myForm").addEventListener("submit", function (event) {
        event.preventDefault();
        let userInput = document.getElementById("numberThumb").value;
        console.log("number: ", userInput);

        if (userInput > 5 || userInput < 1) {
            alert("PLease enter the number from 1 to 5");
        } else {

            function displayPhotos(userInput, jsonData) {
                var photoList = document.getElementById("photoList");

                photoList.innerHTML = "";

                for (var i = 0; i < userInput; i++) {
                    var photoBox = document.createElement("div");
                    photoBox.classList.add("photo-box");

                    // Create an anchor element for the photo link
                    var photoLink = document.createElement("a");
                    photoLink.href = "photos/" + jsonData[i].name;

                    // Create an image element
                    var imageElement = document.createElement("img");
                    imageElement.src = "photos/" + jsonData[i].name;
                    imageElement.alt = jsonData[i].caption;
                    imageElement.width = 200;
                    imageElement.height = 200;

                    // Create a figcaption element for the caption
                    var figCaption = document.createElement("figcaption");
                    figCaption.textContent = jsonData[i].caption;

                    // Append the image, figcaption, link, box to the anchor element
                    photoLink.appendChild(imageElement);
                    photoBox.appendChild(photoLink);
                    photoBox.appendChild(figCaption);
                    photoList.appendChild(photoBox);
                }
            }

            // Fetch JSON data
            $.get("data/photodata.json", function (data) {
                displayPhotos(userInput, data);
            })
        }
    });
});