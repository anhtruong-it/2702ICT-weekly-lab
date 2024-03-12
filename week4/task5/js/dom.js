const API_KEY = "api_key=dc140afe3fd3a251c2fdf9dcd835be5c";
$(document).ready(function () {
    $("#myForm").submit(function (event) {
        event.preventDefault();
        const userInput = $("#numberThumb").val();
        console.log("input: ", userInput);
        let requestStr2 = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=dc140afe3fd3a251c2fdf9dcd835be5c&text="${userInput}"&per_page=20&format=json&nojsoncallback=1`;
        $.get(requestStr2, function (data) {
            if (data.photos.photo.length == 0) {
                alert("no matched text");
            } else {
                fetchPhoto(data, data.photos.photo.length);
            }
        })

        $("#modal-close").click(function () {
            console.log("close clicked");
            $("#modal-container").css('display', 'none');
            $("#modal-content").attr('src', '');
        })
    });
}, "json");

function fetchPhoto(data, number) {
    $("#photos").empty();
    let photoData = data.photos.photo.map(photo => ({ id: photo.id, title: photo.title })).slice(0, number);
    photoData.forEach(photo => {
        getSizes(photo);
    });
}

function getSizes(photo) {
    let getSizesStr = "https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&format=json&nojsoncallback=1" + "&" + API_KEY + "&photo_id=" + photo.id;

    $.get(getSizesStr, function (data) {
        let thumb = data.sizes.size[1].source;
        let photos = [{ file: thumb, title: photo.title }];
        displayPhoto(photos);
    });
}

function displayPhoto(photos) {
    let htmlStr = `<div class="photo-box">
                     <figure data-full="${photos[0].file}">
                        <img src="${photos[0].file}" alt="${photos[0].title}">
                        <figcaption>${photos[0].title}</figcaption>
                    </figure>
                   </div>`;

    $("#photos").append(htmlStr);

    $("figure").last().click(function () {
        $("#modal-container").css('display', 'block');
        $("#modal-content").attr('src', $(this).attr('data-full'));
        $("#modal-caption").text(photos[0].title);
    });
}
