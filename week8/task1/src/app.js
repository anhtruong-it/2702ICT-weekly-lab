import $ from "jquery";
import hello from "./templates/hello.handlebars";
import thumbnails from "./templates/photos.handlebars";
import photo1 from "./assets/DSC01049.JPG";

let name = {
    loggedin: true,
    first: "Bob",
    last: "<br>Hawk<br>"
};

let data = {
    photos:
    [
        {
            src: photo1, title: "photo1"
        },
        {
            src: photo1, title: "photo2"
        },
        {
            src: photo1, title: "photo3"
        }
    ]
};

$(document).ready(function() {
    $("#photo").html(thumbnails(data));
    let temp = hello(name);
    $("#hello").html(temp);
});