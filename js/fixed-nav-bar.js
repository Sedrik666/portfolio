$(document).ready(function(){
    $(".nav-bar").clone().appendTo(".fix-nav");
    $(".drop-down-menu").clone().appendTo(".fix-nav");
    $(".fix-nav .logo").attr("src", "img/logo-description.png").css("height", "60px");
    if($(document).scrollTop()>$("#header").outerHeight()){
        $('.fix-nav').addClass("fixed");

    }
    $(window).scroll(function () {
        if($(document).scrollTop()>=$("#header").outerHeight()-20){
            $('.fix-nav').addClass("fixed");
        }
        if($(document).scrollTop()<$("#header").outerHeight()){
            $('.fix-nav').removeClass("fixed");
        }
    });
});

