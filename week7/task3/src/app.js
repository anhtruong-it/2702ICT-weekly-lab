import $ from "jquery";
import styles from "./css/styles.css";
import html from './index.html';
import img from './assets/53352714423_c5d93081d5_w.jpg';
import { displayPhoto } from "./view.js";
import * as flickr from "./flickr.js";

function flickrReady(photos) {
    console.log(photos);
    displayPhoto(photos);
}

$(document).ready(function () {
    localPhoto();
    flickr.fetchPhoto(flickrReady);



}, "json");

function localPhoto() {
    $('#local-photo').html(`<img src=${img}>`);
}



