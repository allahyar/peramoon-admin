$(document).ready(function () {
    // $('.dropdown-toggle').dropdown();
    $('.dropdown').hover(function (e) {
        $('.dropdown-menu', this).stop().slideDown(100,'linear');
    }, function () {
        $('.dropdown-menu', this).stop().slideUp(100,'linear');
    });

    $('.navbar-toggler-icon').click(() => {
        var pageWP = $('.page-wrapper');
        var toggleICON = $('.navbar-toggler-icon i');
        pageWP.toggleClass('full');
        if (pageWP.hasClass('full')) {
            toggleICON.addClass('icon-menu');
            toggleICON.removeClass('icon-x');
            return true;
        }
        toggleICON.removeClass('icon-menu');
        toggleICON.toggleClass('icon-x');
    });
});