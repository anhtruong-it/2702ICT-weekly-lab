import $ from "jquery";
import styles from "./css/styles.css";
import html from './index.html';
import img from './assets/53352714423_c5d93081d5_w.jpg';

let API_KEY = "api_key=dc140afe3fd3a251c2fdf9dcd835be5c";

$(document).ready(function () {
    localPhoto();
    let requestStr = "https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&format=json&nojsoncallback=1&per_page=20" + "&" + API_KEY;
    $.get(requestStr, function (data) {
        console.log("data: ", data);
        fetchPhoto(data);
    })
}, "json");

function localPhoto() {
    $('#local-photo').html(`<img src=${img}>`);
}

function fetchPhoto(data) {
    let photoId = data.photos.photo[0].id
    console.log("photo id: ", photoId);
    getSizes(photoId);
}

function getSizes(photoId) {
    let getSizesStr = "https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&format=json&nojsoncallback=1" + "&" + API_KEY + "&photo_id=" + photoId;
    $.get(getSizesStr, function (data) {
        let thumb = data.sizes.size[5].source;
        let photos = [{ file: thumb, title: "whatever" }];
        console.log("photos: ", photos);
        displayPhoto(photos);
    });
}

function displayPhoto(photos) {
    var photo = $("#photo");
    var imageElement = document.createElement("img");
    imageElement.src = photos[0].file;
    photo.append(imageElement);
}