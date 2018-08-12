$(document).ready(function () {
    //start general
    M.AutoInit();
    $('.sidenav').sidenav();

    //start nice scroll
    if (window.matchMedia('(min-width: 1200px)').matches) {
        let color = '#ffeb3b';
        $("body").niceScroll({
            cursorcolor: color,
            cursorwidth: "10px",
            cursorborder: "none",
            cursorborderradius: "5px",
            scrollspeed: 100
        });
    }
    //end nice scroll

    //end general
    //start header
    $('header ul li a').on('click', function () {
        $(this).css('transition', 'all .2s ease');
        $('header ul li').children().removeClass('yellow-text accent-2');
        $(this).addClass('yellow-text accent-2');
    });
    //end header
    //start home
    $('.parallax-container').height($(window).height());
    if (window.matchMedia('(min-width: 1200px)').matches) {
        let userInfo = $('.user-info');
        let userInfoHeight = userInfo.innerHeight();
        userInfo.css({
            position: 'relative',
            top: (($(window).height() - userInfoHeight) / 2),
        });
    }
    //end home

});
