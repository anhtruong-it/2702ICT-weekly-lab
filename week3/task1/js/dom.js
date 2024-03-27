$(document).ready(function() {
    $("#myForm").submit(function(event) {
        event.preventDefault();

        let userInput = $("#numberThumb").val();
        console.log("number: ", userInput);
        displayPhotos(userInput);
    });
});

function displayPhotos(userInput) {
    var photoList = $("#photoList");
    photoList.empty();

    for (var i = 0; i < userInput; i++) {
        var photoBox = $("<div>").addClass("photo-box");

        var photoLink = $("<a>").attr("href", "photos/DSC01049.JPG");

        var imageElement = $("<img>").attr({
            src: "photos/DSC01049.JPG",
            alt: "City view",
            width: 200,
            height: 200
        });

        var figCaption = $("<figcaption>").text("City view");

        photoLink.append(imageElement);
        photoBox.append(photoLink);
        photoBox.append(figCaption);
        photoList.append(photoBox);
    }
}
