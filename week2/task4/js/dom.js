document.addEventListener("DOMContentLoaded", function() {
    displayCategories("");
    document.getElementById("myForm").addEventListener("submit", function(event) {
        event.preventDefault();
        let userInput = document.getElementById("numberThumb").value;
        console.log("number: ", !isNaN(userInput));

        if (!isNaN(userInput)) {
            displayPhotos(userInput);
        } else if (imageList.includes(userInput)) {
            displayPhotoWithCaption(userInput);
            console.log("name: ", userInput);
        } else {
            displayCategories(userInput);
        }        
    });
});

const imageList = ["City view", "Ferris view", "Beach view", "School view", "Home view"];

function displayPhotos(userInput) {
    var photoList = document.getElementById("photoList");

    photoList.innerHTML = "";

    for (var i = 0; i < userInput; i++) {
        var photoBox = document.createElement("div");
        photoBox.classList.add("photo-box");

        // Create an anchor element for the photo link
        var photoLink = document.createElement("a");
        photoLink.href = "photos/DSC01049.JPG";

        // Create an image element
        var imageElement = document.createElement("img");
        imageElement.src = "photos/DSC01049.JPG";
        imageElement.alt = "City view";
        imageElement.width = 200;
        imageElement.height = 200;

        // Create a figcaption element for the caption
        var figCaption = document.createElement("figcaption");
        figCaption.textContent = "City view";

        // Append the image, figcaption, link, box to the anchor element
        photoLink.appendChild(imageElement);
        photoBox.appendChild(photoLink);
        photoBox.appendChild(figCaption);
        photoList.appendChild(photoBox);
    }
}

function displayCategories(title) {
    var cateList = document.getElementById("categoryList");
    const defaultCategories = ["General", "Natural", "Macro", "Portrait", "Sport", "Astrophotography"];
    cateList.innerHTML = "";

    window.addEventListener("beforeunload", function() {
        this.localStorage.setItem("categories", JSON.stringify(defaultCategories));
    })
    
    let categories = JSON.parse(localStorage.getItem("categories")) || defaultCategories;
    
    if (title != "") {
        categories.push(title);

        localStorage.setItem("categories", JSON.stringify(categories));
    } else {
        localStorage.setItem("categories", JSON.stringify(defaultCategories));
    }
    console.log("categories: ", categories);

    categories.forEach(element => {
        var cateLink = document.createElement("a");
        cateLink.href = "#";

        var breakLine = document.createElement("br");

        var name = document.createElement("name");
        name.textContent = element;

        cateLink.appendChild(name);
        cateLink.appendChild(breakLine);
        cateList.appendChild(cateLink);
    });
}

function displayPhotoWithCaption(caption) {
    var photoList = document.getElementById("photoList");

    photoList.innerHTML = "";
    let imageArray = [
        { name: "DSC01049.JPG", caption: "City view"},
        { name: "DSC01066.JPG", caption: "Ferris view"},
        { name: "DSC02511.JPG", caption: "School view"},
        { name: "DSC03810.JPG", caption: "Home view"},
        { name: "DSC05750.JPG", caption: "Beach view"},
    ]
    let imgInfor = imageArray.find(element => element.caption === caption);
    
        var photoBox = document.createElement("div");
        photoBox.classList.add("photo-box");

        // Create an anchor element for the photo link
        var photoLink = document.createElement("a");
        photoLink.href = `photos/${imgInfor.name}`;

        // Create an image element
        var imageElement = document.createElement("img");
        imageElement.src = `photos/${imgInfor.name}`;
        imageElement.alt = caption;
        imageElement.width = 200;
        imageElement.height = 200;

        // Create a figcaption element for the caption
        var figCaption = document.createElement("figcaption");
        figCaption.textContent = caption;

        // Append the image, figcaption, link, box to the anchor element
        photoLink.appendChild(imageElement);
        photoBox.appendChild(photoLink);
        photoBox.appendChild(figCaption);
        photoList.appendChild(photoBox);
}

