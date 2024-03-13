document.addEventListener("DOMContentLoaded", function() {
    displayCategories("");

    document.getElementById("myForm").addEventListener("submit", function(event) {
        event.preventDefault();

        let userInput = document.getElementById("numberThumb").value;
        console.log("number: ", !isNaN(userInput));

        // check valid input
        if (!isNaN(userInput)) {
            displayPhotos(userInput);
        } else {
            displayCategories(userInput);
        }        
    });
});

function displayPhotos(userInput) {
    var photoList = document.getElementById("photoList");

    // remove old contents
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

// function to display the catgories
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


