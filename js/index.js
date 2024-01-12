$(document).ready(function () {
    let dark_mode = false;

    $("#button input").click(function () {
        if (!dark_mode) {
            $("body")
                .css("background", "#212121")
                .css("color", "#ffffff");
            $(".moonsun img").attr("src", "img/moon.png");
            dark_mode = true;
        } else {
            $("body")
                .css("background", "#ffffff")
                .css("color", "#212121");
            $(".moonsun img").attr("src", "img/sun.png"); 
            dark_mode = false;
        }
    });
});
