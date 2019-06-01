$(document).ready(function () {

    var pageWP = $('.page-wrapper');
    var toggleICON = $('.navbar-toggler-icon i');

    // $('.dropdown-toggle').dropdown();
    $('.dropdown').hover(function (e) {
        $('.dropdown-menu', this).stop().slideDown(100, 'linear');
    }, function () {
        $('.dropdown-menu', this).stop().slideUp(100, 'linear');
    });

    $('.navbar-toggler-icon').click(() => {
        if (isMobile()) {
            onCollapsed();
        } else {
            onFullscreenMode();
        }
    });

    $('.page-wrapper').click(function () {
        if (isMobile() && !pageWP.hasClass('collapse-sidebar')) {
            console.log(1);
            onCollapsed();
        }
    });

    function isMobile() {
        return window.matchMedia('(max-width: 974px)').matches;
    }

    function onFullscreenMode() {
        pageWP.removeClass('collapse-sidebar');
        pageWP.toggleClass('full');
        if (pageWP.hasClass('full')) {
            toggleICON.addClass('icon-menu');
            toggleICON.removeClass('icon-x');
            return true;
        }
        toggleICON.removeClass('icon-menu');
        toggleICON.toggleClass('icon-x');
    }

    function onCollapsed() {
        console.log(2);
        pageWP.removeClass('full');
        pageWP.toggleClass('collapse-sidebar');
    }
});