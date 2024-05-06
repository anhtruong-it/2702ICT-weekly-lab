import $ from "jquery";
import thumbs from "./templates/photos.handlebars";
export function displayPhoto(photosarr) {
    console.log(photosarr);
    let data = {photos: photosarr};
    let htmlStr = thumbs(data);
    $("#photo").html(htmlStr);
}