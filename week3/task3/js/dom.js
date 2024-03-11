$(document).ready(function () {
    $.get("http://quotes.rest/qod.json?category=inspire", function(data) {
        console.log("data: ", data);
        $("#quote-jq").html("<p>" + data + "</p>");
    }, "json");

    const fetchPromise = fetch("http://quotes.rest/qod.json?category=inspire");
    fetchPromise.then(respone => {
        if (respone.ok) {
            return respone.json();
        } else {
            throw new Error(respone.status);
        }
    }).then(data => {
        $("#quote-jq").html("<p>" + data + "</p>");
    }).catch(error => {
        console.error(error);
    });
});