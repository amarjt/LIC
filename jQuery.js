$(document).ready(function () {

    window.onresize = function () {
        document.location.reload(true);
    }

    var viewportWidth = $(window).width();
    var imgWidth = $(".carousel-item > img").width()

    // setting "height" to crop banner image as per screen width

    // var cropHeight = $(".carousel-item > img").height();
    // console.log(cropHeight);

    // cropHeight = cropHeight - (cropHeight * 0.15);
    // $(".carousel-item").height(cropHeight);

    // if (viewportWidth <= 426) {
    //     $(".banner-content").removeClass("position-relative");
    //     $(".banner-content").removeClass("ml-auto");
    //     $("#callBack").removeClass("position-absolute");
    //     $(".carousel-caption").removeAttr("class");
    //     $(".banner-content").removeAttr("style");
    //     $("#bannerCaption").addClass(className);
    // } else if (426 < viewportWidth <= 768) {
    //     $(".banner-content").removeAttr("style");
    //     $(".carousel-item > img").css("marginLeft", -(imgWidth * 0.23));
    //     $(".banner-content").css("width", 250);
    //     alert("true");
    //     $(".content").removeClass("m-5");
    //     $(".content").addClass("mx-4"); 
    // } else if (768 < viewportWidth <= 1024) {
    //     $(".banner-content").removeAttr("style");
    //     $(".carousel-item > img").css("marginLeft", -(imgWidth * 0.15));
    // } else if (viewportWidth >= 1440) {
    //     $(".carousel-item > img").addClass("w-100");
    //     $(".banner-content").css("width", 450);
    //     $(".banner-content").removeAttr("style");
    // }

    if (viewportWidth >= 1440) {
        $(".carousel-item > img").addClass("w-100");
        $(".banner-content").css("width", 450);
        $(".banner-content").removeAttr("style");
        alert("true");
    } else if (769 < viewportWidth < 1025) {
        $(".banner-content").removeAttr("style");
        $(".carousel-item > img").css("marginLeft", -(imgWidth * 0.15));
    } else if (426 < viewportWidth < 768) {
        $(".banner-content").removeAttr("style");
        $(".carousel-item > img").css("marginLeft", -(imgWidth * 0.23));
        $(".banner-content").css("width", 250);
        alert("true");
        $(".content").removeClass("m-5");
        $(".content").addClass("mx-4");
    }

    // else if (viewportWidth <= 425) {
    //     $(".banner-content").removeClass("position-relative");
    //     $(".banner-content").removeClass("ml-auto");
    //     $("#callBack").removeClass("position-absolute");
    //     $(".carousel-caption").removeAttr("class");
    //     $(".banner-content").removeAttr("style");
    //     $("#bannerCaption").addClass(className);
    // }

    var cropHeight = $(".carousel-item > img").height();
    console.log(cropHeight);

    cropHeight = cropHeight - (cropHeight * 0.15);
    $(".carousel-item").height(cropHeight);



});