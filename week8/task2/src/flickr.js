import $ from "jquery";
let API_KEY = "api_key=dc140afe3fd3a251c2fdf9dcd835be5c";
let ready_cb;

export function fetchPhoto(ready) {
    let requestStr = "https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&format=json&nojsoncallback=1&per_page=20" + "&" + API_KEY;
    $.get(requestStr, function (data) {
        console.log("data: ", data);
        let photoId = data.photos.photo[0].id
        console.log("photo id: ", photoId);
        getSizes(photoId, ready);
    })
}

export function getSizes(photoId, ready) {
    ready_cb = ready;
    let getSizesStr = "https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&format=json&nojsoncallback=1" + "&" + API_KEY + "&photo_id=" + photoId;
    $.get(getSizesStr, function (data) {
        let thumb = data.sizes.size[5].source;
        let photos = [{ file: thumb, title: "whatever" }];
        console.log("photos: ", photos);
        ready_cb(photos);
    });
}