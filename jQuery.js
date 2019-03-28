$(document).ready(function () {

    window.onresize = function () {
        document.location.reload(true);
    }

    var viewportWidth = $(window).width();
    var imgWidth = $(".carousel-item > img").width()

    if (viewportWidth >= 1440) {
        $(".carousel-item > img").addClass("w-100");
        $(".banner-content").css("width", 450);
        $(".banner-content").removeAttr("style");
        console.log("Screen size: lg");
    } else if (769 < viewportWidth && viewportWidth <= 1024) {
        $(".banner-content").removeAttr("style");
        $(".carousel-item > img").css("marginLeft", "unset");
        $(".carousel-item > img").css("marginLeft", -(imgWidth * 0.15));
        console.log("Screen size: md");
    } else if (426 < viewportWidth && viewportWidth <= 768) {
        $(".banner-content").removeAttr("style");
        $(".carousel-item > img").css("marginLeft", -(imgWidth * 0.23));
        $(".banner-content").css("width", 250);
        $(".content").removeClass("m-5");
        $(".content").addClass("mx-4");
        console.log("Screen size: tab");
    } else if (viewportWidth <= 426) {
        $(".carousel-item > img").css("marginLeft", -(imgWidth * 0.23));
        $("#feature3 > p").css("paddingRight", "unset");
        $("#feature1 > p").css("paddingLeft", "unset");
        $(".banner-content").removeClass(["ml-auto", "position-relative"]);
        $(".banner-content").css({marginTop: "1rem", width: "100%"});
        $("#callBack").removeClass("position-absolute");
        $(".carousel-caption").removeAttr("class");
        $("#bannerCaption").addClass(["px-5", "py-3"]);
        $("#bannerCaption").css({marginTop: "5rem", backgroundColor: "#00000022"});
        $("#about").css("margin", "2rem 0rem");
        console.log("Screen size: sm");
    }

    var cropHeight = $(".carousel-item > img").height();

    cropHeight = cropHeight - (cropHeight * 0.15);
    $(".carousel-item").height(cropHeight);

});