let username = "auto";

let userElement = $(".uzr:contains('" + username + "')");

if (userElement.length > 0) {
    userElement.addClass("custom-class");
}
