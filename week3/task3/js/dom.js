$(document).ready(function () {
    $.get("https://api.nasa.gov/planetary/apod?api_key=UvoMW3iN0toRkSBkvcuy6Dtr53VwZdWKdq4Fowww", function(data) {
        console.log("data: ", data);
        $("#quote-jq").html("<img src= '"+ data.url +"'>");
    }, "json");

    const fetchPromise = fetch("https://api.nasa.gov/planetary/apod?api_key=UvoMW3iN0toRkSBkvcuy6Dtr53VwZdWKdq4Fowww");
    fetchPromise.then(respone => {
        if (respone.ok) {
            return respone.json();
        } else {
            throw new Error(respone.status);
        }
    }).then(data => {
        console.log("url: ", data.hdurl);
        $("#quote-fetch").html("<img src= '"+ data.hdurl +"'>");
    }).catch(error => {
        console.error(error);
    });
 });