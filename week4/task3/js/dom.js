const API_KEY = "api_key=dc140afe3fd3a251c2fdf9dcd835be5c";

$(document).ready(function () {
    let requestStr = "https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&format=json&nojsoncallback=1&per_page=20" + "&" + API_KEY;
    $.get(requestStr, function (data) {
        console.log("data: ", data);
        fetchPhoto(data, 5);
    });

    $("#modal-close").click(function () {
        console.log("close clicked");
        $("#modal-container").css('display', 'none');
        $("#modal-content").attr('src', '');
    })
}, "json");

function fetchPhoto(data, number) {
    let photoId = data.photos.photo.map(photo => photo.id).slice(0, number);
    console.log("photo id: ", photoId);
    photoId.forEach(e => {
        getSizes(e);
    })
}

function getSizes(photoId) {
    let getSizesStr = "https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&format=json&nojsoncallback=1" + "&" + API_KEY + "&photo_id=" + photoId;
    $.get(getSizesStr, function (data) {
        let thumb = data.sizes.size[5].source;
        let photos = [{ file: thumb, title: "whatever" }];
        displayPhoto(photos);
    });
}

function displayPhoto(photos) {
    let htmlStr = `<figure data-full="${photos[0].file}"><img src = "${photos[0].file}" alt="${photos[0].title}"><figcaption>${photos[0].title}</figcaption></figure><br>`;
    $("#photos").append(htmlStr);
    $("figure").each(function (index) {
        $(this).click(function () {
            $("#modal-container").css('display', 'block');
            $("#modal-content").attr('src', $(this).attr('data-full'));
            $("#modal-caption").text(photos[0].title);
        });
    });

}