$(document).ready(function() {
    // ========VARIABLES==============

    // =========LOCAL FUNCTIONS=======
    function changeHopePageheight() {
        // set homepage height equal to window height
        $('.top1').css({ "height": $(window).height(), "padding-top": ($(window).innerHeight() / 2 - $('.top1 .container.text-center').height() / 2) });
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    }
    changeHopePageheight();
    // ======EVENT FUNCTIONS==========
    $(window).resize(function() {
        changeHopePageheight();
    });
    $('.menu-button').click(function(e) {
        e.preventDefault();
        // $('.menu').css('display', 'block');
        $(".menu").animate({
            right: "0",
        }, 500, function() {
            // Animation complete.
        });
    });
    $('.exit-menu-button').click(function(e) {
        e.preventDefault();
        $(".menu").animate({
            right: "-300px",
        }, 500, function() {
            // Animation complete.
        });
    });
    $('.menu li.list-group-item a').click(function(e) {
        e.preventDefault();
        $('.menu li.list-group-item').removeClass('active');
        $($(this).parent()).addClass('active');
        $(".menu").animate({
            right: "-300px",
        }, 500, function() {
            // Animation complete.
        });
    });
});