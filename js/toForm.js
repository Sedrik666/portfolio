$(document).ready(function () {
    $('.to-about-us, .to-advantages, .to-portfolio, .to-team, .to-form, .to-footer').click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
            $('html').animate({ scrollTop: destination }, 2000);
    });
});