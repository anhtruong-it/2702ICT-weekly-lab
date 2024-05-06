import $ from "jquery";
export function displayPhoto(photos) {
    var photo = $("#photo");
    console.log("photo object: ", photos);
    var imageElement = document.createElement("img");
    imageElement.src = photos[0].file;
    photo.append(imageElement);
}