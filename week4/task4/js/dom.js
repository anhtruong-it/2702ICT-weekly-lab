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
    let photoData = data.photos.photo.map(photo => ({ id: photo.id, title: photo.title })).slice(0, number);
    console.log("photo data: ", photoData);
    photoData.forEach(photo => {
        getSizes(photo);
    });
}

function getSizes(photo) {
    let getSizesStr = "https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&format=json&nojsoncallback=1" + "&" + API_KEY + "&photo_id=" + photo.id;

    $.get(getSizesStr, function (data) {
        let thumb = data.sizes.size[5].source;
        let photos = [{ file: thumb, title: photo.title }];
        console.log("caption: ", photo.title);
        displayPhoto(photos);
    });
}

function displayPhoto(photos) {
    let htmlStr = `<figure data-full="${photos[0].file}">
                        <img src="${photos[0].file}" alt="${photos[0].title}">
                        <figcaption>${photos[0].title}</figcaption>
                   </figure><br>`;

    $("#photos").append(htmlStr);

    $("figure").last().click(function () {
        $("#modal-container").css('display', 'block');
        $("#modal-content").attr('src', $(this).attr('data-full'));
        console.log("title: ", photos[0].title);
        $("#modal-caption").text(photos[0].title);
    });
}
