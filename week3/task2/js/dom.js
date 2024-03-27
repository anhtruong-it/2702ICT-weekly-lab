$(document).ready(function () {
    $("#myForm").submit(function (event) {
        event.preventDefault();

        let userInput = $("#numberThumb").val();
        console.log("number: ", userInput);

        if (userInput > 5 || userInput < 1) {
            alert("Please enter a number from 1 to 5");
        } else {
            // Fetch JSON data
            $.get("data/photodata.json", function (data) {
                displayPhotos(userInput, data);
            });
        }
    });
});

function displayPhotos(userInput, jsonData) {
    var photoList = $("#photoList");
    photoList.empty();

    for (var i = 0; i < userInput; i++) {
        var photoBox = $("<div>").addClass("photo-box");

        // Create an anchor element for the photo link
        var photoLink = $("<a>").attr("href", "photos/" + jsonData[i].name);

        // Create an image element
        var imageElement = $("<img>").attr({
            src: "photos/" + jsonData[i].name,
            alt: jsonData[i].caption,
            width: 200,
            height: 200
        });

        // Create a figcaption element for the caption
        var figCaption = $("<figcaption>").text(jsonData[i].caption);

        // Append the image, figcaption, link, box to the anchor element
        photoLink.append(imageElement);
        photoBox.append(photoLink);
        photoBox.append(figCaption);
        photoList.append(photoBox);
    }
}
