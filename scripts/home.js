$(function () {
    $(document).scroll(function () {
        var $carousel = $("#carousel");
        $carousel.toggleClass("scrolled", $(this).scrollTop() > window.innerHeight);
        var $welcome = $("#welcome");
        $welcome.toggleClass("scrolled", $(this).scrollTop() > window.innerHeight);
        var $main = $(".main");
        $main.toggleClass("scrolled", $(this).scrollTop() > window.innerHeight);

    });
})