let API_KEY = "api_key=dc140afe3fd3a251c2fdf9dcd835be5c";
$(document).ready(function () {
    let requestStr = "https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&format=json&nojsoncallback=1&per_page=20" + "&" + API_KEY;
    $.get(requestStr, function (data) {
        console.log("data: ", data);
        fetchPhoto(data, 5);
    })
}, "json");

function fetchPhoto(data, number) {
    let photoId = data.photos.photo
    console.log("photo id: ", photoId);
    photoId.slice(0, number).forEach(e => {
        getSizes(e.id);
    })
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
    var photo = $("#photos");
    
    var imageElement = document.createElement("img");
    imageElement.src = photos[0].file;

    photo.append(imageElement);
}